const body=document.body;
const myButton=document.createElement('button');
myButton.textContent='click here!';
myButton.addEventListener('click',function(){
    alert('hello form js!');
});
body.appendChild(myButton);