Check_infor=() => {
    let nameuser = document.getElementById('name')
    let email = document.getElementById('email')
    let error_input=document.getElementById('error_input')
        if(nameuser.value== ' ' || email.value ==' '){
            error_input.innerHTML = 'You must fill in all the information'
            error_input.style.color = 'White'
            error_input.style.backgroundColor = 'red'

        }else{
            error_input.innerHTML = 'valid information'
            error_input.style.color = 'blue'
            error_input.style.backgroundColor = 'white'
        }
}
