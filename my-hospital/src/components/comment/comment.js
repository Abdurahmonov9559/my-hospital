import React from "react";
import './comment.scss';
import Carousel from "react-elastic-carousel";

const Comment = () => {
    return (
        <Carousel itemsToShow={1}>
            <div className="comment">
                <img src={require('../../public/img/comment-icon.png')}/>
                <div className="comment--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.    
                </div>
                <div className="comment--name">John Doe</div>
            </div>
            <div className="comment">
                <img src={require('../../public/img/comment-icon.png')}/>
                <div className="comment--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.    
                </div>
                <div className="comment--name">John Doe</div>
            </div>
            <div className="comment">
                <img src={require('../../public/img/comment-icon.png')}/>
                <div className="comment--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.    
                </div>
                <div className="comment--name">John Doe</div>
            </div>
        </Carousel>
    )
}

export default Comment
