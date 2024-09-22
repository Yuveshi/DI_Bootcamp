def calculate_series(x):
    # Convert x to string to create "XX", "XXX", "XXXX"
    x_str = str(x)
    
    # Create the terms by concatenating the string version of x
    term_1 = int(x_str)
    term_2 = int(x_str * 2)  # "XX"
    term_3 = int(x_str * 3)  # "XXX"
    term_4 = int(x_str * 4)  # "XXXX"
    
    # Calculate the sum of the series
    result = term_1 + term_2 + term_3 + term_4
    
    return result

# Example usage
x = 3
print(calculate_series(x))  # Output should be 3702
