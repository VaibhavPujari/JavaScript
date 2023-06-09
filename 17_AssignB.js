
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

console.log(`All the empolyeee working in 'TCS' and log only empolyee names and company name on console`);

for (const empolyee of array_employees) {
    if (empolyee.emp_company=="TCS") {
        console.log(empolyee.emp_name);   
    }
}

console.log(`The 'Finace' Department empolyee `);

for (const empolyee of array_employees) {
        if(empolyee.emp_dept=="Finance"){
            console.log(empolyee.emp_name);
        }    
}

console.log(`The empolyee name Start with 'R'`);

for (const empolyee of array_employees) {
    if (empolyee.emp_name.startsWith("R")) {
        console.log(empolyee.emp_name);
    }
}

console.log(`The Empolyee name company  salary is grater than 75000`);

for (const empolyee of array_employees) {
    if (empolyee.emp_salary>=75000) {
        console.log(empolyee.emp_name);
        
    }
}

console.log(`The empolyee salary greatr than 50000 and from IT department`);

for (const empolyee of array_employees) {
    if (empolyee.emp_salary>=50000 && empolyee.emp_dept=="IT") {
        console.log(empolyee.emp_name);
    }
    
}

console.log(`All empolyee from company 'infy'`);

for (const empolyee of array_employees) {
    if (empolyee.emp_company=="Infy") {
        console.log(empolyee.emp_name);
    }
}