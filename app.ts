// Rest and spread Operator:

// syntax:

// .....

// spread operator:
 let arr1 = ["bilal","ali","hasan"]
let arr2 = ["amna","muqadas","zakii"]
  let ubdateArr= [...arr1,...arr2]

  console.log(ubdateArr)
 
 let studentObj = {
    name:"zakii",
    Age: 18 ,
    email:"abc@abc,com",
   hobbies: ["painting","coding","football"]
}
let newStudent = {
   ...studentObj,
    name:"maryam "
//  console.log(studentObj)
//  console.log(newStudent)
}

//rest


function addNumber(a,b,c,...other){
    console.log(other[0])

    return a+b+c

}
const res=addNumber(2,5,6,7,8)
 console.log(res)