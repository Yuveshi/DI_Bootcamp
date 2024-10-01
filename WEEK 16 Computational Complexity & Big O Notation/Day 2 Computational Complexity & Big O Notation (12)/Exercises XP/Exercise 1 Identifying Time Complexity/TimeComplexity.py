# Time Complexity Analysis of Different Snippets

# Snippet 1
for i in range(10):
    print(i)

# Time Complexity: O(1) - The loop runs a constant number of times (10).

# Snippet 2
n = 5  # You can change this value for testing
for i in range(n):
    for j in range(n):
        print(i, j)

# Time Complexity: O(n²) - The outer loop runs n times and the inner loop runs n times.

# Snippet 3
n = 16  # You can change this value for testing
i = 1
while i < n:
    i *= 2
    print(i)

# Time Complexity: O(log n) - The variable i doubles each time, so the number of iterations is logarithmic.
