import Board from './components/Board';
import './App.css';
import { useState, useEffect } from 'react';
import ArrayFichas from './FuncAux/ArrayFichas';

function App() {
  const [fichasRev,setFichasRev]=useState([]);
  const [reinicio,setReinicio]=useState(false);
  const [fichaTemp, setFichaTemp]=useState(null);
  const[animation,setAnimation]=useState(false);
  useEffect(() => 
  {
    const fichas=[...ArrayFichas(),...ArrayFichas()];
    for(let i=0;i<fichas.length;i++)
    {
      let aux=fichas[i];
      let aux2=Math.floor(Math.random()*(fichas.length-1));
      fichas[i]=fichas[aux2];
      fichas[aux2]=aux;
    }
    setFichasRev(fichas);
  }, [reinicio]);

  function girar(index)
  {
    //verificar que realmente haya un cambio de estado
    const fichas=[...fichasRev];
    fichas[index].girado=true;
    setFichasRev(fichas);
    if(fichaTemp===null)
    {
      setFichaTemp({elemento:fichas[index],i:index});
    }
    else if(fichaTemp.elemento.nombre===fichas[index].nombre)
    {
      setFichaTemp(null);
    }
    else
    {
      setAnimation(true);
      setTimeout(() => 
      {
        fichas[fichaTemp.i].girado=false;
        fichas[index].girado=false;  
        setFichasRev([...fichas]);   
        setFichaTemp(null);
        setAnimation(false);
      }, 1000);
    }  
  }

  function restart()
  {
    const fichas = [...fichasRev];
    for (let i = 0; i < fichas.length; i++) 
    {
        fichas[i].girado=false
    }
    setFichasRev(fichas);
    setTimeout(() => 
    {
      setReinicio(!reinicio);
    }, 500);
  }

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Memorama</h1>
      <div className='content'>
        <Board fichas={fichasRev} girar={girar} animation={animation}></Board>
        <button onClick={()=>restart()}>Reinicio</button>
      </div>
    </div>
  );
}

export default App;
