import string
import random

lower = string.ascii_lowercase
upper = string.ascii_uppercase
options = [True, False]
s = ""

for i in range(5):
    if random.choice(options):
        s += random.choice(lower)
    else:
        s += random.choice(upper)

print(s)