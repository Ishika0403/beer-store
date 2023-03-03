import React, { Fragment,  useState, useRef, useEffect, useCallback } from 'react'
import Accordion from './Accordion';
import category from '../API/Categories.json'
import products from '../API/Products.json'
import './Accordion.css'
import { Link } from 'react-router-dom';
import LoadingData from './LoadingData/LoadingData';

const AccordionData =()=> {

    const [target, setTarget] = useState("");
    const [query, setQuery] = useState("");

    const [page, setPage] = useState(1);
    const { loading,list  } = LoadingData(page);
    const loader = useRef(null);

    const handleObserver = useCallback((entries) => {
        const targett = entries[0];
        if (targett.isIntersecting) {
          setPage((prev) => prev + 1);
        }
        // console.log(entries ,"target")
    }, []);    

    console.log(loading,"loading")

    useEffect(() => {
        const option = {
          root: null,
          rootMargin: "100px",
          threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
        // console.log(observer,"obs")
    }, [handleObserver]);

    const handleClick =(i)=>{
        console.log(i,"i---id-");
        setTarget(i)
    }
    
    return (
        <Fragment>
        <div className='bgc_clr'>
            <div className='inner_container'>
                <div className='header_section'>
                    <div className='tbl_cell'>
                        <img src='/img/logo.png' alt=''/>
                    </div>

                    <div className='tbl_cell'>
                    <input type='text'
                        onChange={e => setQuery(e.target.value)}
                    />
                    </div>
                </div>
            </div>
        </div>

            <div className='content_bgc'>
                <div className='inner_container'>
                    <div className='content_section'>
                        <div className='left_col_content'>
                        {category.map(({ id, title,data }) => (
                            <Accordion key={id} id={id} title={title} content={data} handleClick={handleClick}/>
                        ))}
                        </div>

                        <div className='right_col_content'>
                            <div className='dly_tbl'>
                            {products.filter((itm=>
                                itm.categories.includes(target) && itm.name.toLowerCase().includes(query)
                                )).map(k=>
                                <div  key={k.id} className='same_col_contain'>
                                    <Link to={`/singleprd/${k.id}`}>
                                        <img src={k.images}/>
                                        <h2>{k.name}</h2>
                                    </Link>   
                                </div>
                            )}
                            {/* {list} */}

                            {/* {list.map((v)=>
                            <div>
                            {v}
                            </div>
                            )} */}
                            {loading && <h2 style={{ background : 'red' , color: 'white' }}>Loading...</h2>}
                            <div ref={loader} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AccordionData
