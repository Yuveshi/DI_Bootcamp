from django.http import HttpResponse

def display_person(request):
    name = 'Bob Smith'
    age = 35
    country = 'USA'
    return HttpResponse(f'Name: {name}, Age: {age}, Country: {country}')

def display_people(request):
    people = ['bob', 'martha', 'fabio', 'john']
    people_sorted = sorted([name.capitalize() for name in people])
    return HttpResponse(', '.join(people_sorted))

def display_all_people(request):
    all_people = [
        {
            'id': 1,
            'name': 'Bob Smith',
            'age': 35,
            'country': 'USA'
        },
        {
            'id': 2,
            'name': 'Martha Smith',
            'age': 60,
            'country': 'USA'
        },
        {
            'id': 3,
            'name': 'Fabio Alberto',
            'age': 18,
            'country': 'Italy'
        },
        {
            'id': 4,
            'name': 'Dietrich Stein',
            'age': 85,
            'country': 'Germany'
        }
    ]
    sorted_people = sorted(all_people, key=lambda x: x['age'])
    people_info = ', '.join([f"Name: {p['name']}, Age: {p['age']}, Country: {p['country']}" for p in sorted_people])
    return HttpResponse(people_info)
