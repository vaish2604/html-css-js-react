// //Named Function
// function add(){
// console.log("Hello");
// }
// add()

// //Function Declaration
// add(2,4)
// function add(a,b){
//     console.log(a+b)
// }
// add(2,4)

// //Anonymous Function
// function(){
//     console.log();
// }

// //Function Expression
// var addition = function(){
//     console.log("Vaishnavi")
// }
// addition()

// //Arrow Function
// let add=()=> {
//     console.log("Vaishnavi")
// }
// add()

//Higher Order Function
// function addition (a){
//     console.log(a)
// }
// addition (number())

// //Callback Function
// function number(){
//     return 8;
// }

//example
// function addition(a){
//     console.log(a)
// }
// addition(number(7))
// function number (x,y){
//     return x+y;
// }

// //example
// function addition(a,b){
//     console.log(a+b)
// }
// addition(9,number(4,6))

// function number (x,y){
//     return x+y;
// }

//example
// function addition (a,b){
//     return a()+b
// }
// console.log(addition (number,9));



// function number (){
//     return 5
// }

//example

// function addition (a,b){
//     return a+b
// }
// console.log(addition(number1(),number2()))
// function number1() {
//     return 6
// }
// function number2 (){
//     return 6
// }

//!Array
// let arr=[10,true," "]
// console.log(arr)

//Array Constructor
// let arr = new Array()

// //!Array literals
// let student = [1,true,"Ram"]
// console.log(student)
// console.log(student[0])
// console.log(student[2])
// console.log(typeof student)

// //array constructor
// let student2 = new Array(2,false,"om");
// console.log(student2)
// console.log(typeof student2)
// console.log(student2[1]) 

//  //array methods
//  let number=[10,20,30,40,50,60]
//  console.log(number)

//  //push()
//  number.push(101)
//  console.log(number)

//  //pop()
//  number.pop(101)
//  console.log(number)

//  //unshift
//  number.unshift(90,80)
//  console.log(number)

//  //shift
//  number.shift()
//  console.log(number)

//  //concat()
//  let number1=[80,90,100]
// let newarr = number.concat(number1)
// console.log(newarr)

// //slice()
// let extract = number.slice(1,3);
// console.log(extract)

// //splice()
// number.splice(1,0,15,18)
// console.log(number)

// number.splice(1,2,15)
// console.log(number)

// number.splice(1,1,)
// console.log(number)

// //tostring()
// let str= number.toString()
// console.log(str)
// console.log(typeof str)

// //join()
// let str=number.join("*")
// console.log(str)

// //includes()
// console.log(number.includes("30"))

// //!Map
// let number = [1,2,3,4,5,,7,8,9,10]
// let two = number.map((i)=>{
//     console.log(i)
//     return i*2
// })
// console.log(two)

// //!filter
// let three = two.filter ((ele)=> {
//     return ele % 3==0
// })
// console.log(three)

// //!reduce
// let value= three.reduce((initialval,currentval)=>{
// console.log(initialval)
// console.log(currentval)
// return initialval+currentval
// },3)
// console.log(value)

//!string literals
// let name = "webtech"
// console.log(name)
// console.log(typeof name)

// let name2 = 'html'
// console.log(name2)
// console.log('"HTML" stands for hyper text markup language')

// let name3=`css`
// console.log(name3)

// //!template literals.
// console.log(`webtech includes ${name3} and the version is ${name3+3}`)

// //!string constructor
// let str = new String("web technology");
// console.log(str)
// console.log(typeof str)

// //!string Methods
// let technology = "web technology"
// console.log(technology)

// //charAt()
// console.log(technology.charAt(4))

// //charcodeAt()
// console.log(technology.charCodeAt(4))

// //to uppercase()
// console.log(technology.toUpperCase())

// //to lowercase()
// console.log(technology.toLowerCase())

// //trimstart()
// console.log(technology.trimStart())

// //trimend()
// console.log(technology.trimEnd())

// //trim()
// console.log(technology.trim())

// //includes()
// console.log(technology.includes("w"))

