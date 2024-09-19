# Ask the user for their height in centimeters
height_cm = int(input("Enter your height in centimeters: "))

# Check if the height is over 145 cm
if height_cm > 145:
    print("You are tall enough to ride!")
else:
    print("You need to grow some more to ride.")
