import styles from './translate.module.scss';
//import {cardsArr} from './const_cardsArr';

function Translate (props) {
    return (
        <>
        <div className={styles.cardTranslation}>Translate: {props.translate}</div>
        <div className="card-meaning">Meaning: {props.mean}</div>
        <div className="card-transcription">Transcription: {props.transcript}</div>
        <div className="card-sample">Sample: {props.sample}</div>
        </>
    );
}
export default Translate;

