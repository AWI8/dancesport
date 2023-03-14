import datetime
import requests
from django.db import models

import enviroment

import telegram

class Feedback(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)

    create_date = models.DateField(auto_now=True)
    create_time = models.TimeField(auto_now=True)

    def __str__(self):
        return self.name
        

    def save(self, *args, **kwargs):
        # Call the parent class's save() method to save the object
        super().save(*args, **kwargs)

        # Send a notification via Telegram
        bot_token = enviroment.bot_token
        chat_id = enviroment.chat_id
        message_text = f"New feedback from: {self.name} - {self.phone_number}"
        response = requests.post(
            f"https://api.telegram.org/bot{bot_token}/sendMessage",
            data={
                "chat_id": chat_id,
                "text": message_text,
            }
        )