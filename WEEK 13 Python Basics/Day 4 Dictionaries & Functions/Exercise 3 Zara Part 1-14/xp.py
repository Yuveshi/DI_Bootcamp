info_zara = {
   "name": "Zara",
   "creation_date": 1975,
   "designer": "Amancio Ortega Gaona",
   "type_of_clothes": ["men", "women", "children", "home"],
   "international_competitors": ["Gap", "H&M", "Benetton"],
   "number_stores" : 7000,
   "major_color": {
      "France": "blue",
      "Spain": "red",
      "US" : ["pink", "green"]
   }
}
info_zara["number_stores"] = 2
print(f"Zara's clients are {",".join(info_zara['type_of_clothes'])}")
info_zara['country_creation'] = 'Spain'
info_zara['international_competitors'].append('Desigual')
info_zara.pop('creation_date')
print(info_zara['international_competitors'][-1])
print(info_zara['major_color']['US'])
print(len(info_zara.items()))

more_on_zara = {
   "creation_date": 1975,
   "number_of_stores" : 10000
}
