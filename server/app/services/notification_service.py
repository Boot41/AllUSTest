from .models import Notification

def create_notification(employer_id, application):
    Notification.objects.create(employer_id=employer_id, application_id=application)