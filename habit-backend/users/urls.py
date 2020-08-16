from . import views

from django.urls import path

urlpatterns = [
        path('api/signup', views.SignUpUserView.as_view(), name="signup"),
        path('api/login', views.LoginView.as_view(), name="login"),
]