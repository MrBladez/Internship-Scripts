using System.Collections.Generic;
using System;
namespace WordleSolver
{
    public class Variables
    {
        public Variables()
        {
            Letters = new List<string>();
        }
        public void AddLetter(string letter)
        {
            if (letter == "done")
            {
                while (Letters.Count > 0)
                {
                    Console.WriteLine($"Found Letters: {Letters[0]}, {Letters[1]}, {Letters[2]}, {Letters[3]}, {Letters[4]}");
                    Letters.RemoveRange(0,5);
                }
                
            }else{
                Letters.Add(letter);
            }
        }
        public List<string> Letters;
    }
}