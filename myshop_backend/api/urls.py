from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenVerifyView
)

urlpatterns = [
    path('', views.get_routes),
    path('refresh_token', TokenRefreshView.as_view(), name='token_refresh'),
    path('verify_token', TokenVerifyView.as_view(), name='token_verify'),
    path('login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register', views.RegisterView.as_view(), name='auth_register'),
    path('logout', views.LogoutView.as_view(), name='auth_logout'),
    path('product/<int:product_id>', views.GetProductView.as_view(), name='get_product'),
    path('wishlist/<int:product_id>', views.GetIsLikedProductView.as_view(), name='is_liked_product'),
    path('wishlist/add_remove', views.AddRemoveWishlistView.as_view(), name='add_remove_wishlist'),
    path('wishlist', views.GetWishlistView.as_view(), name='get_wishlist'),
    path('product_by_category', views.GetProductByCategoryView.as_view(), name='get_product_by_category'),
    path('add_remove_cart_item', views.AddRemoveCartItemView.as_view(), name='add_remove_cart_item'),
    path('cart', views.CartDetailView.as_view(), name='cart_detail'),
    path('checkout', views.CheckoutView.as_view(), name='checkout'),
]
