from django.shortcuts import render
# from .models import Article
from .models import Movie
# from .models import Movienow
# from .models import Movieup
from .models import Theatre
from .models import Showtime
from .models import Screen
# Create your views here.
from django.http import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.http import JsonResponse
# from .models import Movieup
# from .models import Movienow
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import QueryDict
import json
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib.auth import login
from django.contrib import messages
from django.http import HttpResponseBadRequest
from django.db.models import Q
from datetime import datetime, timedelta



# def showtime(request):
#     if request.method == 'POST':
#         print(request.POST)
        
#         # movie_name = request.POST.get('movieName')
#         # selected_date = request.POST.get('selectedDate')
#         # movie_loc = request.POST.get('movieLoc')
#         movie_name = 'jaws'
#         selected_date = '2023-05-01'
#         movie_loc = 'mananthavady'
#         print(selected_date)
#         print(movie_loc)
#         # Do something with the data
#         # ...

#         return JsonResponse({'status': 'success'})
#     else:
#         return JsonResponse({'status': 'error', 'message': 'Invalid request method'})

def showtime(request):
    selected_date_str = '2023-05-01'
    selected_date_str = json.loads(request.body)['selectedDate']
    movie_loc = json.loads(request.body)['movieLoc']
    movie_name = json.loads(request.body)['movieName']
    print(selected_date_str)
        
    selected_date = datetime.strptime(selected_date_str, '%Y-%m-%d').date()
    theaters = Theatre.objects.filter(location=movie_loc)
    start_time = datetime.combine(selected_date, datetime.min.time())
    end_time = start_time + timedelta(days=1)
    showtimes = Showtime.objects.filter(
        movie__name=movie_name,
        start_time__gte=start_time,
        start_time__lt=end_time,
        theatre__in=theaters
    ).select_related('theatre', 'screen')

    # Create a list of dictionaries containing the theater name and its showtimes
    theater_showtimes = []
    for theater in theaters:
        theater_showtimes_for_movie = showtimes.filter(theatre=theater)
        if theater_showtimes_for_movie.exists():
            theater_dict = {
                'name': theater.name,
                'showtimes': []
            }
            for showtime in theater_showtimes_for_movie:
                theater_dict['showtimes'].append({
                    'screen': showtime.screen.name,
                    'start_time': showtime.start_time.strftime('%Y-%m-%d %H:%M:%S'),
                    'end_time': showtime.end_time.strftime('%Y-%m-%d %H:%M:%S')
                })
            theater_showtimes.append(theater_dict)
        
    print(theater_showtimes)
    # Return the theater showtimes as a JSON response
    return JsonResponse({'status': 'success', 'theater_showtimes': theater_showtimes})



# # this is mAIN this works
# def showtime(request):
#     # if request.method == 'POST':
#         # movie_name = 'jaws'
#         selected_date_str = '2023-04-30'
#         # movie_loc = 'mananthavady'
#         # selected_date_str = json.loads(request.body)['selectedDate']
#         movie_loc = json.loads(request.body)['movieLoc']
#         movie_name = json.loads(request.body)['movieName']
        
#         selected_date = datetime.strptime(selected_date_str, '%Y-%m-%d').date()
#         print(selected_date)
#         print(movie_loc)
#         print(movie_name)
#         theaters = Theatre.objects.filter(location=movie_loc)
#         # Get the showtimes for the given movie and date, and filter by theater
#         start_time = datetime.combine(selected_date, datetime.min.time())
#         end_time = start_time + timedelta(days=1)
#         showtimes = Showtime.objects.filter(
#             movie__name=movie_name,
#             start_time__gte=start_time,
#             start_time__lt=end_time,
#             theatre__in=theaters
#         )

#         # Create a list of dictionaries containing the theater name and its showtimes
#         theater_showtimes = []
#         for theater in theaters:
#             theater_dict = {
#                 'name': theater.name,
#                 'showtimes': []
#             }
#             for showtime in showtimes.filter(theatre=theater):
#                 theater_dict['showtimes'].append({
#                     'screen': showtime.screen.name,
#                     'start_time': showtime.start_time.strftime('%Y-%m-%d %H:%M:%S'),
#                     'end_time': showtime.end_time.strftime('%Y-%m-%d %H:%M:%S')
#                 })
#             theater_showtimes.append(theater_dict)
#         print(theater_showtimes)
#         # Return the theater showtimes as a JSON response
#         return JsonResponse({'status': 'success', 'theater_showtimes': theater_showtimes})
        
        
    # else:
    #     return JsonResponse({'status': 'error', 'message': 'Invalid request method'})





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


def posternow(request):
    print(request.body)  # Add this line to check the value of request.body
    location = json.loads(request.body)['movieLoc']
    print(location)
    theatres = Theatre.objects.filter(location=location)
    print(theatres)
    # nowshowing_movies = Movie.objects.filter(theatres__in=theatres, availability='nowshowing').distinct()
    nowshowing_movies = Movie.objects.filter(showtime__theatre__location=location, availability='nowshowing').distinct()
    print(nowshowing_movies)
    

    data = {}
    for i, movie in enumerate(nowshowing_movies):
        data[f"obj{i}"] = {
            "name": movie.name,
            "genre": movie.genre,
            "image": movie.image.url if movie.image else None,
            "desc": movie.description,
            "lang":movie.language,
            "dir":movie.director,
        }
        print(movie.name)
    return JsonResponse({'movie': data})


