class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! A new child is born: {kwargs['name']}")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] > 18
        return False

    def family_presentation(self):
        print(f"The {self.last_name} family:")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is child: {member['is_child']}")


members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

# Create a family instance
my_family = Family("Smith", members)

# Add a new child
my_family.born(name="John", age=0, gender="Male", is_child=True)

# Check if a member is over 18
print(my_family.is_18('Michael'))

# Present the family
my_family.family_presentation()

