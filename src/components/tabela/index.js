import React, { useState } from 'react'
import "./Tabela.css"

const LINHAS_POR_PAGINA = 30;

const Tabela = ({ titulo, objeto }) => {
	const [filtro, setFiltro] = useState('');
	const [paginaAtual, setPaginaAtual] = useState(0);

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

	const paginas = Math.ceil(linhas.length / 30);
	if(!filtro.length) {
		const inicio = LINHAS_POR_PAGINA * paginaAtual;
		linhas = linhas.slice(inicio, inicio + LINHAS_POR_PAGINA);
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

		{!filtro.length &&
			<div className="paginacao">
				{[ ...Array(paginas) ].map((item, i) => (
					<div className="paginacao-item" style={{ background: i === paginaAtual ? 'grey' : '' }} key={i} onClick={() => setPaginaAtual(i)}>
						{i + 1}
					</div>
				))}
			</div>
		}

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