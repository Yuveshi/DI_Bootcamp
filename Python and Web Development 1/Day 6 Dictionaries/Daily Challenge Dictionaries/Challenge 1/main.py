# Ask the user for a word
word = input("Enter a word: ")

# Initialize an empty dictionary
letter_indexes = {}

# Iterate over each letter in the word
for index, letter in enumerate(word):
    # Check if the letter is already a key in the dictionary
    if letter in letter_indexes:
        letter_indexes[letter].append(index)  # Append the index to the existing list
    else:
        letter_indexes[letter] = [index]  # Create a new list for the letter

# Print the resulting dictionary
print(letter_indexes)
