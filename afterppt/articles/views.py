from django.shortcuts import render
from .models import Article
from .models import Movie
# Create your views here.
from django.http import JsonResponse


def my_view(request):
    my_text='Hello article myvieew'
    # mum=Movie.objects.filter(name='jaws').first()
    # if mum is not None:
    #     my_t = mum.genre
    #     print(mum.genre)
    # else:
    #     my_t = "Unknown"
    # # my_text = my_text + " " + my_t
    return JsonResponse({'text': my_text})




# def my_view(request):
#     print("kittiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
#     data = {
#         'name': 'John Doe2',
#         'age': 30,
#         'email': 'johndoe@example.com'
#     }
#     return JsonResponse(data)



def article_list(request):
    articles = Article.objects.all()
    data = {
        'articles': [
            {
                'title': article.title,
                'author': article.author,
                'content': article.content,
            }
            for article in articles
        ]
    }
    return JsonResponse(data)



def poster(request):
    my_text='Hello'
    # mum=Movie.objects.all()
    mum=Movie.objects.filter(name='jaws').first()
    if mum is not None:
        my_t = mum.genre
        print(mum.genre)
    else:
        my_t = "Unknown"
    # my_text = my_text + " " + my_t
    return JsonResponse({'text': mum})