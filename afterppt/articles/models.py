from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return self.title
class Movie(models.Model):
    genre=models.CharField(max_length=50)
    desc=models.TextField()
    image=models.ImageField(upload_to='movie',null=True)
    name=models.CharField(max_length=50)