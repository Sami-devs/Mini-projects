let count = 1

    const counter = setInterval(() => {

        if (count < 1000) {
            count++
            document.getElementById('count').innerText = count
        } 
        
        else {
            clearInterval(counter)

            document.getElementById('count').innerText =
            `Wow! You have ${count} Followers 😍`

            document.getElementById('followers').innerText = ''
        }

    }, 5)
