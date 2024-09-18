word = input("Enter word: ")
occurences = {}
for index in range(len(word)):
   if word[index] in occurences.keys():
      occurences[word[index]].append(index)
   else:
      occurences[word[index]] = [index]
print(occurences)
