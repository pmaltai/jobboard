from rest_framework import generics, permissions
from .serializers import JobSerializer
from jobboard.jobs.models import Job

class JobListView(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = JobSerializer

    def get_queryset(self):
        return Job.objects.filter(available=True)

class JobCreateView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = JobSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class JobUpdateView(generics.UpdateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = JobSerializer

    def get_queryset(self):
        return Job.objects.filter(available=True)

class JobDetailView(generics.RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = JobSerializer

    def get_queryset(self):
        return Job.objects.filter(available=True)

class JobDeleteView(generics.DestroyAPIView):
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Job.objects.filter(available=True)

