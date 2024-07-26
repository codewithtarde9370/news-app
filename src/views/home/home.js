import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';

function Home() {
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")

    const loadNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-07-23&to=2024-07-23&sortBy=popularity&apiKey=0d93630a2fe24fb4ac02fd257971e019`);
            setNews(response.data.articles);
            console.log(response.data.articles);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    useEffect(() => {
        loadNews();
    },[]);

    useEffect(() => {
      loadNews();
    },[searchQuery])
    return (
        <>
        <h2 className='heading'>Get the News of World</h2>
            <div className='searchBar'>
                <input 
                value={searchQuery}
                onChange={(e)=>{
                    setSearchQuery(e.target.value)
                }}
                type='text' 
                className='search-input' 
                placeholder='Search news here...' />
{/* 
                <button
                 className='search-btn'
                 onClick={loadNews}>Search</button> */}
            </div>

            <div className='main-container'>
                {news.map((newsItem, index) => {
                    const { author, content, description, publishedAt, title, urlToImage, url } = newsItem;

                    return (
                        <div key={index} className='newsArticle'>

                            {
                            urlToImage
                             &&
                              <img className='news-img' src={urlToImage} alt='newsarticle' />
                              }

                            <h2>{title}</h2>
                            <p>{description}</p>
                            
                            <div className='publish'>

                            <div className='news-author'>
                                <strong>Author:</strong>
                                 <p className='publish-details'>{author ? author : "Unknown"}</p>
                                 </div>
                             
                             <div className='news-publishedAt'>
                                <strong>Published At:</strong> 
                                <p className='publish-details'>{new Date(publishedAt).toLocaleString()}</p>
                                </div>
                            </div>

                            <div><a href={url} target="_blank">Read more</a></div>

                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Home;
