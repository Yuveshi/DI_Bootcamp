# Given family dictionary with names and ages
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# Initialize total cost
total_cost = 0

# Loop through the family dictionary
for name, age in family.items():
    if age < 3:
        ticket_price = 0  # Ticket is free for children under 3
    elif 3 <= age <= 12:
        ticket_price = 10  # Ticket is $10 for children between 3 and 12
    else:
        ticket_price = 15  # Ticket is $15 for people over 12

    # Add ticket price to the total cost
    total_cost += ticket_price

    # Print individual ticket price
    print(f"{name.capitalize()}'s ticket price: ${ticket_price}")

# Print total cost
print(f"\nTotal cost for the family: ${total_cost}")



# Empty dictionary to store family data
family = {}

# Ask user how many family members there are
num_members = int(input("How many family members? "))

# Loop to gather names and ages from the user
for i in range(num_members):
    name = input(f"Enter the name of family member {i+1}: ").lower()
    age = int(input(f"Enter {name.capitalize()}'s age: "))
    family[name] = age

# Initialize total cost
total_cost = 0

# Loop through the family dictionary
for name, age in family.items():
    if age < 3:
        ticket_price = 0  # Ticket is free for children under 3
    elif 3 <= age <= 12:
        ticket_price = 10  # Ticket is $10 for children between 3 and 12
    else:
        ticket_price = 15  # Ticket is $15 for people over 12

    # Add ticket price to the total cost
    total_cost += ticket_price

    # Print individual ticket price
    print(f"{name.capitalize()}'s ticket price: ${ticket_price}")

# Print total cost
print(f"\nTotal cost for the family: ${total_cost}")

