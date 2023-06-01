
import styles from './card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {

  
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose})
      setIsFav(!isFav)

   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      
         <div className={styles.card}>
         <div className={styles.cardHeader}>
          {(<button className={styles.favorite}  onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>)}

          <div className={styles.estado}>
					<span className={styles.estadoSpan}></span>
					<h4>{`${status}`}</h4>
				</div>
         </div>


         <div className={styles.cardBody}>
         <figure>
         <img className={styles.imagen} src={`${image}`} alt='' />
         </figure>
         <button  className={styles.close} onClick={onClose}>Close</button>
         <div className={styles.cardBody}>
            <Link className={styles.link} to={`/detail/${id}`} >
               <h2 className={styles.name}>{`${name}`} </h2>
            </Link>
            <h2>{`${species}`}</h2>
            <h2>{`${gender}`}</h2>
            <h2>{`${origin.name}`}</h2>
         </div>
         </div>
      </div>
   );
}
    
const mapDispatchToProps = (dispatch)=>{
   return {
     addFav: (character) => dispatch(addFav(character)),
     removeFav: (id) => dispatch(removeFav(id)),
   }
 };
 
 const mapStateToProps =(state)=>{
   return{
     myFavorites: state.myFavorites
   }
 };
 
 
 export default connect(mapStateToProps,mapDispatchToProps)(Card)

/*
function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(props.id) : addFav(props)
      setIsFav(!isFav)

      // CODIGO DE ANTES
     // if (isFav) {
       //  setIsFav(false);
        // removeFav(props.id); // 
     // } else {
       //  setIsFav(true)
        // addFav(props.character)
      
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [props.myFavorites, props.id]);
   

   return (
      <div className={style.card}>

      <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>

         <div className={style.circle}></div>
         <div className={style.circle}></div>
         <div className={style.cardin}></div>

         <img src={props.image} alt='' class={style.foto} />

         <button onClick={()=>{ props.onClose (props.id)}}> Close </button>
         <Link to={`/detail/${ props.id }`} >
            <h3 className="card-name">{ props.name }</h3>
         </Link>
       
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.removeFav}</h2>
         <h2>{props.addFav}</h2>
         <h2>{props.myFavorites}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) } 
      // el que se despacha es que se importa, el otro id es por props
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};


export default connect(
   mapStateToProps,
   mapDispatchToProps, // vamos a conectar Card a las dos funciones y exportarla para conectarla con nuestro componente global
      )(Card);

      */