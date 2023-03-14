from django.contrib import admin

from .models import Feedback



class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone_number', 'create_date', 'create_time_formatted')

    def create_time_formatted(self, obj):
        return obj.create_time.strftime("%H:%M")

    create_time_formatted.short_description = 'Time'


admin.site.register(Feedback, FeedbackAdmin)
