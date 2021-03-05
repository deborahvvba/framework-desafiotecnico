import React from 'react'
import "./Tabela.css"

export default function ({objeto}) {
   
      const titulos = objeto.titulos
      const linhas = objeto.linhas

    return (
        <div className="table">
            <table border="1px" cellpadding="5px" cellspacing="2" className="tabela">
        <caption className="tituloTab">Álbuns</caption>
        <thead>
          
          <tr>
          {titulos.map(tit =>(
            <th>{tit}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          
          {linhas.map(row =>(
            <tr className="td">
            {row.map(valor =>(
              <td>{valor}</td>
            ))}
            </tr>
          ))}
          
        </tbody>
      </table>
        </div>
    )
}
