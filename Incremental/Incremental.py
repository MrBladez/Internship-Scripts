import random
def normalize(word):
    return "".join(letter for letter in word if letter.isalpha()).lower()
options = ['roll']
userRng = "common"
userLess = ['common']
userLuck = 1
minRoll = 1
while True:
    userChoice = normalize(input("What would you like to do? " + options[0] +" : "))
    if userChoice == "roll":
        maxRoll = 3
        if (minRoll*userLuck >= maxRoll):
            roll = maxRoll
            print(roll)
        else:
            roll = random.randrange(minRoll*userLuck,maxRoll+1)
            print(roll)
        if roll == maxRoll:
            count = 0
            userRoll = "common 1"
            for item in userLess:
                if userRoll != item:
                    count += 1
            if count == len(userLess):
                userRng = userRoll
                userLess.append(userRoll)
                print(userRng)
            maxRoll *= 3
            if (minRoll*userLuck >= maxRoll):
                roll = maxRoll
                print(roll)
            else:
                roll = random.randrange(minRoll*userLuck,maxRoll+1)
                print(roll)
            if roll == maxRoll:
                count = 0
                userRoll = "common 2"
                for item in userLess:
                    if userRoll != item:
                        count += 1
                if count == len(userLess):
                    userRng = userRoll
                    userLess.append(userRoll)
                    print(userRng)
        else:
            maxRoll *= 3
            print(maxRoll)
            if (minRoll*userLuck >= maxRoll):
                roll = maxRoll
                print(roll)
            else:
                roll = random.randrange(minRoll*userLuck,maxRoll+1)
                print(roll)
            if roll == maxRoll:
                count = 0
                userRoll = "common 2"
                for item in userLess:
                    if userRoll != item:
                        count += 1
                if count == len(userLess):
                    userRng = userRoll
                    userLess.append(userRoll)
                    print(userRng)
            else:
                print("common")
    print(userRng)