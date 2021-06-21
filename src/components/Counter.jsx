import React,{useState} from 'react'
import {InputGroup, Button} from 'react-bootstrap'

export const Counter = ({stock, onAdd}) => {
    const [counter,setCounter] = useState(1)
    const sumar= ()=>{
        if(counter<stock){
            setCounter(counter+1)
        }
    }
    const restar = () =>{
        if(counter > 1){
            setCounter(counter-1)
        }
    }
    const manualChange = (e)=>{
        let value = e.target.value
        if(value >stock){
            setCounter(stock)

        }else{
            setCounter(value)
        }
        
    }
   
    return (
        <div>
            
            {stock>0 ?
            <>
            <button onClick={restar} >-</button>
            <input type="number" value={counter} onChange={manualChange}/>
            <button onClick={(sumar)}>+</button>
            <Button onClick={onAdd} variant="primary">Comprar</Button>
            </>
            : 
            <p>No hay más disponibilidad</p>
                }
        </div>
    )
}
