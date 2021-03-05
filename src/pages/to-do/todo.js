import React, { useEffect, useState } from 'react'
import Tabela from "../../components/tabela"

import { GetToDo } from '../../common/Service';

const ToDo = () => {
    const [todo, setToDo] = useState(null);

    // componentDidMount
    useEffect(() => {
        getToDo();
    }, []);

    const getToDo = async () => {
        const albumsResponse = await GetToDo();
        
        const todoNormalized = {
            titulos: [
                'UserID',
                'ID',
                'Title',
                'Completed'
                
            ],
            linhas: todoResponse.map((item) => {
                return [item.userId, item.id, item.title, item.completed];
            }),
        };

        setToDo(todoNormalized);
    }

    return (
        <>
        <div>to-do</div>
        {todo === null ? 'Estamos carregando os dados' : <Tabela objeto={todo} />}
        </>
    )
}

export default ToDo;
