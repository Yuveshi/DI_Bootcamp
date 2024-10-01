numbers = [5, 2, 9, 1, 5, 6]

def insertion_sort(numbers: list) -> None:
    for i in range(1, len(numbers)):  # Start from the second element
        key = numbers[i]  # Element to be compared
        j = i - 1
        
        # Move elements greater than key to one position ahead
        while j >= 0 and numbers[j] > key:
            numbers[j + 1] = numbers[j]
            j -= 1
            
        # Place key at its correct position
        numbers[j + 1] = key

# Sort the numbers list
insertion_sort(numbers)  
print(numbers)  # Check that the sorting is successful
