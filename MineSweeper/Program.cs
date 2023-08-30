namespace MineSweeper
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rnd = new Random();
            int num = rnd.Next(8);
            Console.WriteLine(num);
        }
    }
}