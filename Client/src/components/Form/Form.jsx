import { useState } from "react";
import { Validation } from '../../validacion';
import styles from '../Form/Form.module.css';
import logo from '../../assets/logo.png';
import gif from '../../assets/2.gif';

const Form = (props)=>{
    const {login} = props

    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [errors,setErrors] = useState({})

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })

        setErrors({
            ...errors,
            [event.target.name]: Validation(userData,event.target.name)
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData)
    
    }

    // useEffect(()=>{
    //     setErrors({
    //         ...errors,

    //     })
    // },[])

    return (
        <div className={styles.container}>
        <div className={styles.loginBox}>
        <img src= {logo} className={styles.logo} alt="Rick and Morty Logo"/>
        <img src= {gif} className={styles.gif} alt="Rick and Morty Logo"/>
        
            <p className={styles.login}>Login</p>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                <input required="" 
                type="text" 
                name="email" 
                value={userData.email} 
                className={styles.input} 
                placeholder= "Email address" 
                onChange={handleChange} />

                <label htmlFor="email"></label>
                </div>
                <br />
                {errors.email !== ''? 
                <span className={styles.error}>{errors.email}</span> : ''}
        
                <br />

                <div>
                <input required="" 
                type="text" 
                name="password" 
                value={userData.password} 
                className={styles.input} 
                placeholder="Password" 
                onChange={handleChange}/>
                <br />
                {errors.password!== ''? 
                <span className={styles.error}>{errors.password}</span> : ''}
                <label htmlFor="password"></label>
                </div>
                
                <div>
                    <br />
                    <br />
                <button type="submit" className={styles.button}>
                    Submit
                </button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Form