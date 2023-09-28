xList = []
yList = []
total = 0
xAvg = float(input("What is the average of the x values?"))
xStDiv = float(input("What is the standard deviation of the x values?"))
yAvg = float(input("What is the average of the y values?"))
yStDiv = float(input("What is the standard deviation of the y values?"))
listLength = int(input("What is the length of the x data?"))
for i in range(listLength):
    userInput = float(input("Enter a number for x value: "))
    xList.append(userInput)
print("------------")
for i in range(listLength):
    userInput = float(input("Enter a number for y value: "))
    yList.append(userInput)
for i in range(8):
    total += ((xList[i] - xAvg)/xStDiv) * ((yList[i] - yAvg)/yStDiv)
total = total / (listLength - 1)
print(total)