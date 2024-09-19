from django.urls import path
from .views import display_person, display_people, display_all_people

urlpatterns = [
    path('person/', display_person, name='display_person'),
    path('people/', display_people, name='display_people'),
    path('all_people/', display_all_people, name='display_all_people'),
]
