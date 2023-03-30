import acelga from '../img/acelga.jpg'
import berenjena from '../img/berenjena.jpg'
import calabaza from'../img/calabaza.jpg'
import col from'../img/col.webp'
import lechuga from'../img/lechuga.jpg'
import limon from'../img/limon.webp'
import papa from'../img/papa.webp'
import cebolla from'../img/cebolla.jpg'
import pepino from'../img/pepino.jpg'
import zanahoria from'../img/zana.jpg'
import Ficha from '../Clases/ObjFichas'

function ArrayFichas()
{
    let fichas=[]
    
    fichas.push(new Ficha('acelga','フダンソウ',false,acelga));
    fichas.push(new Ficha('berenjena','ナス',false,berenjena));
    fichas.push(new Ficha('calabaza','パンプキン',false,calabaza));
    fichas.push(new Ficha('col','キャベツ',false,col));
    fichas.push(new Ficha('lechuga','レタス',false,lechuga));
    fichas.push(new Ficha('limón','レモン',false,limon));
    fichas.push(new Ficha('papa','ジャガイモ',false,papa));
    fichas.push(new Ficha('cebolla','タマネギ',false,cebolla));
    fichas.push(new Ficha('pepino','キュウリ',false,pepino));
    fichas.push(new Ficha('zanahoria','にんじん',false,zanahoria));
    
    return fichas;
}

export default ArrayFichas;