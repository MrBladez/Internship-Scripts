choices = ["Factorial", "Fibbonaci"]
print("Your choices are " + str(choices))
userChoice = input("What do you want to do: ") + ".py"
print(userChoice)
with open(userChoice, "r") as file:
    file = file.read()
exec(file)