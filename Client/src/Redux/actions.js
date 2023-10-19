import axios from "axios";


export const addFav = (character)=>{
    try {
       const endpoint = 'http://localhost:3001/rickandmorty/fav';
       return async (dispatch) => {
          const {data} = await axios.post(endpoint, character)
             return dispatch({
                type: 'ADD_FAV',
                payload: data,
             });
       };
    } catch (error) {
       console.log(error.message);
    }
 };
 
 
 export const removeFav = (id)=>{
    try {
       const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
       return async (dispatch) => {
        const {data} = await axios.delete(endpoint)
             return dispatch({
                type: 'REMOVE_FAV',
                payload: data,
          });
       };
    } catch (error) {
       console.log(error.message);
    }
 };
 
/*
// ACTION | addFav
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
 }; 

// ACTION | removeFav
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 }; */
 
//Nuevo

export const filterCards=(gender)=>{
    return{type: "FILTER", payload: gender}
}
export const orderCards =(orden)=>{
    return {type:"ORDER", payload: orden}
}
export const showAllCards = () => {
    return { type: "SHOW_ALL"};
  };

/* import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from "./action-typs";

export const addFav = (character) => { // funciones que retornar objetos
    return { type: ADD_FAV, payload: character }
}

export const removeFav = (id) => { // funciones que retornar objetos
    return { type: REMOVE_FAV, payload: id } // las constantes se escriben en mayusculas
};

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender } 
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order } 
};

// se puede hacer export default; */