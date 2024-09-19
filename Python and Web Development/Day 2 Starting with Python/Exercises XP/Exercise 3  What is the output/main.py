# Code snippets to evaluate

# Check if 5 is less than 3
print(5 < 3)   # Output: False

# Check if 3 is equal to 3
print(3 == 3)  # Output: True

# Check if integer 3 is equal to string "3"
print(3 == "3")  # Output: False

# Check if string "3" is greater than integer 3
# This will raise a TypeError
try:
    print("3" > 3)
except TypeError as e:
    print(f"TypeError: {e}")

# Check if "Hello" is equal to "hello"
print("Hello" == "hello")  # Output: False
