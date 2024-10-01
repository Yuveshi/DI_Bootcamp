def frequencies(input : str):
   words = input.split(" ")
   found = {}

   for word in words:
      word = word.strip()
      if word in found.keys():
         found[word] += 1
      else:
         found[word] = 1

   return found

print(frequencies("apple orange apple banana orange apple"))