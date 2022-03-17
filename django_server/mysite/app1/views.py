import email
from django import http
from django.forms import JSONField
from django.http import Http404, HttpResponse, HttpResponseNotFound, JsonResponse, request
from django.shortcuts import get_object_or_404
from .models import CreatePost, CreateUser, Recipe, User
from .serializer import userSerializer, recipeSerializer
import random
import json
from django.contrib.auth import authenticate

def createUser(request):
    if request.method=='POST':
        a = json.loads(request.readline().decode('utf-8'))
        user = CreateUser(a.get('username'),a.get('email'),a.get('password'), a.get('first_name'), a.get('last_name'))
        if user == 0:
            return HttpResponse('fail')
        user_id = authenticate(username = a.get('username'), password = a.get('password'))
        return HttpResponse(user_id.pk)

def randomUser(request):
    return HttpResponse("success")

def loginUser(request):
    if request.method=='POST':
        a = json.loads(request.readline().decode('utf-8'))
        user = authenticate(username=a.get('username'), password=a.get('password'))
        if user is not None:
            return HttpResponse(user.pk)
        else:
            ##return HttpResponseNotFound()
            return HttpResponse("fail")


def getUser(request, user_id):
    if request.method == 'GET':
        try:
            user = get_object_or_404(User, pk=user_id)
            if user is not None:
                ##serialized = userSerializer(user)
                data_details = {'first_name' : user.first_name, 'last_name':user.last_name, 'email' : user.email, 'username' : user.username}
                return HttpResponse(json.dumps(data_details))
        except:
            user = None
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
        post = CreatePost(a.get('owner'),a.get('title'),a.get('image'),a.get('time_estimate'),a.get('preparation'),a.get('ingredients'),a.get('category'))
        return HttpResponse(post.get_selfID())


        

