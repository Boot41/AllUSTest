from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    employer = models.ForeignKey('auth.User', related_name='jobs', on_delete=models.CASCADE)

    def __str__(self):
        return self.title