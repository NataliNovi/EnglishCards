import './App.css';
import './components/word/word.jsx';
import './components/word/word.css';
import Card from './components/card/card.jsx';
import {cardsArr} from './constants/const_cardsArr';
import Word from './components/word/word.jsx';
import {wordsArr} from './constants/const_wordsArr';
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import Footer from './components/footer/footer.jsx';


 
const wordDescribe = wordsArr;
const cardDescribe = cardsArr;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
  <div className="cardsContainer">
    { cardDescribe.map((card)=>
     <Card photo={card.photo} mean={card.mean} question={card.question} transcript = {card.transcript} translate = {card.translate} theme = {card.theme} sample = {card.sample}></Card>)
    }
  </div>

  <div class="wordsContainer">
    { wordDescribe.map((word)=>
     <Word title={word.title} photo={word.photo} mean={word.mean} transcript = {word.transcript} translate = {word.translate} theme = {word.theme} sample = {word.sample}></Word>)
    }
  </div>

     <Footer ></Footer>
    
    </div>
  );
}

export default App;


/*- Список всех существующих слов. У каждого слова есть основное значение, транскрипция, перевод, тема. У каждого слова должна быть возможность его удаления и редактирования. Также должна быть возможность добавления слов.
- Карточка слова, у которой есть основное значение, транскрипция, перевод, тема.
- Главная страница, где отображаются списки слов и карточек.*/