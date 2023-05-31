from django.urls import path 
from . import views 

urlpatterns = [
    path('', views.get_routes, name="routes"),
    path('todo/', views.get_todos, name="todos"),
    path('todo/create', views.create_todo, name="create-todo"),
    path('todo/<str:id>/edit', views.edit_todo, name="edit-todo"),
    path('todo/<str:id>/delete', views.delete_todo, name="delete-todo"),
    path('todo/<str:id>', views.get_todo, name="todo"),
]