from django import http
from django.forms import JSONField
from django.http import Http404, HttpResponse, HttpResponseNotFound, JsonResponse, request
from django.shortcuts import get_object_or_404
from .models import CreatePost, CreateUser, Recipe
from .serializer import userSerializer, recipeSerializer
import random
import json

def createUser(request):
    if request.method=='POST':
        a =json.loads(request.readline().decode('utf-8'))
        user = CreateUser(a.get('first_name') + a.get('last_name'),a.get('email'),a.get('password'))
        return HttpResponse('success')

def randomUser(request):
    return HttpResponse(user.objects.get())
def getUser(request):
    return HttpResponse(user)
def recipe(request):
    if(request.method=='GET'):
        try:
            getRecipe = Recipe.objects.get(pk=pk)
            serialized = recipeSerializer(getRecipe)
            return HttpResponse(serialized.data)
        except:
            return Http404
    elif(request.method=='POST'):
        a = json.loads(request.readline().decode('utf-8'))
        post = CreatePost(a.get('owner'),a.get('title'),a.get('image'),a.get('time_estimate'),a.get('category'),a.get('preparation'),a.get('ingredients'))
        return HttpResponse(post.get_selfID())


        

