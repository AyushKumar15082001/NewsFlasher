import React, { useEffect, useState } from 'react'
import styles from '@/styles/NavBar.module.css'
const NavBar = (props) => {
    const [input, setInput] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [show, setShow] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        props.setQuery(input);
    }
    //greeting
    const [greet, setGreet] = useState("Good Morning");
    useEffect(() => {
        const date = new Date();
        const hours = date.getHours();
        if (hours < 12) {
            setGreet("Good Morning");
        } else if (hours < 18) {
            setGreet("Good Afternoon");
        } else {
            setGreet("Good Evening");
        }
    }, [])

    //debouncing
    const handleChange = (e) => {
        if(!input) setShow(false);
        setInput(e.target.value)
        debounced(2000, e.target.value);
    }
    const [timeout, setTimeOut] = useState(null);
    const debounced = (wait, input) => {
        if (timeout) {
            clearInterval(timeout)
            setTimeOut(null);
        }
        setTimeOut(setTimeout(() => {
            console.log('debounced');
            search(input);
        }, wait))
    }
    //search
    function search(input) {
        let filtered = props.data && props.data.filter(item => item.toLowerCase().includes(input.toLowerCase()));
        setFiltered(filtered);
        setShow(true);
    }
    const searchhandler = (item) => {
        setInput(item);
        setShow(false);
        props.setQuery(item);
        console.log('serch handler');
    }

    return (
        <>
            <div className={styles.ham} onClick={props.changeHam}><span className="material-symbols-outlined">{props.ham?'menu':'close'}</span></div>
            <div className={styles.conatiner}>
                <h2>{greet}...</h2>
                <form action="" role='search' onSubmit={handleSearch}>
                    <div className={styles.search}>
                        <input type="search" placeholder='Type here to search...' value={input} onChange={handleChange} />
                        <button id='search' type='submit'><span className="material-symbols-outlined">search</span></button>
                    </div>
                    <div style={{position:'absolute',zIndex:'2'}}>
                        {
                            show && filtered.length > 0 && input.length > 2 && filtered.map((item, index) => {
                                return (
                                    <div key={index} className={styles.suggestions} onClick={()=>searchhandler(item)}>
                                        <span>{item.length > 55 ? item.slice(0,55) +  '...':item.slice(0,55)}</span>
                                    </div>
                                )
                            })
                        }
                        {
                            show && filtered.length > 0 && input.length <= 2 && input.length > 0 && 
                            <div className={styles.suggestions}>
                                <span>Enter atleast 3 characters</span>
                            </div>
                        }
                        {
                            show && filtered.length === 0 && input.length > 0 && 
                            <div className={styles.suggestions}>
                                <span>No results found</span>
                            </div>
                        }
                    </div>
                </form>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            </div>
        </>
    )
}

export default NavBar