class vehicle  {
    constructor(color,model,carName,typeVehicle,engineType){
        this.color = color;
        this.model = model;
        this.carName = carName;
        this.typeVehicle = typeVehicle;
        this.engineType = engineType;
    }
    showDetails(){
        console.log(`Details is ${this.color},${this.model},${this.carName},${this.typeVehicle},${this.engineType}`);
    }
} 

const vabs = new vehicle("red","2oct","bmw","siden","4stoke");
const prathmesh = new vehicle("black","3oct","audi","siden","3stoke");
const haidar = new vehicle("green","6oct","swift","bg","2stoke");
const gauspak = new vehicle("yellow","8oct","i20","siden","4stoke");


const array = [vabs,prathmesh,haidar, gauspak];

for (const element of array) {
    element.showDetails()
}

vabs.showDetails();
haidar.showDetails();

console.log(`======================= College ============================`);

class College{
    constructor(rollno,name,collegeName,city){
        this.rollno = rollno;
        this.name = name;
        this.collegeName = collegeName;
        this.city = city;
    }
    showDetails(){
        console.log(`details is ${this.rollno},${this.name},${this.collegeName},${this.city}`);
    }
}

const ram = new College(101,"ram","ramcollege,pune","Pune");
const shyam = new College(102,"shyam","shyamcollege,mumbai","mumbai");
const boss = new College(103,"boss","bosscollege,dubai","dubai");


ram.showDetails();
shyam.showDetails();
boss.showDetails();

console.log(`-----------------traverse Object--------------------`);

function traverseObject(value){
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
          
            
        }
    }
}
