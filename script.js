document.addEventListener("DOMContentLoaded", function(){


    const form = document.getElementById('registration-form')
    const feedbackDiv = document.getElementById('form-feedback')
    

    form.addEventListener('submit', (e)=>{
        e.preventDefault();


        const username = document.getElementById('username')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    


    // const username_error = document.getElementById('username_error')
    // const email_error = document.getElementById('email_error')
    // const pass_error = document.getElementById('pass_error')



    let isValid = true;
    let messages = [];
    if(username.length < 3){
        isValid = false;
        messages.push("username must be at least 3 characters long. ")
        username_error.textContent = 'username must be at least 3 characters long.'
    }

    if(!email.includes("@") || !email.includes(".")){
        isValid=false;
        messages.push("enter a valid email with '@' and '.' ")
    }

    if(password.length < 8){
        isValid=false;
        messages.push(" password must be at least 8 characters long")
    }

    
    feedbackDiv.style.display = 'block';
    if(isValid){
feedbackDiv.textContent = 'Registration successful!';
feedbackDiv.style.color = '#28a745';

form.submit();
    } else{
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = '#dc3545';


    }

    })
})