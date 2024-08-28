// //Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));


// //Multiple Element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));

// console.log(document.getElementsByTagName('li'));


//let ul = document.querySelector('.items');
//ul.remove();

// ul.lastElementChild.remove();
// ul.children[1].innerHTML='Suresh';
// ul.firstElementChild.textContent ='Hello';


let btn = document.querySelector('.btn');
// btn.style.background ='red';
let myform = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let message = document.querySelector('.msg');
let userList = document.querySelector('#users');

btn.addEventListener('click', (e) => {
    e.preventDefault();
   // document.querySelector('#my-form').style.background='#ccc';
   //document.querySelector('body').classList.add('bg-dark');
    if(nameInput.value ==='' || emailInput.value==''){
        message.classList.add('error');
        message.innerHTML='Please enter all the fields';
        //wait for 3 seconds and remove the message
        setTimeout(()=>message.remove(), 3000);
    }else {
        const li= document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        //clear fields
        emailInput.value='';
        nameInput.value='';
    }
    

})