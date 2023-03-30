import Fichas from "./Fichas";
import '../css/Board.css'

function Board({fichas, girar, animation})
{
    return(
        <div className="board">
            {fichas.map((ficha,index)=><Fichas key={index} index={index} girar={girar} ficha={ficha} animation={animation}></Fichas>)}
        </div>
    );
}

export default Board;