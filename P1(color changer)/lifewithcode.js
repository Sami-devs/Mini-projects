const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach( function (button) {
    console.log(button);
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target); //target means that from where this event come

        if (event.target.id === 'grey') {
            body.style.backgroundColor = "grey"
        }
        if (event.target.id === 'white') {
            body.style.backgroundColor = "white"
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = "yellow"
        }


        // or we can also use switches in place of if-else 
         
        // switch (event.target.id) {
        //     case "grey":
        //         body.style.backgroundColor="grey"
        //         break;
        //     case "white":
        //         body.style.backgroundColor="white"
        //         break;
        //     case "blue":
        //         body.style.backgroundColor="blue"
        //         blue;
        //     case "yellow":
        //         body.style.backgroundColor="yellow"
        //         break;
        
        //     default:
        //         console.log("sorry it not working");
                
        //         break;
        // }
    
        
        
    })
});
