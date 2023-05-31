from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Todo
from .serializers import TodoSerializer
from .utils import *

# Create your views here.

@api_view(['GET'])
def get_routes(request):
    routes = [
        {
            'Endpoint': '/todo/',
            'method': 'GET / POST',
            'body': None,
            'description': 'GET returns all todos, POST creates a new todo'
        },
        {
            'Endpoint': '/todo/id',
            'method': 'PUT / DELETE',
            'body': None,
            'description': 'PUT allows you to edit a todo, DELETE removes a todo'
        },
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
def manage_todos(request):
    if request.method == "GET":
        return get_todos(request)
    if request.method == "POST":
        return create_todo(request)

@api_view(['PUT', 'DELETE'])
def manage_current_todos(request, id):
    if request.method == "PUT":
        return edit_todo(request, id)
    if request.method == "DELETE":
        return delete_todo(request, id)