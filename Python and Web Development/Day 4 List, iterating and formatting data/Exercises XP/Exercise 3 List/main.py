# Initial list
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Step 1: Remove "Banana"
basket.remove("Banana")

# Step 2: Remove "Blueberries"
basket.remove("Blueberries")

# Step 3: Add "Kiwi" to the end of the list
basket.append("Kiwi")

# Step 4: Add "Apples" to the beginning of the list
basket.insert(0, "Apples")

# Step 5: Count how many apples are in the basket
apple_count = basket.count("Apples")
print(f"Number of Apples: {apple_count}")

# Step 6: Empty the basket
basket.clear()

# Step 7: Print the basket
print(basket)
