import React from "react";
import './news-box.scss';

const NewsBox = () => {
    return (
        <div className="news__box">
            <div className="container">
                <div className="NewsBox">
                <div className="newsBox">
                    <div className="newsBox__img"></div>
                    <div className="newsBox__icon">
                        <img src={require('../../public/img/date.png')}/>
                        <span>Monday 05, September 2021</span>
                        <img src={require('../../public/img/user.png')}/>
                        <span>By Author</span>
                        <img src={require('../../public/img/view.png')}/>
                        <span>68</span>
                        <img src={require('../../public/img/like.png')}/>
                        <span>86</span>
                    </div>
                    <div className="newsBox__title">A passion for putting patients first</div>
                    <div className="newsBox__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....</div>
                    <button className="btn__arrow"><a href="#">Read More
                        <img src={require('../../public/img/arrow.png')}/>
                    </a></button>
                </div>     
                <div className="newsBox">
                    <div className="newsBox__img"></div>
                    <div className="newsBox__icon">
                        <img src={require('../../public/img/date.png')}/>
                        <span>Monday 05, September 2021</span>
                        <img src={require('../../public/img/user.png')}/>
                        <span>By Author</span>
                        <img src={require('../../public/img/view.png')}/>
                        <span>68</span>
                        <img src={require('../../public/img/like.png')}/>
                        <span>86</span>
                    </div>
                    <div className="newsBox__title">A passion for putting patients first</div>
                    <div className="newsBox__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....</div>
                    <button className="btn__arrow"><a href="#">Read More
                        <img src={require('../../public/img/arrow.png')}/>
                    </a></button>
                </div>     
                <div className="newsBox">
                    <div className="newsBox__img"></div>
                    <div className="newsBox__icon">
                        <img src={require('../../public/img/date.png')}/>
                        <span>Monday 05, September 2021</span>
                        <img src={require('../../public/img/user.png')}/>
                        <span>By Author</span>
                        <img src={require('../../public/img/view.png')}/>
                        <span>68</span>
                        <img src={require('../../public/img/like.png')}/>
                        <span>86</span>
                    </div>
                    <div className="newsBox__title">A passion for putting patients first</div>
                    <div className="newsBox__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....</div>
                    <button className="btn__arrow"><a href="#">Read More
                        <img src={require('../../public/img/arrow.png')}/>
                    </a></button>
                </div>    
                </div>     
                <div className="news__search">
                    <div className="form">
                        <input type="search" placeholder="Search..."/>
                        <button><img src={require('../../public/img/search.png')}/></button>
                    </div>   
                    <div className="news__search--content">
                        <div className="news__search--title">
                            Recent Posts    
                        </div>
                        <div className="news__search--box">
                            <img src={require('../../public/img/news-search.png')}/> 
                            <div className="news__search--date">
                                <span>Monday 05, September 2021</span>
                                <div className="news__search--text">
                                This Article’s Title goes Here, but not too long.
                                </div>   
                            </div>   
                        </div>    
                        <div className="news__search--box">
                            <img src={require('../../public/img/news-search.png')}/> 
                            <div className="news__search--date">
                                <span>Monday 05, September 2021</span>
                                <div className="news__search--text">
                                This Article’s Title goes Here, but not too long.
                                </div>   
                            </div>   
                        </div>    
                        <div className="news__search--box">
                            <img src={require('../../public/img/news-search.png')}/> 
                            <div className="news__search--date">
                                <span>Monday 05, September 2021</span>
                                <div className="news__search--text">
                                This Article’s Title goes Here, but not too long.
                                </div>   
                            </div>   
                        </div>    
                        <div className="news__search--box">
                            <img src={require('../../public/img/news-search.png')}/> 
                            <div className="news__search--date">
                                <span>Monday 05, September 2021</span>
                                <div className="news__search--text">
                                This Article’s Title goes Here, but not too long.
                                </div>   
                            </div>   
                        </div>    
                        <div className="news__search--box">
                            <img src={require('../../public/img/news-search.png')}/> 
                            <div className="news__search--date">
                                <span>Monday 05, September 2021</span>
                                <div className="news__search--text">
                                This Article’s Title goes Here, but not too long.
                                </div>   
                            </div>   
                        </div>    
                        <div className="news__search--box">
                            <img src={require('../../public/img/news-search.png')}/> 
                            <div className="news__search--date">
                                <span>Monday 05, September 2021</span>
                                <div className="news__search--text">
                                This Article’s Title goes Here, but not too long.
                                </div>   
                            </div>   
                        </div>    
                    </div>
                </div>  
            </div>    
        </div>
    )
}

export default NewsBox