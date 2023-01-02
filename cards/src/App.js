import styles from './App.module.scss';
import './components/word/word.jsx';
import Card from './components/card/card.jsx';
import {cardsArr} from './constants/const_cardsArr';
import Word from './components/word/word.jsx';
import {wordsArr} from './constants/const_wordsArr';
import Header from './components/header/header.jsx';
import Main from './components/mainpage/main.jsx';
import Know from './components/knowcards/know';
import Remaincards from './components/remaincards/remaincards';
import Dontknow from './components/dontknowcards/dontknow';
import Footer from './components/footer/footer.jsx';



 
const wordDescribe = wordsArr;
const cardDescribe = cardsArr;

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <Main></Main>
  <div className={styles.cardsContainer}>
    { cardDescribe.map((card)=>
     <Card photo={card.photo} mean={card.mean} question={card.question} transcript = {card.transcript} translate = {card.translate} theme = {card.theme} sample = {card.sample}></Card>)
    }
  </div>

  <div class={styles.wordsContainer}>
    { wordDescribe.map((word)=>
     <Word title={word.title} photo={word.photo} mean={word.mean} transcript = {word.transcript} translate = {word.translate} theme = {word.theme} sample = {word.sample}></Word>)
    }
  </div>

<div className={styles.resultsContainer}>
  <Know></Know>
  <Remaincards></Remaincards>
  <Dontknow></Dontknow>
  </div>
  

     <Footer ></Footer>
    
    </div>
  );
}

export default App;


/*- Список всех существующих слов. У каждого слова есть основное значение, транскрипция, перевод, тема. У каждого слова должна быть возможность его удаления и редактирования. Также должна быть возможность добавления слов.
- Карточка слова, у которой есть основное значение, транскрипция, перевод, тема.
- Главная страница, где отображаются списки слов и карточек.*/