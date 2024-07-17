import { useState } from 'react';

export default function Tasks() {


  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');
  
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>Tasks</h1>

      <input type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder='Add a new Task'/>
      <button onClick={addItem}>Add</button>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>

          </li>))}
      </ul>
    </>
  );
  }