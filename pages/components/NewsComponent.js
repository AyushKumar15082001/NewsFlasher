import React,{useState} from 'react'
import styles from '@/styles/NewsComponent.module.css'
import Image from 'next/image'
import moment from 'moment';

const NewsComponent = (props) => {
    //pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    const onPageChange = (page) => {
      setCurrentPage(page);
    };
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedNews = props.news.slice(startIndex, endIndex);

    return (
        <div>
            <h2 className={styles.contTitle}>Featured News</h2>
            <div className="scroll">
                {props.news.length?<div className={styles.container}>
                    {
                        paginatedNews.map((newsItem, index) => {
                            if (!newsItem.urlToImage) return;
                            return (
                                <div className={styles.card} key={index} title={newsItem.title} >
                                    <a href={newsItem.url} target="_blank">
                                        <Image src={newsItem.urlToImage} alt={newsItem.source.name ? newsItem.source.name : 'Unknown'} width={350} height={200} priority/>
                                        <div className={styles.back}>
                                            <h2>{newsItem.title.slice(0, 60) + '...'}</h2>
                                            <h3>
                                                {newsItem.source.name ? newsItem.source.name : 'Unknown'} - {moment(newsItem.publishedAt).fromNow()}
                                            </h3>
                                        </div>
                                        <div className={styles.desc}>
                                            <p>
                                                {newsItem.description ? newsItem.description.slice(0, 150) + '...' : ''}
                                            </p>
                                            <br />
                                            Click to read more...
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>:<h3 className={styles.container}>Oops!!! No Articles available</h3>}
                <Pagination items={props.news.length} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange}  />
            </div>
        </div>
    )
}
export default NewsComponent

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(items / pageSize);
   
    if (totalPages === 1) return null;
    const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);

     return (
      <div>
        <ul className={styles.pagination}>
            {currentPage > 1 && <li className={styles.changeBtn} onClick={() => onPageChange(currentPage - 1)}>Previous</li>}
          {allPages.map((page) => (
            currentPage - 2 <=page && page <= currentPage + 2 && 
                <li key={page} className={`${styles.pagenumber} ${page === currentPage ? styles.activePageNumber : ''} `} onClick={() => onPageChange(page)}>
              {page}
            </li>
          ))}
          {currentPage < totalPages && <li className={styles.changeBtn} onClick={() => onPageChange(currentPage + 1)}>Next</li>}
        </ul>
      </div>
    );
   };
