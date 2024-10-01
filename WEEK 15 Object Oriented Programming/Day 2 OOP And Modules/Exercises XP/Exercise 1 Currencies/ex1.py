class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __int__(self):
        return self.amount

    def __repr__(self):
        if self.amount > 1:
            return f'{self.amount} {self.currency}s'
        else:
            return f'{self.amount} {self.currency}'

    def __str__(self):
        if self.amount > 1:
            return f'{self.amount} {self.currency}s'
        else:
            return f'{self.amount} {self.currency}'

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency == other.currency:
                return Currency(self.currency, self.amount + other.amount)
            else:
                raise TypeError(f"Cannot add different currencies: {self.currency} and {other.currency}")
        else:
            raise TypeError("You can only add Currency objects.")


# Test the functionality
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

# These will work because the currencies are the same
print(c1 + c2)  # Output: 15 dollars
print(c3 + c4)  # Output: 11 shekels

# This will raise a TypeError because the currencies are different
try:
    print(c1 + c3)  # Raises: TypeError: Cannot add different currencies: dollar and shekel
except TypeError as e:
    print(e)  # Output the error message
