from rest_framework import viewsets, generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Job, Application, Notification
from .serializers import JobSerializer, ApplicationSerializer, NotificationSerializer

class JobViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Job.objects.all()  # All users can view jobs

class JobSearchView(generics.ListAPIView):
    serializer_class = JobSerializer

    def get_queryset(self):
        queryset = Job.objects.all()
        keyword = self.request.query_params.get('keyword', None)
        location = self.request.query_params.get('location', None)
        job_type = self.request.query_params.get('job_type', None)

        if keyword:
            queryset = queryset.filter(title__icontains=keyword)
        if location:
            queryset = queryset.filter(location__icontains=location)
        if job_type:
            queryset = queryset.filter(job_type__iexact=job_type)

        return queryset

class JobDetailView(generics.RetrieveAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class JobStatusUpdateView(generics.UpdateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        new_status = request.data.get('status')
        if new_status:
            instance.status = new_status
            instance.save()
            return Response({'status': 'Job status updated'}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid status'}, status=status.HTTP_400_BAD_REQUEST)

class JobApplicationView(generics.CreateAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        instance = serializer.save(candidate_id=self.request.user.id)
        Notification.objects.create(employer_id=self.request.data.get('employer_id'), application_id=instance)

class CandidateApplicationsView(generics.ListAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Application.objects.filter(candidate_id=self.request.user.id)

class NotificationView(generics.ListAPIView):
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        employer_id = self.kwargs['employer_id']
        return Notification.objects.filter(employer_id=employer_id)

class MarkNotificationAsReadView(generics.UpdateAPIView):
    queryset = Notification.objects.all()
    permission_classes = [IsAuthenticated]

    def patch(self, request, employer_id, notification_id, *args, **kwargs):
        notification = self.get_object()
        notification.is_read = True
        notification.save()
        return Response({'status': 'Notification marked as read'}, status=status.HTTP_200_OK)