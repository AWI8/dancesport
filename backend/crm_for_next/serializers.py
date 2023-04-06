from rest_framework import serializers
from .models import Feedback
from captcha.fields import ReCaptchaField

class FeedbackSerializer(serializers.ModelSerializer):
    """
    Соответственно сериалайзер
    """
    recaptcha_response = ReCaptchaField()
    class Meta:
        model = Feedback
        fields = ('name', 'phone_number')