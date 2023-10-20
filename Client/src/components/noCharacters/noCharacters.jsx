import style from './noCharacters.module.css';

const noCaracters = () => {
    return(
        <div>
    <h2 className={style.container}>You have not searched a character yet
        <br />
        Please, write a number in the search bar to do it!</h2>
        </div>
    )
}

export default noCaracters;