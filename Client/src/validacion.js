


const Validation = (userData,name)=>{
    if(name ==='email'){
        if(/\S+@\S+\.\S+/.test(userData.email) && userData.email.length <=35){
            return ''
        }else{
            return 'Ingresa un email valido'
        }
    }

    if(name==='password'){
        if(userData.password && /^(?=\w*\d)(?=\w*[a-z])\S{6,10}$/.test(userData.password)){
            return ''
        }else{
            return 'Ingresa una password valida'
        }
    }
    
}

export {Validation}