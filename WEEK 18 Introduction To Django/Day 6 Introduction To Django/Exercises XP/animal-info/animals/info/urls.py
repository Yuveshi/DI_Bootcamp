from django.urls import path
from . import views

urlpatterns = [
    path('animals/', views.display_all_animals, name='all_animals'),
    path('families/', views.display_all_families, name='all_families'),
    path('animal/<int:animal_id>/', views.display_one_animal, name='one_animal'),
    path('animal_in_family/<int:family_id>/', views.display_animal_per_family, name='animals_in_family'),
]
