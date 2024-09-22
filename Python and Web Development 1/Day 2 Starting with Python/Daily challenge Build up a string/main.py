import random

# Step 1: Ask the user for a string
user_input = input("Enter a string (must be 10 characters long): ")

# Step 2: Check the length of the string
if len(user_input) < 10:
    print("String not long enough.")
elif len(user_input) > 10:
    print("String too long.")
else:
    print("Perfect string.")

    # Step 3: Print the first and last characters
    print(user_input[0])  # First character
    print(user_input[-1])  # Last character

    # Step 4: Construct the string character by character
    for i in range(len(user_input)):
        print(user_input[:i + 1])  # Print substring from the start to the current index

    # Step 5: Bonus - Shuffle some characters
    shuffled_string = list(user_input)  # Convert string to a list for shuffling
    random.shuffle(shuffled_string)  # Shuffle the list
    jumbled_string = ''.join(shuffled_string)  # Convert list back to a string
    print(jumbled_string)  # Print the jumbled string