// //split()
// let arr = technology.split(" ")
// console.log(arr)

// //replace()
// console.log(technology.replace ("web","fronted"))

//object
// let student = {
//     name:"Ram",
//     age:24,
//     isWorking:true,
//     hobbies:["coding","Sleeping","eating"],
//     isMarried:()=>{
//         return "No"
//     },
//     address:{
//         city:"vashi"
//     }

// }
// console.log(student.name)
// console.log(student.age)
// console.log(student.isWorking)
// console.log(student.hobbies[1])
// console.log(student.isMarried())
// console.log(student.address.city)

// let employee={
//     ename:"John",
//     age:24,
//     salary : 40000,
//     address:{
//         city:"kharghar",
//         pincode:410210,
//     },
//     isMarried:false,
//     role:()=>{
//         console.log("software developer")
//     },
//     contact:[9324347479,823894324830],
// }
// console.log(employee)

// //keys()
// let emp1=Object.keys(employee)
// console.log(emp1)

// //values()
// let emp2 = Object.values(employee)
// console.log(emp2)

// //enteries()
// let emp3 = Object.entries(employee)
// console.log(emp3)

// //hasown()
// console.log(Object.hasOwn(employee,"Jeet"))

// //seal()
// console.log(Object.seal(employee))

// employee.state= "Maharastra"
// console.log(employee)

// delete employee.age;
// console.log(employee)

// employee.age=25;
// console.log(employee)

// //issealed()
// console.log(Object.isSealed(employee))

// //freeze()
// console.log(Object.freeze(employee))
// employee.state="Maharastra"
// console.log(employee)

// delete employee.age;
// console.log(employee)

// employee.age=25;
// console.log(employee)

// //isfrozen()
// console.log(Object.isFrozen (employee))

// //assign()
// let emp={
//     ename:"Qspiders"
// }

// let employee2 = Object.assign({ },employee,emp)
// console.log(employee2)
// employee2.ename="OM"
// console.log(employee2)

//create()
// let employee3 = Object.assign({ },employee,emp)
// console.log(employee2)
// employee2.ename="OM"
// console.log(employee2)

//create()
// let employee3=Object.create(employee)
// console.log(employee3)

// employee3.ename="Ram"
// console.log(employee3)

//global variable
// var a=10;
// var b=20;
// const c=30

// console.log(a)
// console.log(b)
// console.log(c)

// function scope(){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// scope()

// if(true){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// //block scope
// if(true){
//     var a=10;
//     let b=20;
//     const c=30

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)
// console.log(b)
// console.log(c)

// //function scope()
// function scope(){
//     var a=10;
//     let b=20;
//     const c=30

//     console.log(a)
//     console.log(b)
//     console.log(c)

// }
// scope()

// console.log(a)
// console.log(b)
// console.log(c)

// //lexical scope
// function outer(){
//     const a=10
//     console.log("outer fn")
//     console.log(a)

// function inner(){
//     a=30
//     console.log(a)
//     console.log("inner fn")
// }
// inner()
// console.log(a)
// }
// outer()

//Asynchrous Javascript
// console.log("1st")
// console.log("2nd")
// console.log("3rd")
// //time function
// console.log("1st")
// setTimeout(()=>{
//     console.log("2nd")
//     console.log("hello world")
// },3000)
// console.log("3rd")

// setInterval(()=>{
//     console.log("I am executing again and again")
// },2000)

// let count=0;
// let timeTask = setInterval(() =>{
//     count++
//     console.log(`count:${count}`)

// if(count==5){
//     clearInterval (timeTask)
//     setTimeout(()=> console.log("Done"),1500)
// }
// },1500)

//promise
// let ans1 = prompt("what is your ans?")
// let ans = ans1.toLowerCase()

// let mypromise = new Promise((resolve, reject) => {
//     if (ans == "yes") {
//         resolve("she said yes")
//     } else {
//         reject("she said no")
//     }
// })

// mypromise
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))


// let mypromise1 = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise 1 is resolved")
//     },3000)
// })

