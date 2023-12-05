const students = [{firstname: "Kalyan", lastName: "Pidugu", age: 30},
{firstname: "K", lastName: "P", age: 32},
{firstname: "P", lastName: "K", age: 33},
{firstname: "Kal", lastName: "Pid", age: 33}]


const mappedvalue = students.map(s => s.firstname+" "+s.lastName);
console.log(mappedvalue);

const filtervalue = students.filter(s => s.age > 32);
console.log(filtervalue);

const reducer = students.reduce((acc,cur)=>{
   if(acc[cur.age]){
    acc[cur.age] = ++acc[cur.age];
   }else{
    acc[cur.age] = 1;
   }
   return acc;
},{})

console.log(reducer);