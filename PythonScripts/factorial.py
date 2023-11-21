def factorialNumber(num):
    if num == 1:
        return num
    else:
        return num * factorialNumber(num-1)
userInput = (input("Enter a number to get the factorial: "))
if userInput == 'q':
    
print(factorialNumber(userNum))