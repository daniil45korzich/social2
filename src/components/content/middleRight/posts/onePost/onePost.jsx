import React from 'react';
import p from './onePost.module.css';

const OnePost = (props) => {
    let likeCount = "";
    if(props.likeCount) {likeCount = props.likeCount;} else{likeCount = 0;}
    return(
        <div className={p.item}>
            <img src="http://archilab.online/images/1/123.jpg" width="50px"/>
            <div className={p.text}>{props.text}</div>
            <div className={p.like}>{likeCount} like</div>
        </div>
    );

}


export default OnePost;