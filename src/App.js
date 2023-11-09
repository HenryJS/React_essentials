import {useState} from 'react';
import './App.css';


function App() {

  const [newItem, setNewItem] = useState('');

  return (
    <div className="App">
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value )}
          type="text" 
          id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List </h1>
      <ul className='list'>
        <l1>
          <label>
            <input type="checkbox"/>
            item 1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </l1>
        <l1>
          <label>
            <input type="checkbox"/>
            item 1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </l1>
      </ul>
    </div>
  );
}

export default App;
