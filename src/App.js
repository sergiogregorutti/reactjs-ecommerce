import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import moment from 'moment';

function Texto() {
  useEffect(() => {
    console.log('Componente Texto montado');

    return () => {
      console.log('Componente Texto desmontado');
    };
  }, []);

  return (
    <p>Texto de ejemplo</p>
  )
}

function App() {
  console.log('El componente App ha sido renderizado');
  const [time, setTime] = useState(moment(Date.now()).format('DD/MM/YYYY H:m:s'));
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    console.log('El tiempo ha sido actualizado');
  }, [time]);

  const updateTime = () => {
    setTime(moment(Date.now()).format('DD/MM/YYYY H:m:s'));
  };

  const toggleShowText = () => {
    setShowText(!showText);
  };

  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />

      <p>Fecha y Hora: {time}</p>
      <button onClick={updateTime} style={{marginRight: '15px'}}>Actualizar Fecha y Hora</button>

      <button onClick={toggleShowText}>Mostrar/Ocultar Texto</button>

      {showText && <Texto />}
    </div>
  );
}

export default App;
