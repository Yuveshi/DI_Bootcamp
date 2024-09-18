import random
def generate_random_number():
   return random.randint(1,100)

num1 = generate_random_number()
num2 = generate_random_number()
if num1 == num2:
   print("The numbers are the same")
else:
   print("The numbers are different")
   print(num1)
   print(num2)