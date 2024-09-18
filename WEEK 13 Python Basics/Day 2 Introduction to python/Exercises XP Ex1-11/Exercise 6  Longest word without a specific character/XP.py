longest = ""
while True:
   sentence = input("Enter a sentence without the letter a: ")
   if 'a' in sentence.lower():
      break
   else:
      if len(sentence) > len(longest):
         longest = sentence
