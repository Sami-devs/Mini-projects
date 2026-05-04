const para = document.getElementById('para')
const insert = document.getElementById('insert')
window.addEventListener('keydown', (e)=>{
    insert.innerHTML=`
    <div class="color">
        <p>I know you press ${e.key == ' ' ? "space" : e.key} 😊</p>

        <table>
            <tr>
                <th>key</th>
                <th>keyCode</th>
                <th>Code</th>   
            </tr>
            <tr>
                <td>${e.key == ' '  ?  "space": e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>   
            </tr>

        </table>
        <br>
        <p>How is my magic buddy</p>

        
    </div>`
    
})