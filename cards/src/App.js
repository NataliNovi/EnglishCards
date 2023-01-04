import styles from './App.module.scss';
import './components/Word/Word.jsx';
import Table from './components/Table/Table';
import Card from './components/Card/Card.jsx';
import {cardsArr} from './constants/const_cardsArr';
import Word from './components/Word/Word.jsx';
import {wordsArr} from './constants/const_wordsArr';
import ButtonAddWord from './components/ButtonAddWord/ButtonAddWord';
import ButtonAddCard from './components/ButtonAddCard/ButtonAddCard';
import Header from './components/Header/Header.jsx';
import Main from './components/Mainpage/Main.jsx';
import Know from './components/Knowcards/Know';
import Remaincards from './components/Remaincards/Remaincards';
import Dontknow from './components/Dontknowcards/Dontknow';
import Footer from './components/Footer/Footer.jsx';
import { wordsListArr } from './constants/wordsList';

 
// получение JSON-файла через fetch
/*fetch("./src/constants/wordsList.json",{
  method: 'GET',
  headers: {
      'Content-Type': 'application/json;charset=utf-8'
  },
})
.then((response) => {
  let list = response.json();
  return list;
})
.then((list) => {
  console.log(list);
  //getFlowersOut(catalogue);
})

.catch(error => console.log(error))*/

const wordsList = wordsListArr;
const wordDescribe = wordsArr;
const cardDescribe = cardsArr;

console.log(wordsList);

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <Main></Main>


      <div className={styles.wordsListContainer}>
        {wordsList.map((item,index)=>
          <Table key={index} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags}></Table>
        )}
      </div>

  <div className={styles.cardsContainer}>
    { cardDescribe.map((card)=>
     <Card photo={card.photo} mean={card.mean} question={card.question} transcript = {card.transcript} translate = {card.translate} theme = {card.theme} sample = {card.sample}>
     </Card>)
    }
  </div>

 <ButtonAddCard></ButtonAddCard>
  <div class={styles.wordsContainer}>
    { wordDescribe.map((word)=>
     <Word title={word.title} photo={word.photo} mean={word.mean} transcript = {word.transcript} translate = {word.translate} theme = {word.theme} sample = {word.sample} isSelected={word.isSelected}>
     </Word>)
    }
  </div>

<ButtonAddWord></ButtonAddWord>


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