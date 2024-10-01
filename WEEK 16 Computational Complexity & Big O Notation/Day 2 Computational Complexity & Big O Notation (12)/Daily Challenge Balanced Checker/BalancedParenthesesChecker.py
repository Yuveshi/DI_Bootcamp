def is_balanced(expr):
    # Stack to keep track of opening parentheses
    stack = []
    
    # Dictionary to map closing parentheses to opening ones
    parentheses = {
        ')': '(',
        ']': '[',
        '}': '{',
        '"': '"',
        "'": "'"
    }
    
    # Iterate through each character in the expression
    for char in expr:
        # If the character is an opening parenthesis, push to stack
        if char in parentheses.values():  # Checks if it's an opening parenthesis
            stack.append(char)
        # If the character is a closing parenthesis
        elif char in parentheses.keys():  # Checks if it's a closing parenthesis
            # If the stack is empty or top of the stack does not match
            if not stack or stack[-1] != parentheses[char]:
                return False
            stack.pop()  # Pop the matched opening parenthesis from the stack
            
    # If the stack is empty, parentheses are balanced
    return len(stack) == 0

# Testing the function
if __name__ == "__main__":
    expressions = [
        "(1 + 2) * {[(3 / 4) - 5]}",  # True
        "[1 + 2) * (3 - 4)]",          # False
        "((1 + 2)",                     # False
        '"Hello, {world}!"',           # True
        "'Quotes [in (parentheses)]'",  # True
        '"Unmatched quote',              # False
        "'Another unmatched quote",       # False
    ]

    for expr in expressions:
        result = is_balanced(expr)
        print(f"Expression: {expr} -> Balanced: {result}")
