from django.shortcuts import render

from rest_framework import generics
from .models import Feedback
from .serializers import FeedbackSerializer

class FeedbackCreateView(generics.CreateAPIView):
    """ Писал второпях даже не вникал что и как, получает доступ к Объектам модели Feedbeck
        Разбирает с помощью DRF сериалайзера
    
    """
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
