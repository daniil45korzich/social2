import React from 'react';
import OnePost from './onePost/onePost';
import p from './posts.module.css';

const Posts = () => {
    return(
        <div>
            <div className={p.contentSount}>
                <div>Оставить Сообщение</div>
                <textarea>Сообщение</textarea>
            </div>
            <div className={p.posts}>
                <OnePost likeCount="28" text="Это я выучил реакт"/>
                <OnePost likeCount="88" text="Хороший комментарий"/>
                <OnePost likeCount="16" text="Первый текст оставленный"/>
            </div>
        </div>
    );

}


export default Posts;