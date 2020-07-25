from . import views

from django.urls import path

urlpatterns = [
        path('api/signup', views.SignUpUserView.as_view(), name="signup"),
]