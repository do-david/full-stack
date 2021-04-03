import React, {useState} from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from 'next/router';

export default function Detail(){
    const router = useRouter();
    const GET_PRODUCT = gql`
        query Product($id: ID!){
            product(id:$id){
            id,
            title,
            price,
            description
        }
        }`;
    const {loading, error, data } = useQuery(GET_PRODUCT, {variables: router.query});
    const [ errorMessage, setErrorMessage] = useState('');
    if(loading) {
        return( <div>Loading...</div>)
    }
    if(error){
        setErrorMessage(error.message);
        return( <div>{errorMessage}</div>)
    }
    return(
        <>
        <p>detail page</p>
            <p>{data.product.id}</p>
            <p>{data.product.title}</p>
            <p>{data.product.price}</p>
            <p>{data.product.description}</p>
        </>
    )
};