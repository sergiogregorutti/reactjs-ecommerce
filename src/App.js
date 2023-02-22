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

  const fetchProduct = () => {
    return new Promise((resolve, reject) => {
      const productData = document.querySelector("#product-data");
      productData.textContent = 'Cargando datos...';

      setTimeout(() => {
        resolve({ name: "Notebook", price: 100.000 });
      }, 3000);

      /*setTimeout(() => {
        reject('El producto no existe.');
      }, 3000);*/

      /*setTimeout(() => {
        throw 'El servidor no responde.';
      }, 3000);*/
    });
  };

  const getProductData = () => {
    fetchProduct().then((data) => {
      const productData = document.querySelector("#product-data");
      productData.textContent = `Nombre: ${data.name}. Precio: $${data.price}.`;
    }, (data) => {
      console.log(data);
    }).catch(function(error) {
      console.log(error);
    });
  };

  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />

      <p>Fecha y Hora: {time}</p>
      <button onClick={updateTime} style={{marginRight: '15px'}}>Actualizar Fecha y Hora</button>

      <button onClick={toggleShowText}>Mostrar/Ocultar Texto</button>

      {showText && <Texto />}

      <hr style={{margin: '20px 0'}} />

      <button onClick={getProductData} style={{marginBottom: '15px'}}>Cargar datos de Producto</button>
      <div id="product-data"></div>
    </div>
  );
}

export default App;
