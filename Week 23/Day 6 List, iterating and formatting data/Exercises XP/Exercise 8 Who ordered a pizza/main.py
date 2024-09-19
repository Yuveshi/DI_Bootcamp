# Initialize an empty list to store the toppings
toppings = []

# Initialize the base price of the pizza
base_price = 10

# Initialize the topping price
topping_price = 2.5

# Start a loop to ask for pizza toppings
while True:
    topping = input("Enter a pizza topping (type 'quit' to finish): ")

    # If the user types 'quit', break the loop
    if topping.lower() == 'quit':
        break

    # Otherwise, add the topping to the list and display a message
    toppings.append(topping)
    print(f"Adding {topping} to your pizza!")

# Calculate the total price
total_price = base_price + (len(toppings) * topping_price)

# Print all the toppings and the total price
print("\nToppings on your pizza:")
for topping in toppings:
    print(f"- {topping}")

print(f"\nTotal price: ${total_price:.2f}")
