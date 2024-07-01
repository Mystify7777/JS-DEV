function calculateTotalAnnualIncome(incomeText) {
    
    const salaryRegex = /earns (\d+) euro from salary per month/;
    const bonusRegex = /(\d+) euro annual bonus/;
    const coursesRegex = /(\d+) euro online courses per month/;

    const salaryMatch = incomeText.match(salaryRegex);
    const salaryPerMonth = salaryMatch ? parseInt(salaryMatch[1]) : 0;

    const bonusMatch = incomeText.match(bonusRegex);
    const annualBonus = bonusMatch ? parseInt(bonusMatch[1]) : 0;

    const coursesMatch = incomeText.match(coursesRegex);
    const coursesPerMonth = coursesMatch ? parseInt(coursesMatch[1]) : 0;

    const annualSalary = salaryPerMonth * 12;
    const annualIncomeFromCourses = coursesPerMonth * 12;

    const totalAnnualIncome = annualSalary + annualBonus + annualIncomeFromCourses;

    return totalAnnualIncome;
}

const incomeText = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const totalIncome = calculateTotalAnnualIncome(incomeText);
console.log(`Total annual income: ${totalIncome} euro`);
