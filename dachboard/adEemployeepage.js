
const employeeBtn = document.querySelector(".emloyee-btn");
const deleteBtn = document.querySelectorAll('.del-button');
const add_page_container=document.querySelector('#add-page-container');
const add_page_box = document.querySelector('.add-page-box');
/*
const addBtn=document.querySelector('#submit-btn');
const first_name= document.querySelector( "#first-name" );
const last_name= document.querySelector( "#last-name" );
const chef =  document.querySelector('#chef');
const date = document.querySelector('#start-date');
const atelier = document.querySelector('#atelier');
const post = document.querySelector('#post');
const phoneNumber = document.querySelector('#phone-number');
const contract = document.querySelector('#contract');
const salary = document.querySelector('#salary');
const img = document.querySelector( "#image") ;
const lastRef = document.querySelector( "#lastRef" );
let ref=1;
*/


const phone_number= document.querySelector( "#phone-number" );

// addPage link
let link = 'addPage.html';

employeeBtn.addEventListener('click', (e)=> {
    e.preventDefault( );
    employeeChange(link);
    add_page_container.classList.add('add-page-container');
    add_page_container.style.display='block' ;
});
async function employeeChange(file) {
    let  data= await fetch(file);
    let dataText =  await data.text();  
    add_page_box.innerHTML=dataText;
    const cancelBtn= document.querySelector('#cancel-btn');
    cancelBtn.addEventListener( "click", () => {
        add_page_container.style.display='none' ;
    });

    document.querySelectorAll('.dep').forEach(x=>{
        x.style.display="none";
    })

};
deleteBtn.forEach(X => {
    X.addEventListener('click', (e)=>{
        e.preventDefault();
        X.parentElement.parentElement.remove();
   })
})

/*
function add() {
    let  fName=first_name.value;
    let lName=last_name.value;  
    let pNum=phone_number.value;
    let atelierName=atelier.value;
    let chefName=chef.value;
    let postName=post.value;
    let startDate=date.value;
    let employeeImg=img.value;
    let typeContract=contract.value;
    let employeeSalary=salary.value;
    
        if (lastRef===5) {
            ref=6
        };
            // Create a new row in the table at the service page with input values
           var newRow = document.createElement('tr');
           newRow.innerHTML=` 
            <td>${ref}</td> 
            <td><img src="/images/employee-picture.jpg" alt="employee photo"  class="img"></td> 
            <td>${fName} ${lName}</td> 
            <td>${chefName}</td>
            <td>${startDate}</td> 
            <td>${atelierName}/${postName}</td> 
            <td>${pNum}</td> 
            <td>${typeContract}</td> <td>${employeeSalary}$</td>
            <td><button class="del-button"><i class="fa-solid fa-trash-can"></i></button></td>`;
            console.log(employeeImg);
        }
   
addBtn.addEventListner("click", add);
*/