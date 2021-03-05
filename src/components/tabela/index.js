import React from 'react'
import "./Tabela.css"

export default function ({ titulo, objeto }) {
   
      const titulos = objeto.titulos
      const linhas = objeto.linhas

    return (
        <div className="table">
            <table border="1px" cellPadding="5px" cellSpacing="2" className="tabela">
        <caption className="tituloTab">{titulo}</caption>
        <thead>
          
          <tr>
          {titulos.map((tit, i) =>(
            <th key={i}>{tit}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          
          {linhas.map((row, i) =>(
            <tr className="td" key={i}>
            {row.map((valor, j) =>(
              <td key={j}>{valor}</td>
            ))}
            </tr>
          ))}
          
        </tbody>
      </table>
        </div>
    )
}
