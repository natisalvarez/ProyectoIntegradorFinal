import styles from './About.module.css';
import imageAbout from '../../assets/imageAbout.gif';

const About = () => {
    return (

        <div class= {styles.container}>
            <h2 class= {styles.h2}> Welcolme to my first app!</h2>
            <br />
            <br />
            <div className={styles.about}>
            <figure>
            <img src= {imageAbout} className={styles.imageAbout} alt="Rick and Morty img"/>
            </figure>
            <br />
            <br />
            <h3> Hi, there!</h3>
            <br />
            <br />
            <br />
            <p> This project is an exercise where I am learning and testing</p>
                <br />
                the basics of the full stack development.
                <br />
                <br />
                <br />
               <p className={styles.enjoy}> I hope you enjoy it!</p>
               </div>
                <br />
                <br />
            <br />
        </div>
    
    )
}

export default About;