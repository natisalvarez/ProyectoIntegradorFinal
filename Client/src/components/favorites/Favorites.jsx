
import Card from '../card/Card';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards, showAllCards } from '../../Redux/actions';
import { useState } from 'react';
import styles from './favorites.module.css'


const Favorites = ({ myFavorites }) => {

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        setAux(!aux)
        dispatch(orderCards(e.target.value))
    }
    const handleFilter = (e) => {
        if (e.target.value === "Todos") {
            dispatch(showAllCards());

        } else {
            dispatch(filterCards(e.target.value));

        }
    }


    return (
        <div className={styles.container}>
            <select className={styles.select1} onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>,

            <select className={styles.select2} onChange={handleFilter}>
                <option value="Todos">Todos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless"> Genderless</option>
                <option value="unknown">Unknown</option>
               

            </select>,
            <div className={styles.card}>
            {
                myFavorites?.map(({ id, name, status, species, gender, origin, image, onClose }) => {
                    return (
                        

                        <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                            onClose={onClose}
                        />
                    )
                })
            }
            </div>

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, null)(Favorites)


/* import Card from '../card/Card';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../Redux/actions';
import { useState } from 'react';


const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false); // no se está usando este auxiliar

    const handleOrder = (event) => {
        setAux(!aux); // (true)
        dispatch(orderCards(event.target.value));
      
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    };

    return (

        <div>
            <select onChange={handleOrder}>
                <option value='A'> Ascendente </option>
                <option value='D'> Descendente </option>
            </select>

            <select onChange={handleFilter}>
                <option value='Male'> Male </option>
                <option value='Female'> Female </option>
                <option value='Genderless'> Genderless </option>
                <option value='unknown'> unknown </option>
                <option value='allCharacters'> All Characters </option>
            </select>

            {myFavorites?.map( // conditional chaining
                ({ id, name, status, species, gender, origin, image, onClose }) => {
                    return (
                        <Card
                            key={id}
                            image={image}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            onClose={onClose}
                        />
                    );
                }
            )}
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(
    mapStateToProps, // Me permite traer info del estado global y que el componente lo reciba por props.
    null
)(Favorites); */