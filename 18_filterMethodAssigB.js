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

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

const wiproEmpName = array_employees.filter( (empolyee) => {
    return empolyee.emp_company == "Wipro";
});
console.log(wiproEmpName);

for (const empolyee of wiproEmpName) {
    console.log(empolyee);
}

console.log(`-----empolyee for IT or HR department-----`);

const empITorHR = array_employees.filter( (empolyee) => {
    return empolyee.emp_dept == "IT" || empolyee.emp_dept == "HR";
});

for (const empolyee of empITorHR) {
    console.log(empolyee);
}

console.log(`-----emp ID greater than 50-----`);
const empID = array_employees.filter((empolyee)=>{
    return empolyee.emp_id > 50;
});
for (const empolyee of empID) {
    console.log(empolyee);
}

console.log(`----starts with names 'A' | 'V' | 'M'----`);
const empNameStartWith = array_employees.filter((empolyee)=>{
     if (empolyee.emp_name.startsWith("A")||empolyee.emp_name.startsWith("V")||empolyee.emp_name.startsWith("M")) {
        console.log(empolyee.emp_name);
    };
});
for (const empolyee of empNameStartWith) {
    console.log(empolyee);
}

// console.log(`--- the average salary of Empolyee---`);
// let sumsal = 0;
// const avgSalEmp = array_employees.filter( (empolyee) => {
//         sumsal = sumsal/empolyee.emp_salary;
// });
// let avgEmp = sumsal/avgSalEmp.length;
// console.log(avgEmp);

// for (const empolyee of avgSalEmp) {
//     console.log(empolyee);
// }