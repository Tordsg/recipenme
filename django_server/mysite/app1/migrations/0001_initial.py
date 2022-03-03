# Generated by Django 4.0.2 on 2022-03-02 12:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('recipeid', models.IntegerField(default=0, primary_key=True, serialize=False, unique=True)),
                ('title', models.CharField(max_length=100)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('time_estimate', models.CharField(max_length=50)),
                ('preparation', models.TextField()),
                ('ingredients', models.TextField()),
                ('scoreOfRecipe', models.FloatField(default=None)),
                ('category', models.ManyToManyField(to='app1.Category')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recipeThatIsLiked', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app1.recipe')),
                ('userThatLikes', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Follower',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userGetsFollowed', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='userGetsFollowed', to=settings.AUTH_USER_MODEL)),
                ('userThatFollows', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='userThatFollows', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recipeThatIsFavorited', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app1.recipe')),
                ('userThatFavorites', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('belongTo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app1.recipe')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]