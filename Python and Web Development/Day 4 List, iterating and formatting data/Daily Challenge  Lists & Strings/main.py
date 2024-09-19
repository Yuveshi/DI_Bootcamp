import random

# Ask the user for a string that must be 10 characters long
user_input = input("Enter a string of exactly 10 characters: ")

# Check the length of the input string
if len(user_input) < 10:
    print("String not long enough")
elif len(user_input) > 10:
    print("String too long")
else:
    print("Perfect string")
    
    # Print the first and last characters of the string
    print("First character:", user_input[0])
    print("Last character:", user_input[-1])
    
    # Construct the string character by character
    for i in range(1, len(user_input) + 1):
        print(user_input[:i])
    
    # Bonus: Shuffle the characters of the string
    shuffled_string = list(user_input)
    random.shuffle(shuffled_string)
    jumbled_string = ''.join(shuffled_string)
    
    print("\nJumbled string:", jumbled_string)
