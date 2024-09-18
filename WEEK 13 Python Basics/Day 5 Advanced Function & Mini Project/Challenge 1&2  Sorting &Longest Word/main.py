input_str = input("Enter a comma-separated sequence of words: ")

# Using list comprehension to split and strip whitespace from the words
words = [word.strip() for word in input_str.split(',')]

# Sorting the words alphabetically
sorted_words = sorted(words)

# Joining the sorted words into a comma-separated string
output_str = ','.join(sorted_words)

print("Sorted words:", output_str)

def longest_word(sentence):
    words = sentence.split()
    longest = max(words, key=len)  # Use max with key=len to find the longest word
    return longest

# Examples
print(longest_word("Margaret's toy is a pretty doll."))  # Output: "Margaret's"
print(longest_word("A thing of beauty is a joy forever."))  # Output: "forever."
print(longest_word("Forgetfulness is by all means powerless!"))  # Output: "Forgetfulness"
