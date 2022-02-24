from pyexpat import model
from statistics import mode
from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length = 50)
    last_name = models.CharField(max_length = 50)
    email = models.CharField(max_length = 100, unique = True)
    password = models.CharField(max_length = 50)


class Follower(models.Model):
	userThatFollows = models.ForeignKey(User, on_delete = models.CASCADE)
	userGetsFollowed = models.ForeignKey(User, on_delete = models.CASCADE)

class Category(models.Model):
    name = models.CharField(max_length = 50)

class Recipe(models.Model):
    owner = models.ForeignKey(User, on_delete = models.CASCADE)
    title = models.CharField(max_length = 100)
    image = models.ImageField(blank = True, null = True)
    time_estimate = models.CharField(max_length = 50)
    preparation = models.TextField()
    ingredients = models.TextField() #Split the ingredients on ","
    score = models.FloatField(max_digits = 2, decimal_places = 1, default=None)
    category = models.ManyToManyField(Category)

class Comment(models.Model):
    content = models.TextField()
    owner = models.ForeignKey(User, on_delete = models.CASCADE)
    belongTo = models.ForeignKey(Recipe, on_delete = models.CASCADE)

class Like(models.Model):
    userThatLikes = models.ForeignKey(User, on_delete = models.CASCADE)
    recipeThatIsLiked = models.ForeignKey(Recipe, on_delete = models.CASCADE)

class Score(models.Model):
    class ScoreValue(models.IntegerChoices):
        ONE = 1
        TWO = 2
        THREE = 3
        FOUR = 4
        FIVE = 5
    value = models.IntegerField(choices = ScoreValue.choices)
    scoreFrom = models.ForeignKey(User, on_delete = models.CASCADE)
    scoreTo = models.ForeignKey(Recipe, on_delete = models.CASCADE)

class Favorite(models.Model):
    userThatFavorites = models.ForeignKey(User, on_delete = models.CASCADE)
    recipeThatIsFavorited = models.ForeignKey(Recipe, on_delete = models.CASCADE)