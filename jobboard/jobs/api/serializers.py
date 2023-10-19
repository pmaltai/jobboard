from rest_framework import serializers
from jobboard.jobs.models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = "__all__"
        read_only_fields = ("user", "date_created", "date_updated")
