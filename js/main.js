let username = prompt('Enter Username: ')
let password = prompt('Enter password: ')
username= username.trim()
if(username === 'Ebuka' & password === '12345678'){
    document.writeln(`welcome  ${username}`)
}else{
    document.writeln('Invalid username')
}

