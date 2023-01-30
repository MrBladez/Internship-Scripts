using System;
using System.Collections.Generic;

namespace GradeBook
{
    class Program
    {
        static void Main(string[] args)
        {
            var book = new Book("Austin's Grade Book");
            book.AddGrade(89.19);
            book.AddGrade(45.95);
            book.AddGrade(69.37);
            var stats = book.GetStatistics();
            
            Console.WriteLine($"The average grade is {stats.Average:N1}");
            Console.WriteLine($"The highest grade is {stats.High:N1}");
            Console.WriteLine($"The lowest grade is {stats.Low:N1}");
        }
    }
}