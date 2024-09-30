class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

def find_oldest_cat(cats):
    oldest = max(cats, key=lambda cat: cat.age)
    return oldest

# Create three cat objects
cat1 = Cat("Whiskers", 5)
cat2 = Cat("Tom", 7)
cat3 = Cat("Felix", 3)

# Put the cats in a list
cats = [cat1, cat2, cat3]

# Find the oldest cat
oldest_cat = find_oldest_cat(cats)

# Print the result
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")
