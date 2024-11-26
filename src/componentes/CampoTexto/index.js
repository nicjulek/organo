import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    //let valor = 'Nicole'

    const[valor, setValor] = useState('Nicole') /*seria tipo um 'let valor = ""' orém o useState prepara 2 obetos,
    uma para vc ler e outro pra vc escrever (setter). Nisso ele participa assim do ciclo de vida dele.
    Conforme esse valor muda, esse estado muda junto, assim o react sabe que ele precisa renderiza*/ 

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        console.log(valor)
    }


    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto