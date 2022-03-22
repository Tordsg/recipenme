import base64
import email
from django import http
from django.forms import JSONField
from django.http import Http404, HttpResponse, HttpResponseBadRequest, HttpResponseNotFound, JsonResponse, request
from django.shortcuts import get_object_or_404
from .models import CreatePost, CreateUser, Recipe, User
from .serializer import userSerializer, recipeForm, getRecipeSerializer
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
def handle_uploaded_file(f):
    with open('some/file/name.txt', 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
def postRecipe(request):
    if request.method == 'POST':
        try:
            form = recipeForm(request.POST or None, request.FILES or None)
            form.save()
            return HttpResponse('success')
        except:
            return HttpResponseBadRequest('The required fields are not filled')
    else:
        return HttpResponseBadRequest('Bad Request')

def recipe(request, pk):
    if(request.method=='GET'):
        try:
            recipes = Recipe.objects.get(pk = pk)
            s = getRecipeSerializer(recipes)
            return JsonResponse(s.data)
        except:
            return HttpResponseNotFound('notFound')
    else:
        return HttpResponseBadRequest('bad')
def getUserRecipes(request, pk):
    if(request.method=='GET'):
            recipes = Recipe.objects.filter(owner_id = pk).all()
            l = {}
            i = 0
            for recipe in recipes:
                l[i] = (getRecipeSerializer(recipe).data)
                i += 1
            return JsonResponse(l)
    else:
        return HttpResponseBadRequest('bad')
