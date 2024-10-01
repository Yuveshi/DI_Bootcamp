import datetime
today_date = datetime.datetime.now()
target = datetime.datetime.strptime("01/01/2025","%d/%m/%Y")

print(target - today_date)