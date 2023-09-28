def findFactorial(int):
    if(int == 1):
        return int
    return int * findFactorial(int)

factorialNum = int(input("Enter a number to find the factorial: "))
print("Your factorial answer is: ")
print(findFactorial(factorialNum))