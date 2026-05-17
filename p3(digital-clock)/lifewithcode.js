
// const clock = document.querySelector('#clock')
// or
const clock = document.getElementById('clock') // here we dont need #


setInterval( function () {

    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);           // interval are in milli second



// ********** oR **********
// const clock = document.getElementById('clock')

// setInterval(() => {
//     clock.innerHTML = new Date().toLocaleTimeString()
// }, 1000);
