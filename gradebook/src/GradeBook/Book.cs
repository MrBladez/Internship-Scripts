using System.Collections.Generic;
namespace GradeBook
{
    public class Book 
    {
        public Book(string name)
        {
            grades = new List<double>();
            this.name = name;
        }
        public void AddGrade(double grade)
        {
            if(grade > 0 && grade <= 100)
            {
                grades.Add(grade);
            }
        }
        public Statistics GetStatistics()
        {
            var result = new Statistics();
            result.High = double.MinValue;
            result.Low = double.MaxValue;
            foreach (var grade in grades)
            {
                result.High = Math.Max(result.High, grade);
                result.Low = Math.Min(result.Low, grade);
                result.Average += grade;
            }
            result.Average /= grades.Count;

            return result;
        }
        private List<double> grades;
        private string name;

        
    }
}