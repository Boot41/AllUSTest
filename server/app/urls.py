from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet, JobSearchView, JobDetailView

router = DefaultRouter()
router.register(r'jobs', JobViewSet)

urlpatterns = [
    path('employers/<int:employer_id>/', include(router.urls)),
    path('api/jobs/search/', JobSearchView.as_view(), name='job-search'),
    path('api/jobs/<int:pk>/', JobDetailView.as_view(), name='job-detail'),
]