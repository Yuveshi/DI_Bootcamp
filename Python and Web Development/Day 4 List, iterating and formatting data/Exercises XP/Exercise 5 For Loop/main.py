# Print all numbers from 1 to 20
for num in range(1, 21):  # The range goes up to 21 because 21 is not inclusive
    print(num)

# Print elements with an even index (index 0, 2, 4, ...)
for i in range(1, 21):
    if (i - 1) % 2 == 0:  # Adjust index to start from 0
        print(i)
