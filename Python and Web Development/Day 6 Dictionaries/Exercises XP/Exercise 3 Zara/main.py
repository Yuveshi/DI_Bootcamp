brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}


brand["number_stores"] = 2


print(f"Zara's clients are {', '.join(brand['type_of_clothes'])}.")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")


del brand["creation_date"]


print(brand["international_competitors"][-1])  # Output: Desigual

print(brand["major_color"]["US"])  # Output: ['pink', 'green']


print(len(brand))  # Output: 7 (or the current number of key-value pairs)

print(brand.keys())

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)


print(brand["number_stores"])  # Output: 10000

# Explanation: The `update()` method merged the two dictionaries, and since the key 'number_stores' already existed in the `brand` dictionary, it was overwritten with the value from `more_on_zara`, which is 10000.






