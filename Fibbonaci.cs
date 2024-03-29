using System.Collections.Generic;
using System;
namespace Fibbonaci
{
    public class Sequence
    {
        public Sequence()
        {
            SequenceN = new List<int>();
        }
        public void FibSequence()
        {
            Console.WriteLine("Enter a sequence length:");
            int length = Convert.ToInt32(Console.ReadLine());
            var n1 = 0;
            var n2 = 1;
            var n = 0;
            SequenceN.Add(n1);
            SequenceN.Add(n2);
            Console.WriteLine($"Fibbonaci Sequence to the {n} length: ");
            Console.Write($"{n1}, {n2}, ");
            for(var i=0; i > length; i++)
            {
                n = SequenceN[i] + SequenceN{i+1};
                Console.Write($"{n}, ");
                SequenceN.Add(n);
            }
        }
        public List<int> SequenceN;
    }
}