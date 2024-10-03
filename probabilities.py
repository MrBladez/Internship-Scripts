prob = 1
userInput = int(input("What chance probability? (1-100) "))
while userInput < 1 or userInput > 100:
    userInput = input("What chance probability? (1-100) ")
for i in range(userInput):
    prob *= (100-(i))/100
print(prob)