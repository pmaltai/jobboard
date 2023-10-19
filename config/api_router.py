from django.conf import settings
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter

from jobboard.users.api.views import UserViewSet
from jobboard.jobs.api import views

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)


app_name = "api"
urlpatterns = router.urls
urlpatterns += [
    path("jobs/", views.JobListView.as_view()),
    path("jobs/<pk>/", views.JobDetailView.as_view()),
    path("jobs/<pk>/update/", views.JobUpdateView.as_view()),
    path("jobs/<pk>/delete/", views.JobDeleteView.as_view()),
    path("create-job/", views.JobCreateView.as_view()),
]
