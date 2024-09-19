# Initial list of sandwich orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", 
                   "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# Inform that the deli has run out of Pastrami
print("The deli has run out of pastrami.")

# Remove all occurrences of "Pastrami sandwich" from sandwich_orders
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# Create an empty list to store finished sandwiches
finished_sandwiches = []

# Prepare each sandwich by moving from sandwich_orders to finished_sandwiches
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)  # Remove the first sandwich
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich.lower()}")

# After all sandwiches are made, you can print the finished sandwiches (optional)
print("\nAll sandwiches have been made:")
for sandwich in finished_sandwiches:
    print(f"- {sandwich}")
