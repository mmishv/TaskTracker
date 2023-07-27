from django.urls import path
from .views import TaskListCreateView, TaskRetrieveUpdateDestroyView, UserTaskListView

urlpatterns = [
    path('tasks/', TaskListCreateView.as_view(), name='task-list-create'),
    path('tasks/<int:pk>/', TaskRetrieveUpdateDestroyView.as_view(), name='task-retrieve-update-destroy'),
    path('users/<int:user_id>/tasks/', UserTaskListView.as_view(), name='user-task-list'),
]
