import random
def wordleGame():
    count = 6
    FiveLetterWordList = []
    alphabetList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    def normalize(word):
        return "".join(letter for letter in word if letter.isalpha()).lower()
    file = open('FiveLetterWord.txt')
    for line in file:
        line = normalize(line)
        FiveLetterWordList.append(line)
    file.close()
    secretWord = FiveLetterWordList[random.randrange(0,5756)]
    def oneTry(count,alphaList,FiveLetterList):
        wordList = []
        enter = 0
        times = 0
        print("You have "+ str(count) + " tries to guess my word.")
        userWord = normalize(input("Guess a 5-Letter word:  "))
        while(True):
            if userWord not in FiveLetterList:
                userWord = normalize(input("Guess a 5-Letter word:  "))
            else:
                break
        if userWord == secretWord:
            return "You have Guessed my word!!", alphaList
        else:
            for i in range(0,5,1):
                if (userWord[i] == secretWord[i]):
                    wordList.append("Green")
                elif (userWord[i] in secretWord):
                    for letter in userWord:
                        if letter == userWord[i]:
                            times += 1
                    if times >= 2:
                        for letter in secretWord:
                            if letter == userWord[i] and enter == 0:
                                wordList.append("Gray")
                                enter += 1
                            else:
                                continue
                    if enter == 0:
                        wordList.append("Yellow")
                    enter = 0
                else:
                    wordList.append("Gray")
                if (userWord[i] in alphaList):
                    alphaList.remove(userWord[i])
            return wordList, alphaList
    for i in range(6):
        result, List = oneTry(count,alphabetList,FiveLetterWordList)
        if result == "You have Guessed my word!!":
            print(result)
            break
        else:
            print(result)
            print("You have not guessed " + str(List))
        count -= 1
    if count == 0:
        print("My word was " + secretWord +".")

while(True):
    wordleGame()
    againAnswer = input("Would you like to play again? (yes/no) ")
    if againAnswer == "yes":
        continue
    elif againAnswer == "no":
        break