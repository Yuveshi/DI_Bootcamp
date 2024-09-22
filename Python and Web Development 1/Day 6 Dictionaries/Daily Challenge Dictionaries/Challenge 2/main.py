def affordable_items(items_purchase, wallet):
    # Convert wallet amount from string to integer
    wallet_amount = int(wallet.replace('$', '').replace(',', ''))

    # Initialize a list for affordable items
    affordable = []

    # Check each item and its price
    for item, price in items_purchase.items():
        # Convert price from string to integer
        price_amount = int(price.replace('$', '').replace(',', ''))
        # Check if the item can be afforded
        if price_amount <= wallet_amount:
            affordable.append(item)

    # Sort the list alphabetically
    affordable.sort()

    # Return the result
    return affordable if affordable else "Nothing"

# Examples

items_purchase1 = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}
wallet1 = "$300"

items_purchase2 = {
    "Apple": "$4",
    "Honey": "$3",
    "Fan": "$14",
    "Bananas": "$4",
    "Pan": "$100",
    "Spoon": "$2"
}
wallet2 = "$100"

items_purchase3 = {
    "Phone": "$999",
    "Speakers": "$300",
    "Laptop": "$5,000",
    "PC": "$1200"
}
wallet3 = "$1"

# Print results
print(affordable_items(items_purchase1, wallet1))  # ➞ ["Bread", "Fertilizer", "Water"]
print(affordable_items(items_purchase2, wallet2))  # ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]
print(affordable_items(items_purchase3, wallet3))  # ➞ "Nothing"
