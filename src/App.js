import React, {useState} from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import moment from 'moment';

function App() {
  const [time, setTime] = useState(moment(Date.now()).format('DD/MM/YYYY H:m:s'));

  const updateTime = () => {
    setTime(moment(Date.now()).format('DD/MM/YYYY H:m:s'));
  };

  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />

      <p>Fecha y Hora: {time}</p>
      <button onClick={updateTime}>Actualizar</button>
    </div>
  );
}

export default App;
