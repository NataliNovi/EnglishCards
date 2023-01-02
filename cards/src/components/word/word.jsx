import styles from './word.module.scss';

function Word (props) {
    return (
        <div className={styles.word}>
            <img src ={props.photo} className={styles.wordImg} alt='wordPicture'></img>
            <div className={styles.wordTitle}>{props.title}</div>
            <div className={styles.wordMeaning}>Meaning: {props.mean}</div>
            <div className={styles.wordTranscription}>Transcription: {props.transcript}</div>
            <div className="word-translation">Translate: {props.translate}</div>
            <div className="word-theme">Theme: {props.theme}</div>
            <div className="word-sample">Sample: {props.sample}</div>

        </div>
    );
}
export default Word;
