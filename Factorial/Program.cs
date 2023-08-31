using System;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;
using System.Collections.Generic;
namespace Factorial
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter a number to find the factorial");
            var n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(FindFactorial(n));
            int FindFactorial(int n)
            {
                if (n == 1)
                {
                    return n;
                }else{
                    return n * FindFactorial(n-1);
                }
            }
        }
    }
}