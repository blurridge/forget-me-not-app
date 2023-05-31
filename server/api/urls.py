from django.urls import path 
from . import views 

urlpatterns = [
    path('', views.get_routes, name="routes"),
    path('todo/', views.manage_todos, name="todos"),
    path('todo/<str:id>', views.manage_current_todos, name="manage-todo"),
]