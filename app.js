let newName = "Fred";

function changeName (newName) {
    console.log(newName);
    if (newName == "George") {
        newName = "Harry";
        console.log(newName);
    }

};

changeName("George");
console.log(newName);


let whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`)
}

let greet = (time,fn) =>{
    if (time <12) {
        fn("Morning")
    } else if (time >=12 && time <18) {
        fn("Afternoon")
    } else {
        fn("Evening")
    }
}
greet(12, whichGreeting)

