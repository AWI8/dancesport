from django.shortcuts import render
from django.conf import settings
from django.contrib import messages
from django.core.exceptions import ValidationError

from rest_framework import generics
from .models import Feedback
from .serializers import FeedbackSerializer
from captcha.fields import ReCaptchaField


class FeedbackCreateView(generics.CreateAPIView):
    """ Писал второпях даже не вникал что и как, получает доступ к Объектам модели Feedbeck
        Разбирает с помощью DRF сериалайзера
    
    """
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

    def perform_create(self, serializer):
        # Access the validated reCAPTCHA response
        recaptcha_response = self.request.data.get('recaptcha_token')

        # Validate the reCAPTCHA response
        recaptcha_field = ReCaptchaField()
        try:
            recaptcha_field.clean(recaptcha_response)
        except (ValidationError) as e:
            # If the validation fails, return an error response
            raise ValidationError({'recaptcha_token': e})

        # If the validation succeeds, save the feedback object
        feedback_data = serializer.validated_data
        feedback = Feedback.objects.create(
            name=feedback_data['name'],
            phone_number=feedback_data['phone_number']
        )

        # Do something with the feedback object
        # For example, you can send an email notification to the site admin
        # or log the feedback to a separate database table
        # ...