using System;
using System.Collections.Generic;
using System.Transactions;

namespace GradeBook
{
    class Program
    {
        static void Main(string[] args)
        {
            var book = new Book("Austin's Grade Book");
            while(true)
            {
                Console.WriteLine("Enter a number or press 'q' to quit");
                var input = Console.ReadLine();
                if (input == "q")
                {
                    break;
                }
                var Grade = double.Parse(input);
                book.AddGrade(Grade);
            }
            var stats = book.GetStatistics();
            
            Console.WriteLine($"The average grade is {stats.Average:N1}");
            Console.WriteLine($"The highest grade is {stats.High:N1}");
            Console.WriteLine($"The lowest grade is {stats.Low:N1}");
        }
    }
}