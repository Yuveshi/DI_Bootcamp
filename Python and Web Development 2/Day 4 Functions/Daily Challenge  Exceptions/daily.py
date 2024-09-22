def divide_numbers():
    try:
        # Attempt to divide 5 by 0
        result = 5 / 0
    except ZeroDivisionError as e:
        print(f"Error: {e} - You cannot divide by zero!")
    except TypeError as e:
        print(f"Error: {e} - Invalid operation on types!")
    except Exception as e:  # Catch any other exception
        print(f"An unexpected error occurred: {e}")
    else:
        # This block executes if no exceptions are raised
        print(f"The result is: {result}")
    finally:
        print("Execution completed.")

# Call the function
divide_numbers()
