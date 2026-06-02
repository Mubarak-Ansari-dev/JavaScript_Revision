
// 4. 'This' Keyword

const obj ={
    value: 7,
    myFunction: function(){
        console.log("Value is " + this.value)
    },
};
obj.myFunction(); 

// in normal function 'this' keyword refers to the object that calls the function
// in arrow function 'this' keyword refers to the object that calls the function that contains the arrow function- 
// means- arrow fnc window object ko refer krta hai