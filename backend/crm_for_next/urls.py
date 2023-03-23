from django.urls import path
from .views import FeedbackCreateView

urlpatterns = [
    path('feedback/create/', FeedbackCreateView.as_view(), name='feedback_create'), # к основному url +'em; Обращается к вьюхе смотри в импорт
]