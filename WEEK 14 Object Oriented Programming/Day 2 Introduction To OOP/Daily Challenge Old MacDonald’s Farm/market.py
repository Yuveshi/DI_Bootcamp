class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, quantity=1):
        if animal_type in self.animals:
            self.animals[animal_type] += quantity
        else:
            self.animals[animal_type] = quantity

    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            info += f"{animal.ljust(10)} : {count}\n"
        info += "\n    E-I-E-I-0!"
        return info

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animals = self.get_animal_types()
        animal_list = [animal + "s" for animal in animals]
        return f"{self.name}'s farm has " + ", ".join(animal_list[:-1]) + " and " + animal_list[-1] + "."


# Create a Farm object
macdonald = Farm("McDonald")

# Add animals
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

# Print farm information
print(macdonald.get_info())

# Print short info
print(macdonald.get_short_info())
