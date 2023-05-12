from django.urls import path 
from . import views 

urlpatterns = [
    path('', views.get_routes, name="routes"),
    path('todo/', views.get_todos, name="todos"),
    path('todo/<str:id>', views.get_todo, name="todo"),
]