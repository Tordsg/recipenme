from rest_framework import serializers
from .models import User, Recipe
class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name','last_name','email','password')
class recipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('owner','title','image','time_estimate','preparation','ingredients','recipe_score','category')