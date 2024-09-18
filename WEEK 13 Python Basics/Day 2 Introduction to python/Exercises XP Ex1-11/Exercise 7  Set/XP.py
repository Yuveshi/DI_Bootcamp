my_fav_numbers = set()
my_fav_numbers.add(1)
my_fav_numbers.add(2)
my_fav_numbers.remove(2)

friend_fav_numbers = set()
friend_fav_numbers.add(3)
#concatenate the two sets to a new variable
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
