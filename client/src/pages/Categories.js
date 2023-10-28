import React,{useState, useEffect} from 'react'
import Layout from './../components/Layout/Layout';
import useCategory from '../hooks/useCategory';
import { Link } from 'react-router-dom';

const Categories = () => {
    const catetories = useCategory()
  return (
   <Layout title={'All categories'}>
    <div className='container'>
        <div className='row'>
            {catetories.map((c) =>(
            <div className="col-md-6 mt-3 mb-5 gx-3 gy-3"key={c._id} >
                <button><Link to={`/category/${c.slug}`} className='btn btn-primary'>{c.name}</Link></button>
            </div>
            ))}
        </div>
    </div>
   </Layout>
  )
}

export default Categories