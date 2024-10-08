# urls.py
from django.urls import path
from .views import DepartmentAPIView, EmployeeAPIView, ProjectAPIView, TaskAPIView

urlpatterns = [
    path('departments/', DepartmentAPIView.as_view(), name='department-operations'),
    path('employees/', EmployeeAPIView.as_view(), name='employee-operations'),
    path('projects/', ProjectAPIView.as_view(), name='project-operations'),
    path('tasks/', TaskAPIView.as_view(), name='task-operations'),
]
