from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=50)
    status = models.CharField(max_length=50)

class Application(models.Model):
    job = models.ForeignKey(Job, related_name='applications', on_delete=models.CASCADE)
    candidate_id = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

class Notification(models.Model):
    employer_id = models.IntegerField()
    application_id = models.ForeignKey(Application, on_delete=models.CASCADE)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)