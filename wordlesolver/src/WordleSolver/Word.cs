using System;
using System.Collections.Generic;
namespace WordleSolver
{
    public class Word
    {
        public Word()
        {
            // Words = new List<string>{};
        }
        public void AddWord(string YourWord)
        {
            // Words.Add(YourWord);
        }
        public letters GetLetters(string word)
        {
            var r = new letters();
            // multiple words being processed
            // var variable = new Variables();
            // foreach (var word in Words)
            // {
            if (word == null)
            {
                return null;
            }else if(word.Length == 5)
            {
                string YourWord = word;
                char[] letters = YourWord.ToCharArray();
                char a = letters[0];
                char b = letters[1];
                char c = letters[2];
                char d = letters[3];
                char e = letters[4];
                r.First = a.ToString();
                r.Second = b.ToString();
                r.Third = c.ToString();
                r.Fourth = d.ToString();
                r.Fifth = e.ToString();
                //multiple words being processed
                // variable.AddLetter(First);
                // variable.AddLetter(Second);
                // variable.AddLetter(Third);
                // variable.AddLetter(Fourth);
                // variable.AddLetter(Fifth);
                // variable.AddLetter("done");
                return r;
            }else{
                return null;
            }
        }
        // public List<string> Words;
    }
}