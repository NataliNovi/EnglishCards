import styles from './translate.module.scss';

function Translate (props) {
    return (
        
        <div className={styles.cardTranslation}>Translate: {props.translate}</div>
    );
}
export default Translate;

