import random

def get_random_temp():
   seasons = {
      "winter" : [-10, 16],
      "spring" : [16, 25],
      "summer" : [25, 40],
      "autumn" : [16, 25]
   }
   season = random.choice(list(seasons.keys()))
   return random.randint(seasons[season][0], seasons[season][1])

temp = get_random_temp()
print(f"The current temperature is {temp} celcius")

if temp < 0:
   print("Brrr, it's freezing outside!")
elif temp >= 0 and temp <= 16:
   print("It's cold outside, but not freezing")
elif temp >=16 and temp <=23:
   print("It's a nice day outside")
elif 24 <= temp <= 32:
   print("It's a bit warm outside")
else:
   print("It's hot outside, stay hydrated!")