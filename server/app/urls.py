from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet, JobSearchView, JobDetailView, JobStatusUpdateView, JobApplicationView, CandidateApplicationsView

router = DefaultRouter()
router.register(r'jobs', JobViewSet)

urlpatterns = [
    path('employers/<int:employer_id>/', include(router.urls)),
    path('api/jobs/search/', JobSearchView.as_view(), name='job-search'),
    path('api/jobs/<int:pk>/', JobDetailView.as_view(), name='job-detail'),
    path('api/admin/jobs/', include(router.urls)),
    path('api/admin/jobs/<int:job_id>/status/', JobStatusUpdateView.as_view(), name='job-status-update'),
    path('api/jobs/<int:job_id>/apply/', JobApplicationView.as_view(), name='job-apply'),
    path('api/candidates/<int:candidate_id>/applications/', CandidateApplicationsView.as_view(), name='candidate-applications'),
]