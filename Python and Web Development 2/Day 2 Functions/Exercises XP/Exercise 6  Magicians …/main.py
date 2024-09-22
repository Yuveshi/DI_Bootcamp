# List of magician names
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Function to display the list of magicians
def show_magicians(magicians):
    for magician in magicians:
        print(magician)

# Function to add "the Great" to each magician's name
def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = magicians[i] + " the Great"

# Modify the list of magicians
make_great(magician_names)

# Display the modified list
show_magicians(magician_names)
