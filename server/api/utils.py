from .models import Todo
from .serializers import TodoSerializer
from rest_framework.response import Response

def get_todos(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data)

def create_todo(request):
    data = request.data
    serializer = TodoSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

def edit_todo(request, id):
    data = request.data
    todo = Todo.objects.get(id=id)
    serializer = TodoSerializer(instance=todo, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

def delete_todo(request, id):
    todo = Todo.objects.get(id=id)
    todo.delete()
    return Response('Todo deleted!')