import unittest
import os

import requests

class APITestCase(unittest.TestCase):
    base_url = 'http://127.0.0.1:8000/api_fdsam/'

    def test_create_feedback(self):
        url = self.base_url + 'feedback/create/'
        token = os.environ.get('RECAPTCHAPK')
        print(token)
        data = {
            'name': 'TestCaseDEVlocal',
            'phone_number': '1234567890',
            'recaptcha_token': token ,
        }

        response = requests.post(url, data=data)
        # Проверяем код состояния HTTP
        self.assertEqual(response.status_code, 201)  # Ожидаем код 201 (Created)
    
        # Проверяем, что объект был создан успешно
        feedback = response.json()
        self.assertEqual(feedback['name'], 'TestCaseDEVlocal')
        self.assertEqual(feedback['phone_number'], '1234567890')
        
    

if __name__ == '__main__':
    unittest.main()