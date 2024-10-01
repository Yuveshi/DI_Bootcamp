def longest_substring(string : str):
   chars = set()
   left = 0
   max_len = 0

   for right, char in enumerate(string):
      while char in chars:
         chars.remove(string[left])
         left += 1
      chars.add(char)
      max_len = max(max_len, right - left + 1)

   return chars

print(longest_substring("pwwkew"))