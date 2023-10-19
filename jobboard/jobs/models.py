from django.db import models
from jobboard.users.models import User

class Job(models.Model):
    title = models.CharField(max_length=100)
    user = models.ForeignKey(User, related_name="jobs", on_delete=models.CASCADE)

    company_name = models.CharField(max_length=100)
    company_url = models.URLField()
    company_logo = models.ImageField(blank=True, null=True)

    location = models.CharField(max_length=100)
    salary = models.PositiveIntegerField()

    date_updated = models.DateTimeField(auto_now=True)
    date_created = models.DateTimeField(auto_now_add=True)

    remote = models.BooleanField(default=False)
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-date_created"]
