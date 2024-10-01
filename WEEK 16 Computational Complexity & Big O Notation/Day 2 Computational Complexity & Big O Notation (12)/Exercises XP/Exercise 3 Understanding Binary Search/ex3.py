numbers = [1, 3, 5, 7, 9, 11]

def binary_search(numbers: list, value: int) -> int:
    low = 0
    high = len(numbers) - 1

    while low <= high:
        mid = (low + high) // 2  # Calculate mid index
        if numbers[mid] == value:
            return mid  # Return the index if found
        elif numbers[mid] < value:
            low = mid + 1  # Adjust low pointer
        else:
            high = mid - 1  # Adjust high pointer
    
    return -1  # Return -1 if not found

# Example usage
index = binary_search(numbers, 7)  # returns 3
print(index)  # Output the index of the target value
