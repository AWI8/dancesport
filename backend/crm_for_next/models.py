import requests, os, datetime

from django.db import models


class Feedback(models.Model):
    """
    Соответственно классмодели Feedback
    """
    name = models.CharField(max_length=100) # Поле получаемое в api
    phone_number = models.CharField(max_length=20) # Поле получаемое в api

    create_date = models.DateField(auto_now=True) # Автополя 
    create_time = models.TimeField(auto_now=True)

    def __str__(self):
        return self.name 
        

    def save(self, *args, **kwargs):
        # Call the parent class's save() method to save the object
        super().save(*args, **kwargs)

        # Send a notification via Telegram
        bot_token = os.environ.get('BOT_TOKEN')
        chat_id = os.environ.get('CHAT_ID')
        message_text = f"New feedback from: {self.name} - {self.phone_number}"
        response = requests.post(
            f"https://api.telegram.org/bot{bot_token}/sendMessage",
            data={
                "chat_id": chat_id,
                "text": message_text,
            }
        )