import React, { useEffect, useState } from 'react'
import Tabela from "../../components/tabela"

import { GetAlbums } from '../../common/Service';

const Albums = () => {
    const [albums, setAlbums] = useState(null);

    // componentDidMount
    useEffect(() => {
        getAlbums();
    }, []);

    const getAlbums = async () => {
        const albumsResponse = await GetAlbums();
        
        const albumsNormalized = {
            titulos: [
                'ID',
                'Title',
                'UserID'
            ],
            linhas: albumsResponse.map((item) => {
                return [item.id, item.title, item.userId];
            }),
            // linhas: albumsResponse.map(item => [item.id, item.title, item.userId]),
            // linhas: albumsResponse.map(({ id, title, userId }) => [id, title, userId])
        };

        setAlbums(albumsNormalized);
    }

    return (
        <>
        {albums === null ? 'Estamos carregando os dados' : <Tabela titulo={'Álbuns'} objeto={albums} />}
        </>
    )
}

export default Albums;
