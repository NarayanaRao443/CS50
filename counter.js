/*
let counter = 0
function count()
{
    counter++;
    //alert(counter);
    
    document.querySelector('h1').innerHTML = 'Counter : ' + counter;

    // if(counter % 3 ==0)
    // {
    //     alert(`Counter is : ${counter}`);
    // }
}
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').onclick = hello;
    setInterval(hello,  1000); // it acts like seconds, increments the value by 1
});

*/

// Local Storage

let counter = 0;

// checks whether the previous values are there or not
if(!localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
}
function count()
{
    let counter = localStorage.getItem('counter');  // it stores the previous count value but it shows the 0 on browser, but increments from the previous value
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter',counter);
}

    document.addEventListener('DOMContentLoaded', function(){
  //  document.querySelector('h1').innerHTML = localStorage.getItem('counter'); // after refresh the count is incremented from the previous value
    document.querySelector('button').onclick = count;
})
