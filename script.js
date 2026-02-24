// const bnt=document.querySelector("button");
// bnt.classList.add("bnt")




// function print(){
//     console.log("congrats to discover click");
// }

// bnt.addEventListener("click",print);
// bnt.removeEventListener("Stop",print);
    // const timer=setInterval(()=>{
    //     console.log("After 3 sec");},1000)
    //     console.log(timerId)
    //     setTimeout(()=>{
    //         clearInterval(timer);
    //     },10*1000)
       

// let count=1
// const timerId=setInterval(()=>{
//     if(count===10)clearInterval(timerId);
//     console.log(count)
//     count+=1
// },1000)


// const name=document.querySelector('#name');
// const bnt=document.querySelector('.bnt');
// const list=document.querySelector('.list');

// btn.addEventListener('click',()=>{
//     //creating element
//     const li=document.createElement('li');
//     const dlt=document.createElement('button');

//     //providing text
//     dlt.innerText='Delete';
//     li.innerText=name.value;

//     //appenting the element
//     li.appendChild(dlt);
//     list.appendChild(li);

//     //clearing text 
//     name.value="";
// })

// function greet(callback){
//     setTimeout(()=>{
//     console.log("Helow Students")
//     callback(45)},2000)
    
// }


// function print(sample, num){
//     sample()
//     console.log("total students are",num)
// }

// //print(greet,45)
// greet(print)


// console.log("Starting Homework......")

// setTimeout(() => {
//     console.log("Homework Done!");
//     console.log("Starting Dinner...");

//     setTimeout(() => {
//         console.log("Dinner Done!");
//         console.log("Getting ready To Go Out.....");
    


//        setTimeout(() => {
//         console.log("Going To Playground!");
//        },1000)

//     },1500)

// },2000)


// function finishhomework(callback) {
//     console.log("Starting homework...");
//     setTImeout(()=>{
//         console.log("Homework done!");
//         callback();
//     } ,2000);
// }

// function eatDinner(calllback){
//     console.log("Starting Dinner....")
//     setTimeout(()=>{
//         console.log("Dinner Done!")
//     },1500);
// }


// function goToplayground(){
//     console.log("Going to the Playgroung");
// }
// finishhomework(()=>{
// eatDinner(()=>{
// goToplayground();
// });
// });

// const p=new Promise((resolve,reject)=>{
//     let done=true;
//    setTimeout(()=>{
//     if(done){
//         resolve("Promise is resolved successfully");
//     }else{
//         reject("Promise is rejected");
//     }
//    },5000)  
// });    



// p.then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err)

// function dohomework(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(() => {
//         let done=true;
//         if(done){
            
//         console.log("Home work is done")
//         res("Homework Completed")
//         }else{
//             rej("Homework not done")
//         }

//     },2000);
//     });
//     return p;
// }
// function eatDinner(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(() => {
//         let done=true;
//         if(done){
            
//         console.log("Dinner is done")
//         res("Dinner Completed")
//         }else{
//             rej("Dinner not done")
//         }

//     },1500);
//     });
//     return p;
// }


// function goToplayground(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true
//             if(done){
//                 console.log("Went to playground")
//                 res("Playgound Time")
//             }else{
//                 rej("Not Allowed")
//             }
//         },2000)
//     })
//     return p
// }

// dohomework().then((msg)=>{
//     console.log(msg)
//     return eatDinner()
// }).then((msg)=>{
//     console.log(msg)
//     return goToplayground()
// }).then((msg)=>{
//     console.log(msg)
//     return goToplayground()
// }).then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Go To Sleep")
// })

// ----------async/await----------\\

// function orderfood(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Food is ordered")
//                 res("Order Placed")
//             }else{
//                 rej("Order Failed")
//             }
//         },2000);
//     })
// }
// orderfood().then((data)=>{
//     return preparefood();
// }).then((data)=>{
//         return new Promise((res,rej)=>{
//             setTimeout(() => {
//                 let done=true;
//                 if(done){
//                     console.log("Food is prepared")
//                     res("Food is ready")
//                 }else{
//                     rej("Failed to prepare food")
//                 }
//             },2000);
//         })
//     })


//     preparefood().then((data)=>{
//     return fooddeliverd();
// }).then((data)=>{
//         return new Promise((res,rej)=>{
//             setTimeout(() => {
//                 let done=true;
//                 if(done){
//                     console.log("Food is Deliverd")
//                     res("Food is ready")
//                 }else{
//                     rej("Failed to prepare Deliverd")
//                 }
//             },2000);
//         })
//     })

// async function order(){
//     await orderfood()
//     await preparefood()
//     await fooddeliverd()
// }

// orderfood()


// orderfood().then((data)=>{
//     return preparefood()
// }).then((data)=>{
//     return fooddeliverd()
// }).then((data)=>{
// }).catch((err)=>{
//     console.log("Something went wrong:", err)
// })

// console.log("First line")
// try{
//     console.log(sample)
//     console.log("Function Chal Gayi!!!!!")
// }catch(e){
//     console.log(e)
// }
// console.log("Khatam Tata Bye Bye")

// try{
// let age=16
// if (age<18){
//     throw new Error("Bache hai vote nahi de sakta")
// }
// }catch(e){
//     console.warn(e)
// }
// console.log("Khatam Tata Bye Bye Gaya")


// async function sendData(){
//     const response=await fetch("https://dummyjson.com/products/add", {
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             title:"BMW Hoddi",
//             description:"Exclucive BMW Hoddi for Men",
//             price:5499,
//             discountPercentage:12.96,
//             rating:4.69,
//             stock:10,
//             brand:"Addidas",
//             category:"Clothes"
//         })
//     });
// }


// localStorage.setItem("name","Toxic")
// localStorage.setItem("age",18)


//-------------------local storage------------------\\
// data stored in local storage will persist even after the browser is closed and reopened. It is designed for long-term storage of data that needs to be retained across sessions. Local storage allows you to store key-value pairs in a web browser, and the data remains available until it is explicitly cleared by the user or through code.\\

// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))

// localStorage.removeItem("name")
// console.log(localStorage.getItem("name")) //outpurt: null
//-------------------session storage------------------\\
// data stored in session storage will be cleared when the page session ends, which typically happens when the browser tab is closed. It is designed for temporary storage of data that is relevant only for the duration of a single browsing session.\\

// sessionStorage.setItem("name","Toxic")
// sessionStorage.setItem("age",18)


// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))


// document.cookie="name=Toxic; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/"
// document.cookie="age=18; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/"

//-----------------------cookies------------------\\
// Cookies are small pieces of data that are stored on the user's computer by the web browser. They are typically used to store information about the user or their preferences, and they can be accessed by both the client-side JavaScript and the server. Cookies have an expiration date, and they can be set to persist for a specific duration or until they are manually deleted by the user. Cookies are often used for session management, personalization, and tracking user behavior on websites.\\

//-------------------------generator function------------------\\

//function* generator(){
    // yield "Hello"
    // yield "World"
    // yield "Welcome to JavaScript"


// let index=2501730045
// while(true){
//     yield index
//     index++}
// }
// const gen=generator();
// console.log(gen)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())


//--------------------------curring------------------\\

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// const first=add(5)
// console.log(first) 
// const second=first(10)
// console.log(second)
// console.log(second(15)) 

// console.log(add(5)(10)(15))



