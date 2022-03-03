from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from pyexpat import model
from statistics import mode
import random

class Follower(models.Model):
	userThatFollows = models.ForeignKey(User, on_delete = models.CASCADE, related_name="userThatFollows")
	userGetsFollowed = models.ForeignKey(User, on_delete = models.CASCADE, related_name="userGetsFollowed")

class Category(models.Model):
    
    name = models.CharField(max_length = 50)


class Recipe(models.Model):
    recipeid = models.IntegerField(unique=True, primary_key=True, default = 0) #trenger vel ikke id?
    owner = models.TextField(null=True) #hvorfor er ikke dette en fremmednøkkel til user?
    title = models.CharField(max_length = 100)
    image = models.ImageField(blank = True, null = True)
    time_estimate = models.CharField(max_length = 50)
    preparation = models.TextField(null=True)
    ingredients = models.TextField(blank = True, null = True) #Split the ingredients on ","
    scoreOfRecipe = models.FloatField(default=None, null=True)
    category = models.TextField() #Split the categories on ","
    
    def get_self(self):
        return self
    def get_selfID(self):
        return self.recipeid
    def get_userid(self):
        return self.owner
    def get_rest(self):
        return self.title, self.image, self.time_estimate, self.preparation, self.scoreOfRecipe, self.category
class Comment(models.Model):
    #commentid = models.IntegerField(unique=True, nullable=False, primary_key=True)
    content = models.TextField()
    owner = models.ForeignKey(User, on_delete = models.CASCADE)
    belongTo = models.ForeignKey(Recipe, on_delete = models.CASCADE)

class Like(models.Model):
    userThatLikes = models.ForeignKey(User, on_delete = models.CASCADE)
    recipeThatIsLiked = models.ForeignKey(Recipe, on_delete = models.CASCADE)

# class Score(models.Model):
#     class ScoreValue(models.IntegerChoices):
#         ONE = 1
#         TWO = 2
#         THREE = 3
#         FOUR = 4
#         FIVE = 5
#     #scorid = models.IntegerField(unique=True, nullable=False, primary_key=True)
#     value = models.IntegerField(choices = ScoreValue.choices)
#     scoreFrom = models.ForeignKey(User, on_delete = models.CASCADE)
#     scoreTo = models.ForeignKey(Recipe, on_delete = models.CASCADE)

class Favorite(models.Model):
    #favoritid = models.IntegerField(unique=True, nullable=False, primary_key=True)
    userThatFavorites = models.ForeignKey(User, on_delete = models.CASCADE)
    recipeThatIsFavorited = models.ForeignKey(Recipe, on_delete = models.CASCADE)




#admin.site.register(User, UserAdmin)

def CreateUser(brukernavn, epost, passord):
    #get_user_model().objects.create_user(brukernavn, bursdag, passord)
    user = authenticate(username= brukernavn, password= passord)
    if user is not None:
        print("this user already exsist")
    else:
        bruker = User.objects.create_user(brukernavn, epost, passord)
        return bruker
    
def Login(brukernavn, passord):
    user = authenticate(username= brukernavn, password= passord)
    if user is not None:
        return user
    else:
        print("passord eller brukernavn er feil")

def GetPosts_User(username):
    liste =[]
    for i in Recipe:
        if (Recipe.get_brukerid().get_username() == username):
            liste += [Recipe.get_self()]
    return liste
        
def CreatePost(user, title, bilde, tid, kategori, tilbredning, ingredienser):
    post = Recipe(recipeid = random.randint(1,10000),owner = user, title = title, image= bilde, time_estimate = tid, ingredients = ingredienser, preparation = tilbredning, category = kategori)
    post.save()
    return post
