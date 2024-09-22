import random

# Function to get a random temperature based on the season
def get_random_temp(season):
    if season == 'winter':
        return round(random.uniform(-10, 16), 1)
    elif season == 'spring':
        return round(random.uniform(0, 23), 1)
    elif season == 'summer':
        return round(random.uniform(24, 40), 1)
    elif season == 'autumn':
        return round(random.uniform(0, 23), 1)

# Function to determine season based on month
def get_season_from_month(month):
    if month in [12, 1, 2]:
        return 'winter'
    elif month in [3, 4, 5]:
        return 'spring'
    elif month in [6, 7, 8]:
        return 'summer'
    elif month in [9, 10, 11]:
        return 'autumn'

# Main function
def main():
    # Ask user for the month number
    month = int(input("Please enter the month as a number (1 = January, 12 = December): "))
    
    # Determine season from the month
    season = get_season_from_month(month)
    
    # Get random temperature for the season
    temp = get_random_temp(season)
    
    # Display the temperature
    print(f"The temperature right now is {temp} degrees Celsius.")
    
    # Give friendly advice based on the temperature
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temp <= 23:
        print("It's a pleasant day, enjoy it!")
    elif 24 <= temp <= 32:
        print("It's warm outside, stay hydrated.")
    elif 32 < temp <= 40:
        print("It's very hot! Stay cool and avoid going out in the sun.")

# Call the main function
main()
