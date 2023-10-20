import Card from '../card/Card';
import styles from './cards.module.css';

export default function Cards({characters, onClose}) {
   return(
      <section className={styles.cards}>
         {characters.map(({id, name, status, species, gender, origin,image})=> (
            <Card
            id={id}
            key={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
            /> 
         ))}
      </section>
   )
}
