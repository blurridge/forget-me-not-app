from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Todo
from .serializers import TodoSerializer

# Create your views here.

@api_view(['GET'])
def get_routes(request):
    routes = [
        {
            'Endpoint': '/todo/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of todos'
        },
        {
            'Endpoint': '/todo/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single todo object'
        },
        {
            'Endpoint': '/todo/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new todo with data sent in post request'
        },
        {
            'Endpoint': '/todo/id/edit/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing todo with data sent in post request'
        },
        {
            'Endpoint': '/todo/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes an existing todo'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def get_todos(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_todo(request, id):
    todos = Todo.objects.get(id=id)
    serializer = TodoSerializer(todos, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def edit_todo(request, id):
    data = request.data
    todo = Todo.objects.get(id=id)
    serializer = TodoSerializer(instance=todo, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