// let mypromise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise 2 is resolved")
//     },1000)
// })

// let mypromise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promise 3 is reject")
//     },2000)
// })

// //promise all()
// Promise.all([mypromise1,mypromise2,mypromise3])
// .then(result => console.log(result))
// .catch(error=> console.log(error))

// //promise any()
// Promise.any([mypromise1,mypromise2,mypromise3])
// .then(result => console.log(result))
// .catch(error=> console.log(error))

// //promise race()
// Promise.race([mypromise1,mypromise2,mypromise3])
// .then(result => console.log(result))
// .catch(error=> console.log(error))

// //promise allsettled()
// Promise.allSettled([mypromise1,mypromise2,mypromise3])
// .then(result => console.log(result))
// .catch(error=> console.log(error))

//example1
// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())            
//             .then(json=>console.log(json))
//             .catch(error => console.log(error))
     
//example 2
// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())            
//             .then(data=>console.log(data))
//             .catch(error => console.log(error))
//             console.log("Hello")

//async and await
//example 3
// async function fetchingData (params){
//     let data=await fetch('https://fakestoreapi.com/products/1')
//     let res = await data.json()
//     console.log(res)
// }
// fetchingData()

// console.log(window)

//prompt()
// let age = prompt("Enter your Age")
// console.log(age)

// //alert()
// window.alert("Dont scroll the page")

//confirm
// let res=window.confirm("Are you sure to delete this file")
// console.log(res)

//Document Object Model(DOM)
// console.log(document.all)
// console.log(document.scripts)
// console.log(document.images)
// console.log(document.forms)
// console.log(document.links)
// console.log(document.body)


//indirect methods
//document.getelementById
// let h1 = document.getElementById("heading");
// console.log(h1)
// h1.style.backgroundColor="orange"

//document.getElementByClassName
// let anchor = document.getElementsByClassName('link')
// console.log(anchor)

//document.getElementBytagName
// let container=document.getElementsByTagName('div')
// console.log(container)

//document.querySelector
// let heading = document.querySelector('#heading')
// console.log(heading)

// let anchor=document.querySelector('.link')
// console.log(anchor)

//document.querySelectorAll
// let anchor1 = document.querySelectorAll('.link')
// console.log(anchor1)

//DOM APi
// let container=document.getElementById('box')

//textcontent
// container.textContent="Hello World"

//innerHTML
// container.innerHTML='<h1> Hello People</h1>'

//creatElement()
// let ul = document.getElementById('list')
// let li = document.createElement('li')
// li.textContent="apple"

//append child()
// ul.appendChild(li)

// function msg() {
//     confirm("Are you sure to delete this content")
// }

// let button = document.getElementById('btn')

// button.addEventListener('click', ()=>{
//     alert('order placed')
// })


//Es6
//default parameter
// function add(a=3,b=2){
//     console.log(a+b)
// }
// add(7,3)

//spread operator
// let number=[1,2,3,4,5]
// console.log(number)

// let number1=number;
// console.log(number1)

// number1 [1]=7
// console.log(number1)
// console.log(number)

// let number1= [...number]
// console.log(number1)

// number1[1] = 7
// console.log(number1)

// console.log(number)


// let student = {
//     name: "Neeraj",
//     age:28,
// }
//  console.log(student)
 
//  let student1 = student;
//  console.log(student1)
//  student1.name = "Dhiraj"
//  console.log(student1)
//  console.log(student)

// let student1={...student}
// console.log(student1)
// student1.name = "Dhiraj"
// console.log(student1)
// console.log(student)

//destructuring with array
// let arr= [20,30,40,50,60]
// console.log(arr)

// let[a,,,,d] = arr
// console.log(a)
// console.log(d)

//destructuring with object
// let student = {
//     name:"Neeraj",
//     age:28,
//     address:{
//         city:"Mumbai"
//     }
// }
// console.log(student)

// let{name,age,address:{city}} = student
// console.log(name)
// console.log(city)

//rest parameter
function number1(...a){
    return a
}
console.log(number1(2,34,5,6,7,7))