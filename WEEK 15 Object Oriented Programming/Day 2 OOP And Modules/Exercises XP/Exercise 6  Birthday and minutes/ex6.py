import datetime

def lifespan(birthdate):
    birth = datetime.datetime.strptime(birthdate, "%d/%m/%Y")
    now = datetime.datetime.now()

    return (now - birth).days * 3600

print(lifespan("15/01/2004") , "minutes")