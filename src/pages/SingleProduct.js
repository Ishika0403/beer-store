import React from 'react'
import { useParams,Link } from 'react-router-dom'
import products from '../API/Products.json';
import './SingleProduct.css'

const SingleProduct = ()=> {
  const param = useParams()
  // const id = JSON.stringify(param)
  console.log(param,"idd")

  return (
    <div className='inner_container'>
      <div className='singleprd_section'>
        <div className='btn'>
          <Link to='/allprd'><button>BACK</button></Link>
        </div>

        {products.filter((itm=>itm.id === parseInt(param.id))).map(k=>
          <div key={k.id} className='dly_tbl'>
            <div className='tbl_cell'>
              <img alt='' src={k.images}/>
            </div>
            <div className='tbl_cell'>
              <h2>{k.name}</h2>
              <h4>Category :</h4><span>{k.categoryName}</span>
              <p>{k.desc}</p>
            </div>
          </div>
        )}

        <div className='btn'>
          <Link to='/login'><button>Click</button></Link>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
