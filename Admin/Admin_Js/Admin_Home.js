adminName = sessionStorage.getItem('name')
adminPass = sessionStorage.getItem('password')
if(adminName != 'admin' || adminPass != 'admin'){
    window.location = './Admin_login.html'
}