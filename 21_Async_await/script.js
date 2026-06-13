async function getData(){
    setTimeout( function(){
        console.log("I am inside setTimeOut block")
    }, 3000)
}
// call function
getData();
// or let output = getData();

// This is Async function, its take some time to execute
// now  what is await ??
// lets understand with fetch API

async function getData(){
    let response = fetch('https://jsonplaceholder.typicode.com/todos/1');

    console.log( response);
}