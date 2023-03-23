import React from 'react'
import styles from '../../styles/TrendingNews.module.css'
import Image from 'next/image'

const TrendingNews = (props) => {
    const getPublish = (date) => {
        const dateObj = new Date(date);
        const month = dateObj.toLocaleString('en-US', { month: 'long' });
        const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
        const year = dateObj.getFullYear();
        return `${day} ${month} ${year}`;
    }
  return (
    <div className={styles.container}>
        <h2>TrendingNews</h2>
        <div className='scroll'>
        {
        props.news.map((newsItem,index)=>{
            return (<div className={styles.card} title={newsItem.title} key={index}>
                <a href={newsItem.url} target="_blank">
                <span>
                    <h4>{newsItem.title.slice(0, 75) + '...'}</h4>
                    <h6>
                        {newsItem.source.name ? newsItem.source.name : 'Unknown'} - {getPublish(newsItem.publishedAt)}
                    </h6>
                </span>
                {newsItem.urlToImage && <Image src={newsItem.urlToImage} alt ={newsItem.source.name} width={100} height={60} priority/>}
            </a>
            </div>)
        })
        }
        </div>
    </div>
  )
}
export default TrendingNews