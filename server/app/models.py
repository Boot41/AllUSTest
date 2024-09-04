from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    
class Application(models.Model):
    candidate_id = models.IntegerField()
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    cover_letter = models.TextField()
    resume = models.FileField(upload_to='resumes/')
    applied_at = models.DateTimeField(auto_now_add=True)