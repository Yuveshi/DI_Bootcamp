# Initialize total cost to 0
total_cost = 0

while True:
    # Ask the user to input the age
    age_input = input("Enter the age of the person (or type 'done' to finish): ")

    # If the user types 'done', exit the loop
    if age_input.lower() == 'done':
        break

    # Convert the age input to an integer
    age = int(age_input)

    # Determine the ticket price based on age
    if age < 3:
        print("Ticket is free for age under 3.")
        ticket_price = 0
    elif 3 <= age <= 12:
        print("Ticket price is $10.")
        ticket_price = 10
    else:
        print("Ticket price is $15.")
        ticket_price = 15

    # Add the ticket price to the total cost
    total_cost += ticket_price

# Print the total cost for all the tickets
print(f"\nThe total cost for the family's tickets is: ${total_cost:.2f}")



# List of teenagers
teenagers = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']

# Create an empty list for those allowed to watch the movie
allowed_teenagers = []

# Loop over each teenager and ask for their age
for teenager in teenagers:
    age = int(input(f"Enter {teenager}'s age: "))

    # Check if they are between 16 and 21
    if 16 <= age <= 21:
        allowed_teenagers.append(teenager)
    else:
        print(f"{teenager} is not allowed to watch the movie and will be removed from the list.")

# Print the final list of teenagers allowed to watch the movie
print("\nFinal list of teenagers allowed to watch the movie:")
print(allowed_teenagers)
