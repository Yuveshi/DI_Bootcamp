def make_shirt(size="Large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

# Calling the function with different scenarios

# 1. Large shirt with the default message
make_shirt()

# 2. Medium shirt with the default message
make_shirt(size="Medium")

# 3. Custom size shirt with a custom message
make_shirt(size="Small", text="Code is life")

# Bonus: Using keyword arguments
make_shirt(text="Keep Coding", size="Extra Large")
