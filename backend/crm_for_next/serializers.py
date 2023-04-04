from rest_framework import serializers
from .models import Feedback

class FeedbackSerializer(serializers.ModelSerializer):
    """
    Соответственно сериалайзер
    """
    recaptcha_response = serializers.CharField(required=True)
    class Meta:
        model = Feedback
        fields = ('name', 'phone_number')