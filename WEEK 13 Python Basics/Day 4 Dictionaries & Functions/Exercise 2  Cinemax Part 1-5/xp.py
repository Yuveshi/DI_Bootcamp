family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total = 0
for name, age in family.items():
   if age >= 3 and age <= 12:
      total += 10
      print(f"{name} has to pay $10")
   elif age > 12:
      total += 15
      print(f"{name} has to pay $15")
   elif age < 3:
      print(f"Ticket is free for {name}")
      
print(f"Total : {total}")
