import './word.module.css';

function Word (props) {
    return (
        <div className="word">
            <img src ={props.photo} alt="word-img"></img>
            <div className="word-title">{props.title}</div>
            <div className="word-meaning">Meaning: {props.mean}</div>
            <div className="word-transcription">Transcription: {props.transcript}</div>
            <div className="word-translation">Translate: {props.translate}</div>
            <div className="word-theme">Theme: {props.theme}</div>
            <div className="word-sample">Sample: {props.sample}</div>

        </div>
    );
}
export default Word;
