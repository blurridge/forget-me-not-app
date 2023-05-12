from django.db import models

# Create your models here.

class Todo(models.Model):
    message = models.TextField(null=True, blank=True)
    time_updated = models.DateTimeField(auto_now=True)
    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.message[0:50]