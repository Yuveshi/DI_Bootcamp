# Step 1: Create a set of your favorite numbers
my_fav_numbers = {7, 14, 21}

# Step 2: Add two new numbers
my_fav_numbers.add(28)
my_fav_numbers.add(35)

# Step 3: Remove the last number (we assume the last added one)
my_fav_numbers.remove(35)

# Step 4: Create a set of your friend's favorite numbers
friend_fav_numbers = {5, 10, 15}

# Step 5: Concatenate both sets (union of the sets)
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# Output the result
print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our combined favorite numbers:", our_fav_numbers)
