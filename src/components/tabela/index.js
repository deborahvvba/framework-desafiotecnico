import React, { useState } from 'react'
import "./Tabela.css"

const Tabela = ({ titulo, objeto }) => {
	const [filtro, setFiltro] = useState('');

	let titulos = objeto.titulos;
	let linhas = objeto.linhas;

	if(filtro.length > 0) {
		const linhasFiltradas = [];

		linhas.forEach(linha => {
			let linhaContemFiltro = false;

			linha.forEach(coluna => {
				if(String(coluna).indexOf(filtro) >= 0) {
					linhaContemFiltro = true;
				}
			});

			if(linhaContemFiltro)
				linhasFiltradas.push(linha);
		});

		linhas = linhasFiltradas;
	}

    return (
		<>
		<div className="filtro">
			<span>Pesquise aqui</span>
			<input
				value={filtro}
				onChange={ev => setFiltro(ev.target.value)}
				placeholder="Filtro"
			/>
		</div>

        <div className="table">
			<table border="1px" cellPadding="5px" cellSpacing="2" className="tabela">
			<caption className="tituloTab">{titulo}</caption>
			
			<thead>
				<tr>
					{titulos.map((tit, i) => (
						<th key={i}>{tit}</th>
					))}
				</tr>
			</thead>

			<tbody>
				{linhas.map((row, i) =>(
					<tr className="td" key={i}>
						{row.map((valor, j) => (
							<td key={j}>{valor}</td>
						))}
					</tr>
				))}
			</tbody>
			</table>
        </div>
		</>
    )
}

export default Tabela;