from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import *
from .serializer import *
from rest_framework_simplejwt.tokens import RefreshToken, OutstandingToken, BlacklistedToken

@api_view(['GET'])
def get_routes(request):
    routes = [
    ]

    return Response(routes)
    
#Login User
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

#Register User
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        if self.request.data.get('all'):
            token: OutstandingToken
            for token in OutstandingToken.objects.filter(user=request.user):
                _, _ = BlacklistedToken.objects.get_or_create(token=token)
            return Response({"status": "OK, goodbye, all refresh tokens blacklisted"}, status=204)
        refresh_token = self.request.data.get('refresh_token')
        token = RefreshToken(token=refresh_token)
        token.blacklist()
        return Response({"status": "OK, goodbye"}, status=204)

class GetProductView(APIView):
    permission_classes = (AllowAny,)
    def get(self, request, *args, **kwargs):
        product_id = self.kwargs['product_id']
        product = Product.objects.get(id=product_id)
        product_serializer = ProductSerializer(product)
        return Response(product_serializer.data)

class GetIsLikedProductView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, *args, **kwargs):
        product_id = self.kwargs['product_id']
        product = Product.objects.get(id=product_id)
        is_liked = LikeProduct.objects.filter(user=request.user, product=product).exists()
        return Response({'is_liked': is_liked})
    
class AddRemoveWishlistView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        product_id = request.data['product_id']
        if product_id is None:
            return Response({'status': 'failed'})
        
        product = Product.objects.get(id=product_id)

        if product is None:
            return Response({'status': 'failed'})
        
        if request.data.get('remove_from_wishlist', None) is not None:
            if LikeProduct.objects.filter(user=request.user, product=product).exists():
                LikeProduct.objects.filter(user=request.user, product=product).delete()
                return Response({'status': 'removed'})
            else:
                return Response({'status': 'failed'})

        if LikeProduct.objects.filter(user=request.user, product=product).exists():
            LikeProduct.objects.filter(user=request.user, product=product).delete()
            return Response({'status': 'removed'})
        else:
            LikeProduct.objects.create(user=request.user, product=product)
            return Response({'status': 'added'})

class GetWishlistView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, *args, **kwargs):
        wishlist = LikeProduct.objects.filter(user=request.user)
        wishlist_serializer = WishlistSerializer(wishlist, many=True)
        return Response(wishlist_serializer.data)
    
class GetProductByCategoryView(APIView):
    permission_classes = (AllowAny,)
    def get(self, request, *args, **kwargs):
        category = request.query_params.get('category', None).lower()
        # like sql in django
        products = Product.objects.filter(category__name__icontains=category)
        product_serializer = ProductSerializer(products, many=True)
        return Response(product_serializer.data)

class AddRemoveCartItemView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        product_id = request.data['product_id']
        if product_id is None:
            return Response({'status': 'failed'})
        
        product = Product.objects.get(id=product_id)

        if product is None:
            return Response({'status': 'failed'})
        
        if request.data.get('add_to_cart', None) is not None:
            quantity = 0
            size = None
            color = None
            if request.data.get('quantity', None) is not None:
                quantity = request.data['quantity']

            if request.data.get('size', None) is not None:
                size = request.data['size']

            if request.data.get('color', None) is not None:
                color = request.data['color']

            if CartItem.objects.filter(user=request.user, product=product).exists():
                cart_item = CartItem.objects.get(user=request.user, product=product)
                cart_item.quantity += int(quantity)
                cart_item.size = size
                cart_item.color = color
                cart_item.save()
                return Response({'status': 'added'})
            else:
                CartItem.objects.create(user=request.user, product=product, quantity=1, size=size, color=color)
                return Response({'status': 'added'})
        
        if request.data.get('remove_from_cart', None) is not None:
            if CartItem.objects.filter(user=request.user, product=product).exists():
                CartItem.objects.filter(user=request.user, product=product).delete()
                return Response({'status': 'removed'})
            else:
                return Response({'status': 'failed'})
        
        if request.data.get('increment', None) is not None:
            cart_item = CartItem.objects.get(user=request.user, product=product)
            cart_item.quantity += 1
            cart_item.save()
            return Response({'status': 'incremented'})
        
        if request.data.get('decrement', None) is not None:
            cart_item = CartItem.objects.get(user=request.user, product=product)
            cart_item.quantity -= 1
            cart_item.save()
            return Response({'status': 'decremented'})

class CartDetailView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, *args, **kwargs):
        cart_items = CartItem.objects.filter(user=request.user)
        cart_serializer = CartSerializer(cart_items, many=True)
        return Response(cart_serializer.data)

class CheckoutView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        phone = request.data['phone']
        city = request.data['city']
        district = request.data['district']
        ward = request.data['ward']
        payment_method = request.data['payment_method']
        cart_items = CartItem.objects.filter(user=request.user)
        total_price = 0
        for item in cart_items:
            if  item.product.discount_price:
                total_price += item.product.discount_price * item.quantity
            else:
                total_price += item.product.origin_price * item.quantity
        order = OrderDetail.objects.create(user=request.user, total_price=total_price, status='Đang chờ xử lý', city=city, district=district, ward=ward, phone=phone, payment_method=payment_method)
        for item in cart_items:
            OrderItem.objects.create(order=order, product=item.product, quantity=item.quantity, size=item.size, color=item.color)
        cart_items.delete()
        return Response({'status': 'success'})
    
class GetOrderHistoryView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, *args, **kwargs):
        ret_data = []
        orders = OrderDetail.objects.filter(user=request.user)
        for order in orders:
            ret_data.append(
                {
                    'order_items': OrderItemSerializer(OrderItem.objects.filter(order=order), many=True).data
                }
            )
        return Response(ret_data)
            
