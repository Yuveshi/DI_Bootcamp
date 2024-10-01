from faker import Faker

# Create a Faker instance
fake = Faker()

# Initialize an empty list to store user data
users = []

def add_user():
    """Add a new user to the users list with fake data."""
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    }
    users.append(user)

# Example: Add 5 users to demonstrate functionality
for _ in range(5):
    add_user()

# Print the list of users
for user in users:
    print(user)
