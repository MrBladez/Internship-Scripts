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
        public letters AddLetter(string letter)
        {
            var r = new FirstLetters();
            if (letter == "done")
            {
                while (Letters.Count > 0)
                {
                    // Console.WriteLine($"Found Letters: {Letters[0]}, {Letters[1]}, {Letters[2]}, {Letters[3]}, {Letters[4]}");
                    r.TheLetters =  new List<string>() {Letters[0], Letters[1], Letters[2], Letters[3], Letters[4]};
                    Letters.RemoveRange(0,5);
                    return r.TheLetters;
                }
            }else{
                Letters.Add(letter);
            }
            return null;
        }
        public List<string> Letters;
    }
}