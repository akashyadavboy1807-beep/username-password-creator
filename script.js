const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    const name = document.getElementById("name").value
    let username = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;
    
    let correctpass = username + "@123";

    if (pass === correctpass) {
        alert(`Welcome! Mr./Mrs. ${name}`)
    } else {
        alert(`please Enter the Correct Password Mr./Mrs. ${name}`)
    }
})
