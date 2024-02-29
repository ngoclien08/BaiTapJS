//toán tử ba ngôi 
const x = 100;
const  result = (x<100) ? "nhỏ hơn 1000" : "Lớn hơn hoặc bằng 1000";

//1. Shorthand Evaluated
const  variable2= variable1 || "";

//2. Variable declaration – If Comparison
let l,y,z=3 ;
if(isturnOn ); 

//3. For loop – For loop with decimal base (cơ số thập phân)

for(let item in sampleArr) ;  //thay vì sử dụng chạy từ 0 đến hết độ dài của mảng 

for(let i =0 ; i < 1e5 ; i++){
}

//4. Object property
const a=1, b=2;
const obj ={x,y};
// cách ngắn gọn hơn gán property cho object , nếu tn key trùng luôn với tên biến

// 5. Rút gọn định nghĩa function(Sử dụng arrow function)
   sayHello = name => console.log('Hello',name);
   setTimeout(() =>console.log('Loaded'),2000);
   list.forEach(item => console.log(item));
// 6.Implicit return (ẩn return đi bằng arrow function)
 getValue = ratio =>ratio *6.9

 // 7.Set default value for parameter in function
  getValue =(a,b =3,c=4) =>(a*b+c);

// 8. Template list
const wellcome = ' you have logged  in as ${first} ${last} . ';
const lorem ='Lorem  ipsum  dolor  sit amet , consectetur  adipisicing  elit , sed do eiusmod tempor incididuntut labore et  dolore magra  aliqua .Ut  enim ad  minim veniam ,quis  nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .Duis aute  irure  dolor  in reprehenderit in voluptate  velit  esse '

// 9.Destructuring Assignment	
import {action , service } from 'lib';
const {form , errors , entity , controller ,component} = this.props;

//10. Spead Operator
//joining  arrays 
const odd = [1,2,3];
const nums=[2,3,4, ...odd];
//cloning arrays 
const arr=[1,2,3,4];
const arr2=[...arr];
const add =[1,3,5];
const numss = [2,...odd,4,6];

// 11. Constraint Param
mandatory =() => {throw  new Error('Thieu tham so !');}
sample =(param1= mandatory()) =>param1;

// 12. Find() in arrays
const name ='Emp A '
emp =employees.find ( item => item.name ===name)

//Object[key]
//Để get property của object trong JS ngoài cách Obj.prop, còn có thể viết Obj['prop']. Nhìn qua thì dùng cả 2 cách đều cho kết quả như nhau. Tuy nhiên để viết được những đoạn code có thể tái sử dụng, thì cần sử dụng cách thứ 2 
 //c1
function validate(fullName){
    if(!fullName.firstName)
    return false;
if(!fullName.lastname)
return false ;
return true;
 }
 console.log(validate({firstName:'duy ', lastname:'buffet'})) //true
//c2
 // 13. Bitwise NOT double
 ~~6.9 ===6;//true




 



