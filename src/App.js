import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const isValueValid = value.length >= 3;

  const onInputButtonClick = () => {
    const promptValue = prompt('Введите значение (минимум 3 символа):');
    if (promptValue !== null) {
      handleInput(promptValue);
    }
  };

  const handleInput = (promptValue) => {
    if (promptValue.length < 3) {
      setError('Введенное значение должно содержать минимум 3 символа');
    } else {
      setValue(promptValue);
      setError('');
    }
  };

  const onAddButtonClick = () => {
    if (value.length >= 3) {
      const id = Date.now();
      const dateTime = new Date().toLocaleString();
      setList([...list, { id, value, dateTime }]);
      setValue('');
      setError('');
    }
  };
  
  return (
    <div className="app">
      <h1 className="page-heading">Ввод значения</h1>
      <p className="no-margin-text">
        Текущее значение: "<output className="current-value">{value}</output>"
      </p>
      <div v-if={error !== ''} className="error">{error} </div>
      <div className="buttons-container">
        <button 
          className="button" 
          onClick={onInputButtonClick}
        >
          Ввести новое
        </button>
        <button 
          className="button" 
          onClick={onAddButtonClick} 
          disabled={!isValueValid}
        >
          Добавить в список
        </button>
      </div>
      <div className="list-container">
        <h2 className="list-heading">Список:</h2>
        {list.length === 0 ? (
          <p className="no-margin-text">Нет добавленных элементов</p>
        ) : (
          list.map((item) => (
            <ul className="list">
              <li className="list-item">{item.value} {item.dateTime}</li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
