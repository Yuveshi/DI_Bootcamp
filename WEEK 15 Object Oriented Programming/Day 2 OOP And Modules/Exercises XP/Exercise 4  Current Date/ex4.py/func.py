from datetime import datetime

def display_current_date():
    current_date = datetime.today().date()  # Get the current date
    print(f"Today's date is: {current_date}")  # Print the entire date

def display_current_day():
    current_day = datetime.today().day  # Get only the day
    print(f"Today's day is: {current_day}")


