import styles from './transbutton.module.scss';

function TransButton (props) {
    return (
        
        <div className={styles.button}>
           <button className={styles.transButton}>Показать перевод</button>
        </div>
         
    );
}
export default TransButton;