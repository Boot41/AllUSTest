def filter_jobs(queryset, keyword=None, location=None, job_type=None):
    if keyword:
        queryset = queryset.filter(title__icontains=keyword)
    if location:
        queryset = queryset.filter(location__icontains=location)
    if job_type:
        queryset = queryset.filter(job_type__iexact=job_type)
    return queryset