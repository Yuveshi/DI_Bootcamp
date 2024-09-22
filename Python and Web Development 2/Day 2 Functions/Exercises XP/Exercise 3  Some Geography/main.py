def describe_city(city, country="Iceland"):
    print(f"{city} is in {country}.")

# Call the function with and without specifying the country
describe_city("Reykjavik")  # Using the default country
describe_city("Paris", "France")  # Specifying a different country
