import './App.css';
import SelectList from './components/SelectList';

function App(props) 
{
  return (
    <div className="App">
      <h1>Where's Waldo?</h1>
      <div className='SelectListContent'>
        {
          props.object.map(item => 
            <SelectList 
              key={item.id}
              item={item}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
