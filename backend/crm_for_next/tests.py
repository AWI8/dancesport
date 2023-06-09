from django.test import TestCase
from .models import Feedback

class FeedbackModelTestCase(TestCase):
    def test_create_feedback(self):
        feedback = Feedback.objects.create(
            name='John Doe',
            phone_number='1234567890'
        )
        print(feedback.name)
        # Assert that the feedback object was created
        self.assertIsNotNone(feedback.id)
        self.assertEqual(feedback.name, 'John Doe')
        self.assertEqual(feedback.phone_number, '1234567890')