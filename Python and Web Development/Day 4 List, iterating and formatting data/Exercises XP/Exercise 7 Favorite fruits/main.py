# Ask the user to input their favorite fruits separated by a space
favorite_fruits = input("Enter your favorite fruits (separated by spaces): ")

# Convert the input string into a list of fruits
favorite_fruits_list = favorite_fruits.split()

# Ask the user to input a fruit name
fruit_choice = input("Enter the name of a fruit: ")

# Check if the chosen fruit is in the list of favorite fruits
if fruit_choice in favorite_fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")
