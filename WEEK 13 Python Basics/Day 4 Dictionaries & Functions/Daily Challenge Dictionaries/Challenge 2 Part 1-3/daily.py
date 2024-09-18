def can_afford(items_purchase, wallet):
    wallet_amount = int(wallet.replace('$', '').replace(',', ''))
    
    affordable_items = []
    
    for item, price_str in items_purchase.items():
        price = int(price_str.replace('$', '').replace(',', ''))
        
        if wallet_amount >= price:
            affordable_items.append(item)
    
    affordable_items.sort()  # Sort the list of affordable items alphabetically
    
    if not affordable_items:
        return ["Nothing"]  # Return a list with "Nothing" if no items are affordable
    else:
        return affordable_items  # Return the list of affordable items

# Dictionary of items with their prices
items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

# Amount of money in wallet
wallet = "$300"

# Call the function to get the list of affordable items
affordable_items_list = can_afford(items_purchase, wallet)

# Print the result
print("Items you can afford:")
for item in affordable_items_list:
    print(item)
