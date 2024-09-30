from ex4.py import Family



class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name and member['age'] >= 18:
                print(f"{member['incredible_name']} uses {member['power']}")
            elif member['name'] == name:
                raise Exception(f"{name} is not over 18 years old")

    def incredible_presentation(self):
        print(f"*Here is our powerful family*\nThe {self.last_name} family:")
        super().family_presentation()


members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

# Create an instance of TheIncredibles
incredible_family = TheIncredibles("Incredibles", members)

# Use power for an adult
incredible_family.use_power('Michael')

# Present the family
incredible_family.incredible_presentation()

# Add a baby using the `born` method
incredible_family.born(name='Baby Jack', age=1, gender='Male', is_child=True, power='Unknown Power', incredible_name='JackJack')

# Present the family again
incredible_family.incredible_presentation()
