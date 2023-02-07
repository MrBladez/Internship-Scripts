namespace BinaryConverter 
{
    public class BinaryConvert
    {
        public convert()
        {
            Console.WriteLine("Original Number");
            var num = int.Parse(Console.ReadLine());
            Console.Write("Binary Number:");
            while (num != 0)
            {
                if(num % 2 == 0)
                {
                    Console.Write("0");
                    num /= 2;
                }else
                {
                    Console.Write("1");
                    num -= 1;
                    num /= 2;
                }
            }
        }
    }
}