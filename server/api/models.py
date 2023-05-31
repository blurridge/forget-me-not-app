from django.db import models
import time

# Create your models here.

class Todo(models.Model):
    id = models.BigIntegerField(primary_key=True, default=int(time.time())) 
    message = models.TextField(null=True, blank=True)
    completed = models.BooleanField(default=False)
    time_updated = models.DateTimeField(auto_now=True)
    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.message[0:50]