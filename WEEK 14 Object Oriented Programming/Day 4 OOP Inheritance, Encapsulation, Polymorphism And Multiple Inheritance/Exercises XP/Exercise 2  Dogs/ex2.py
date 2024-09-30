class Dog:
   def __init__(self, name, age, weight):
      self.name = name
      self.age = age
      self.weight = weight

   def bark(self):
      print(f"{self.name} is barking")

   def run_speed(self):
      return self.weight / self.age * 10
   
   def fight(self, other_dog):
      if self.run_speed() *self.weight > other_dog.run_speed() * other_dog.weight:
         return(f"{self.name} wins")
      else:
         return(f"{other_dog.name} wins")
      
# create three instances of dog
dog1 = Dog("Rex", 3, 20)
dog2 = Dog("Buddy", 5, 40)
dog3 = Dog("Max", 2, 10)

print(dog1.fight(dog2))