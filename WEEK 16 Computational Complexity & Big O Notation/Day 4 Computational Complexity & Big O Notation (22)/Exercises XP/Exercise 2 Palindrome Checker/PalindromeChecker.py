def check_palindrome(word):
   word = word.lower()
   if word == word[::-1]:
      return True
   return False

print(check_palindrome('raceCar'))