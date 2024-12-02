//I have a function called netsallary callculator
//constant basicsalary
//constant benefits

function netSalaryCalculator() {
    const basicSalary = parseFloat(prompt("Enter your basic salary:"));
    const benefits = parseFloat(prompt("Enter your benefits:"));

    //input validation if number entered is none basic sallary or non benefit return invalid input/enter numeric values
   if (isNaN(basicSalary) || isNaN(benefits)) {
        console.log(Invalid input.  enter numeric values.);
        return;
    }

    //salary calculation
    const grossSalary = basicSalary + benefits;
    // Tax calc KRA rates
    // lets multiply KRA rates depending on salary
    let tax = 0;
    if (grossSalary <= 24000) tax = grossSalary * 0.1;
    else if (grossSalary <= 32333) tax = grossSalary * 0.25;
    else tax = grossSalary * 0.3;


    // Nhif DEDUCTION rates
   //depending on the salarynr the earnings this are the rates 
   
   const nhifRates = [

        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: Infinity, deduction: 1000 }
    ];
    const nhifDeduction = nhifRates.find(rate => grossSalary >= rate.min && grossSalary <= rate.max).deduction;
    //Nssf deductions :
    
    const nssfDeduction = Math.min(grossSalary * 0.06, 1800);

    //net sallary calc gross-all deductions
  
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

   //to out put message to the console using console.log
    console.log("Gross Salary: ${grossSalary}");
    console.log(Tax: ${tax});
    console.log("NHIF Deduction: ${nhifDeduction}");
    console.log(NSSF Deduction: ${nssfDeduction});
    console.log("Net Salary: ${netSalary}");
}

//i called back the function at the end of the code

   netSalaryCalculator()