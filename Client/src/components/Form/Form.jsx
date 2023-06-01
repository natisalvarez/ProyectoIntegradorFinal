import { useState } from "react";
import { Validation } from '../../validacion';
import styles from '../Form/Form.module.css';
import logo from '../../assets/logo.png';

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
        <figure>
        <img src= {logo} className={styles.logo} alt="Rick and Morty Logo"/>
        </figure>
        <br />
        <br />
        <br />
        <br />
            <p className={styles.login}>Login</p>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                <input required="" type="text" name="email" value={userData.email} className={styles.input} placeholder= "Email address" onChange={handleChange} />
                <label htmlFor="email"></label>
                {errors.email !== ''? <span className={styles.error}>{errors.email}</span> : ''}
                </div>
                <br />
                <br />

                <div>
                <input required="" type="text" name="password" value={userData.password} className={styles.input} placeholder="Password" onChange={handleChange}/>
                {errors.password!== ''? <span className={styles.error}>{errors.password}</span> : ''}
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
    )
}

export default Form