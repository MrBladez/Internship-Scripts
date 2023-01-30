using System;
using System.Collections.Generic;

namespace WordleSolver
{
    class Program
    {

        static void Main(string[] args)
        {
            // next, work on writing code for  a wordle, that takes words and uses them with the colored letters to tell the user what letters are where
            var Word = new Word();
            Console.WriteLine("Welcome to WordleSolver!");
            // while(true)
            // {
            //     Console.WriteLine("Enter a Word or press 'q' to quit:");
            //     string input = Console.ReadLine();
            //     if(input == "q")
            //     {
            //         break;
            //     }
            //     Word.AddWord(input);
            // }
            Console.WriteLine("Enter Your Word");
            string input = Console.ReadLine();
            // Word.AddWord(input);
            var r = Word.GetLetters(input);
            Console.WriteLine($"Found Letters: {r.First}, {r.Second}, {r.Third}, {r.Fourth}, {r.Fifth}");
        }
    }
}