from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes),
    path('login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register', views.RegisterView.as_view(), name='auth_register'),
    path('logout', views.LogoutView.as_view(), name='auth_logout'),
]
