import React, { useEffect, useState } from 'react'
import Tabela from "../../components/tabela"

import { GetPosts } from '../../common/Service';

const Posts = () => {
    const [Posts , setposts] = useState(null);

    // componentDidMount
    useEffect(() => {
        getPosts();
    }, []);

    const GetPosts = async () => {
        const postsResponse = await GetPosts();
        
        const postsNormalized = {
            titulos: [
                'UserID',
                'ID',
                'Title',
                'Body'
            ],
            linhas: postsResponse.map((item) => {
                return [item.userid, item.id, item.title, item.body];
            }),
        };

        setPosts(postsNormalized);
    }

    return (
        <>
        <div>Posts</div>
        {posts === null ? 'Estamos carregando os dados' : <Tabela objeto={posts} />}
        </>
    )
}

export default Posts;
