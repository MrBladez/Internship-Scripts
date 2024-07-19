// See https://aka.ms/new-console-template for more information
using System.Data;
using System.Numerics;

class Program
{
    public static void Main()
    {
        // create a list of options for the user
        List<string> options = new List<string>() { $"roll" };
        System.Console.WriteLine( $"What would you like to do? {options[0]}: ");
        var userChoice = Console.ReadLine();
        if (userChoice == "roll"){

        }
    }
}