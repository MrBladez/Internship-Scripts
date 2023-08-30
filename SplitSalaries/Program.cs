using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Transactions;

namespace SplitSalaries
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the total amount of money");
            var TotalMoney = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter the total number of people");
            var People = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter the number for slope");
            var Slope = Convert.ToInt32(Console.ReadLine());
            var CEO = TotalMoney/People;
            for (var i = 0; i < (TotalMoney / Slope) ; i++)
            {
                var EmployeeSalary = (TotalMoney - CEO)/(People - 1);
                Console.WriteLine($"The CEO's Salary is {CEO} and the Employee's Salaries are {EmployeeSalary}");
                CEO += Slope;
                if (EmployeeSalary == 0)
                {
                    break;
                }
            }

        }
    }
}