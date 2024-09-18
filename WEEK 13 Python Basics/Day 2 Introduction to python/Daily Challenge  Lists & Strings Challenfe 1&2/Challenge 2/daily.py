word = input("Enter word: ")
unique = []
for char in word.lower():
   if char not in unique:
      unique.append(char)
print("".join(unique))
