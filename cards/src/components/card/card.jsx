import styles from './card.module.scss';
import React, {useState} from 'react';


/*Карточке слова добавьте состояние, которое будет отвечать за показывание/скрытие перевода. По умолчанию перевод всегда скрыт.  При нажатии на кнопку "Показать перевод", появляется перевод слова, а кнопка исчезает. Реализуйте этот функционал с помощью внутреннего состояния элемента и условного рендеринга.*/


function Card (props) {

    const [pressed, setPressed] = useState(props.pressed||false);

    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <div className={styles.card}>
            <img src ={props.photo} className={styles.cardImg} alt="cardImg"></img>
            <div className="card-question">Question: {props.question}</div>
            <div className="card-meaning">Meaning: {props.mean}</div>
            <div className="card-transcription">Transcription: {props.transcript}</div>
            <div className="card-theme">Theme: {props.theme}</div>
            <div className="card-sample">Sample: {props.sample}</div>
            <div className={styles.cardTranslation}>Перевод: {props.translate}</div>
            <button>Translate</button>
    

        </div>
    );
}
export default Card;


/*<button {...props} onClick={handleChange}>
                {pressed? "Translate": props.translate}
            </button>*/

