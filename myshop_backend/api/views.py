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
