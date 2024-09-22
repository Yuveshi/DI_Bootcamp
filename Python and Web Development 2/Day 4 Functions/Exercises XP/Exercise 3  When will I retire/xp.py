from datetime import date

# Function to calculate age based on the year, month, and day of birth
def get_age(year, month, day):
    # Hard-coding the current year, month, and day
    current_year = 2024
    current_month = 9
    current_day = 20
    
    # Calculate age based on the current date
    age = current_year - year
    
    # Adjust the age if the birthday hasn't happened yet this year
    if (current_month, current_day) < (month, day):
        age -= 1
    
    return age

# Function to determine if a person can retire based on their gender and date of birth
def can_retire(gender, date_of_birth):
    # Extract year, month, and day from the input date_of_birth
    year, month, day = map(int, date_of_birth.split('/'))
    
    # Get the person's age by calling the get_age function
    age = get_age(year, month, day)
    
    # Determine retirement eligibility based on gender and age
    if gender == 'm':
        retirement_age = 67
    elif gender == 'f':
        retirement_age = 62
    else:
        print("Invalid gender input. Please enter 'm' or 'f'.")
        return False
    
    # Return True if the person can retire, otherwise False
    if age >= retirement_age:
        return True
    else:
        return False

# Main program to ask the user for input and determine retirement eligibility
def main():
    gender = input("Enter your gender (m/f): ").lower().strip()
    dob = input("Enter your date of birth (yyyy/mm/dd): ").strip()
    
    # Check if the person can retire
    if can_retire(gender, dob):
        print("You are eligible for retirement!")
    else:
        print("You are not eligible for retirement yet.")

# Run the main program
main()
