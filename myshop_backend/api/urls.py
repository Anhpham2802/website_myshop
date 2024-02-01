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
]
