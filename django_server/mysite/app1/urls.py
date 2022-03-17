#this is the file where we'll add our patterns as we build the application

from django.urls import path
from . import views
from .models import User

urlpatterns = [
    path('user', views.loginUser, name = 'loginUser'),
    path('user/<int:user_id>', views.getUser, name = 'getSpesificUser'),
    path('random', views.randomUser, name = 'randomUser'),
    path('createUser', views.createUser, name = 'creatingAUser'),
    path('createUser/<int:pk>', views.createUser),
    path('recipe', views.recipe),
    path('recipe/<int:pk>', views.recipe)
]