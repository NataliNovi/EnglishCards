import './card.css';

function Card (props) {
    return (
        <div className="card">
            <img src ={props.photo} alt="card-img"></img>
            <div className="card-question">Question: {props.question}</div>
            <div className="card-meaning">Meaning: {props.mean}</div>
            <div className="card-transcription">Transcription: {props.transcript}</div>
            <div className="card-translation">Translate: {props.translate}</div>
            <div className="card-theme">Theme: {props.theme}</div>
            <div className="card-sample">Sample: {props.sample}</div>

        </div>
    );
}
export default Card;