def posterup(request):
    print(request.body)  # Add this line to check the value of request.body
    location = json.loads(request.body)['movieLoc']
    print(location)
    theatres = Theatre.objects.filter(location=location)
    print(theatres)
    # nowshowing_movies = Movie.objects.filter(theatres__in=theatres, availability='nowshowing').distinct()
    nowshowing_movies = Movie.objects.filter(showtime__theatre__location=location, availability='upcoming').distinct()
    print(nowshowing_movies)
    

    data = {}
    for i, movie in enumerate(nowshowing_movies):
        data[f"obj{i}"] = {
            "name": movie.name,
            "genre": movie.genre,
            "image": movie.image.url if movie.image else None,
            "desc": movie.description,
            "lang":movie.language,
            "dir":movie.director,
        }
        print(movie.name)
    return JsonResponse({'movie': data})





# our first step in displaying poster 
# def posternow(request):
#     my_text='error'
#     location = request.GET.get('selectedOption')
#     print(location)
#     theatres=Theatre.objects.filter(location=location)
    
#     mov=Movie.objects.all()
#     for the in theatres:
#         naam=the.name
#         print(naam)
#     # mov = Movie.objects.filter(name='avatar').values('name', 'genre','desc','image').first()
#     # # mov=Movie.objects.filter(name='jaws').first()
#     # if mov is not None:
#     #     # my_t = mov.genre
#     #     # print(mov.genre)
#     #     my_t = mov['genre']
#     #     print(mov['genre'])
#     # else:
#     #     my_t = "Unknown"
#     #     print("none")
#     # my_text = my_text + " " + my_t
#     # print(my_text)
#     # data = {
#     #     obj1: {'name': mov.name,'age': mov.genre,'email': mov.desc,'image':mov.image.url if mov.image else None,'image': mov.image,},
#     #     obj1: { name: 'John', age: 25 },
#     # }
#     data = {
#     #    'obj1': { 'name': 'John', 'age': 25 },
#     #    'obj2': { 'name': 'Jane', 'age': 30 },
#     #    'obj3': { 'name': 'Jack', 'age': 35 },
#         }
#     i=0
#     for movie in mov:
#      name=movie.name
#      genre=movie.genre
#      image=movie.image.url     
#      desc=movie.description
#     #  director=movie.director
#     #  print(movie.name)
#     #  print(movie.genre)
#      data[f"obj{i}"] = {"name": name, "genre": genre, "image": image, "desc": desc}
#      i=i+1

    
#     return JsonResponse({'movie': data})
#     # return JsonResponse({'text': mov.genre})




# def gettext(request):
#     # mov=Movienow.objects.filter(name='jaws').first()
#     print(mov.image)
#     data = {
#         'name': mov.name,
#         'age': mov.genre,
#         'email': mov.desc,
#         'image':mov.image.url if mov.image else None,
#         # 'image': mov.image,
#     }
#     print(data['image'])

#     return JsonResponse(data)
    # my_text = data.age 
    # return JsonResponse({'text': my_text})

# def my_view(request):
#     print("kittiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
#     data = {
#         'name': 'John Doe2',
#         'age': 30,
#         'email': 'johndoe@example.com'
#     }
#     return JsonResponse(data)



# def article_list(request):
#     articles = Article.objects.all()
#     data = {
#         'articles': [
#             {
#                 'title': article.title,
#                 'author': article.author,
#                 'content': article.content,
#             }
#             for article in articles
#         ]
#     }
#     return JsonResponse(data)



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



# main content
# # Get the theaters that are located in the given area
#         theaters = Theatre.objects.filter(location=movie_loc)

#         # Get the showtimes for the given movie and date, and filter by theater
#         showtimes = Showtime.objects.filter(
#             movie__name=movie_name,
#             start_time__date=selected_date,
#             theatre__in=theaters
#         )

#         # Create a list of dictionaries containing the theater name and its showtimes
#         theater_showtimes = []
#         for theater in theaters:
#             theater_dict = {
#                 'name': theater.name,
#                 'showtimes': []
#             }
#             for showtime in showtimes.filter(theatre=theater):
#                 theater_dict['showtimes'].append({
#                     'screen': showtime.screen.name,
#                     'start_time': showtime.start_time.strftime('%Y-%m-%d %H:%M:%S'),
#                     'end_time': showtime.end_time.strftime('%Y-%m-%d %H:%M:%S')
#                 })
#             theater_showtimes.append(theater_dict)
#         # print(theater_showtimes)
#         # Return the theater showtimes as a JSON response
#         return JsonResponse({'status': 'success', 'theater_showtimes': theater_showtimes})