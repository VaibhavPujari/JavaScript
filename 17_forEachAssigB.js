

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`-------TCS-------`);
array_employees.forEach( (empolyee) => {
    if (empolyee.emp_company == "TCS") {
        console.log(empolyee);
    }
});

console.log(`-------salary gretare than equal to 50000-------`);

array_employees.forEach( (empolyee) => {
        if (empolyee.emp_salary>=50000) {
            console.log(empolyee);
        }
});

console.log(`-------sum of all Employee salary----------`);

let sumSalary = 0;
array_employees.forEach( (employee)=> {
    
        sumSalary= sumSalary + employee.emp_salary;
    
});
console.log(sumSalary);

console.log(`--------Average of salary---------`);

let sumSal = 0;
array_employees.forEach( (employee)=> {
    
        sumSal = sumSal + employee.emp_salary;
    
});
let averageSalary = sumSal / array_employees.length;
console.log(`Average Salary is : ${averageSalary}`);

console.log(`------IT Or HR Department`);

array_employees.forEach( (empolyee) => {
    if (empolyee.emp_salary>=75000 || empolyee.emp_dept =="HR") {
        console.log(empolyee);
    }
});