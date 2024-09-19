from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .data import animals, families

def display_all_animals(request):
    result = ''
    for animal in animals:
        result += f"Name: {animal['name']}, Legs: {animal['legs']}, Weight: {animal['weight']}, Height: {animal['height']}, Speed: {animal['speed']}<br>"
    return HttpResponse(result)

def display_all_families(request):
    result = ''
    for family in families:
        result += f"Family Name: {family['name']}<br>"
    return HttpResponse(result)

def display_one_animal(request, animal_id):
    for animal in animals:
        if animal['id'] == animal_id:
            result = f"Name: {animal['name']}, Legs: {animal['legs']}, Weight: {animal['weight']}, Height: {animal['height']}, Speed: {animal['speed']}"
            return HttpResponse(result)
    return HttpResponse("Animal not found")

def display_animal_per_family(request, family_id):
    result = ''
    for animal in animals:
        if animal['family'] == family_id:
            result += f"Name: {animal['name']}, Legs: {animal['legs']}, Weight: {animal['weight']}, Height: {animal['height']}, Speed: {animal['speed']}<br>"
    if not result:
        return HttpResponse("No animals found in this family")
    return HttpResponse(result)
