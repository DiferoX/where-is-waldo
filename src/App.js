import './App.css';
import SelectList from './components/SelectList';
import { v4 as uuidv4 } from 'uuid';

const object =
[
  {id: uuidv4(), img: '1'},
  {id: uuidv4(), img: '2'},
  {id: uuidv4(), img: '3'},
  {id: uuidv4(), img: '4'},
  {id: uuidv4(), img: '5'},
  {id: uuidv4(), img: '6'},
]

function App(props) 
{
  return (
    <div className="App">
      <h1>Where's Waldo?</h1>
      <div className='SelectListContent'>
        {
          object.map(item => 
            <SelectList 
              key={item.id}
              item={item}
              displayItem={props.displayItem}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
