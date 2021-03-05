import React, { useEffect, useState } from 'react'
import Tabela from "../../components/tabela"

import { GetPosts } from '../../common/Service';

const Posts = () => {
    const [posts , setPosts] = useState(null);

    // componentDidMount
    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const postsResponse = await GetPosts();
        
        const postsNormalized = {
            titulos: [
                'UserID',
                'ID',
                'Title',
                'Body'
            ],
            linhas: postsResponse.map((item) => {
                return [item.userId, item.id, item.title, item.body];
            }),
        };

        setPosts(postsNormalized);
    }

    return (
        <>
        {posts === null ? 'Estamos carregando os dados' : <Tabela titulo={'Postagens'} objeto={posts} />}
        </>
    )
}

export default Posts;
