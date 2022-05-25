import React from 'react';
import { useRouter } from 'next/router';
import SingleProductDetails from '../../components/SingleProductDetails';

export default function singleProduct() {
    const router = useRouter();
    const [date, state, city, mandiName, product, singleProduct, singleProduct_id] = router.query.singleProduct || [];
  return (
    <div>This is single product for dynamic routing of 
        <h4>{date}</h4>
        <h4>{state}</h4>
        <h4>{city}</h4>
        <h4>{mandiName}</h4>
        <h4>{product}</h4>
        <h4>{singleProduct}</h4>
        <h4>{singleProduct_id}</h4>
       
        <SingleProductDetails/>
    </div>
  )
}
