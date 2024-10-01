import json

sampleJson = """{ 
    "company":{ 
        "employee":{ 
            "name":"emma",
            "payable":{ 
                "salary":7000,
                "bonus":800
            }
        }
    }
}"""

# Load the JSON string into a Python dictionary
data = json.loads(sampleJson)

# Access the nested “salary” key
salary = data['company']['employee']['payable']['salary']
print(f"Employee Salary: {salary}")

# Add a key called “birth_date” at the same level as the “name” key
data['company']['employee']['birth_date'] = '1990-01-01'  # Example birth date

# Save the updated dictionary as JSON to a file
with open('employee_data.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)

print("Updated employee data saved to employee_data.json")
