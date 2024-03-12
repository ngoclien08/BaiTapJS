 var person1 = {name:'Ngoc Lien',age: 12};
 var person2 = {name: 'Minh Anh',age: 18};

 var sayHello = function(){
    console.log('Hello, '+ this.name);
 };
 var sayGoodbye = function(){
    console.log('Hello, '+ this.name);
 };

 sayHello.call(person1);
 sayGoodbye.call(person2);
 sayHello.apply(person1);
 sayGoodbye.apply(person2);


 // Scope chain
 var te = 0 ;
 function step1 () {
   console.log(te);
 }
 function step2 () {
    te = 2;
    step1();
 }
 step2();
 var te = " Global variables";

 // scopes, bind
 var checkNumericRange = function (value){
    if (typeof value !== 'number')
    return false;
else
    return value >= this.minimum && value <= this.maximum;
 }
 var range = {
    minimum: 10, maximum: 20
 };
 var bpundcheckNumericRange = checkNumericRange.bind(range);
 var result = bpundcheckNumericRange (12);
console.log(result);

 // lexical Scope
  var myFunction = function () {
    var name = 'Minh Anh';
    var myOtherFunction = function()
    {
        console.log('I am' + name);
    };
    console.log(name);
    myOtherFunction();
  };
myFunction();  

// curry
 function add(a,b,c) {
    return a+b+c;
  }

  console.log(add(1,2,3));
  function addCurries(a) {
     return (b) => {
        return (c) => {
            return a+b+c;
        }
     }
  }
 console.log(addCurries(1)(2)(3));
 const ad1 = addCurries(1);
 const ad2 = ad1(2);
 const ad3 = ad2(4);
 
 console.log(ad3);

 // another VD for closure scape 
   var registrations = {
    class: "Databases" ,
    students: [
        { studentID: "001", name: " Le Hieu Lam"},
        { studentID: "002", name: " Tran Van An"},
        { studentID: "003", name: " Nguyen An Binh"}
    ],
      clickEnrollment: function() {
        This=this
        this.students.forEach(function(student){
            console.log(student.name +" already enrolled class " + This.class);
        })
      }
   }
   registrations.clickEnrollment();

   // closures scope
 var sayBye = function (name) {
    var text = ' Bye, ' + name;
    return () =>{
        console.log(text);
    }
 }
  sayBye('Me');
  var calledMe = sayBye('Me');
  calledMe();