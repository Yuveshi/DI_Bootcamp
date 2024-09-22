import random

def guess_number(user_number):
    if 1 <= user_number <= 100:
        random_number = random.randint(1, 100)
        if user_number == random_number:
            print(f"Success! Both numbers are {user_number}.")
        else:
            print(f"Fail! Your number: {user_number}, Random number: {random_number}.")
    else:
        print("Please enter a number between 1 and 100.")

# Example call
guess_number(45)  # Replace with any number between 1 and 100
