import '../css/Fichas.css'
import { useState } from 'react';

const Fichas= ({ficha,index,girar, animation}) =>
{
    const [onMouse, setonMouse] = useState(false);
    function cambioMouse(cambio)
    {
        setonMouse(cambio);
    }
    return(
        <div className='content_ficha' onClick={()=>ficha.girado||animation===true ? null:girar(index)}>
            <div className={`ficha_prin ${ficha.girado && 'girar'}`}>
                <div className="frente"></div>
                <div className="reverso" onMouseOver={()=>cambioMouse(true)} onMouseLeave={()=>cambioMouse(false)}>
                    {
                        onMouse ?
                        <div>
                            <p className='nombre'>{ficha.nombreJap}</p>
                        </div>: null
                    }
                    <img src={ficha.img} alt={ficha.nombre}/>
                </div>
            </div>
        </div>
    );
}

export default Fichas;