CheckLogin = () => {
    adminName = document.getElementById('name').value
    adminPass = document.getElementById('password').value 
    if(adminName === 'admin' && adminPass === 'admin'){
        alert('Login succeed!')
        sessionStorage.setItem('name', adminName)
        sessionStorage.setItem('password', adminPass)
        window.location = './Admin_Home.html'
    }else{
        alert('Incorrect account or password information')
    }
}

ShowNHidePass = () => {
    adminPass = document.getElementById('password')
    if(adminPass.type === 'password'){
        adminPass.type = 'text'
    }else{
        adminPass.type = 'password'
    }
}