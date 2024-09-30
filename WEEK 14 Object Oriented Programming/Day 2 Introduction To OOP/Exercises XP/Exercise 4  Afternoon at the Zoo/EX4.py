class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:", self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        animal_groups = {}
        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in animal_groups:
                animal_groups[first_letter] = [animal]
            else:
                animal_groups[first_letter].append(animal)
        return animal_groups

    def get_groups(self):
        animal_groups = self.sort_animals()
        for group, animals in animal_groups.items():
            print(f"{group}: {animals}")


# Create the zoo
ramat_gan_safari = Zoo("Ramat Gan Safari")

# Add animals
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Elephant")
ramat_gan_safari.add_animal("Zebra")

# Print all animals
ramat_gan_safari.get_animals()

# Sell an animal
ramat_gan_safari.sell_animal("Elephant")

# Print remaining animals
ramat_gan_safari.get_animals()

# Print grouped animals
ramat_gan_safari.get_groups()
