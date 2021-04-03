import React, {useState} from "react";
import { gql, useQuery } from "@apollo/client";
import Link from 'next/link';

function EShop(){
  const GET_ALL_PRODUCTS = gql`
  query Products{
    products{
        id,
        title,
        price,
        description
    }
  }`
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  const [ errorMessage, setErrorMessage] = useState('');
  if(loading) {
    return( <div>Loading...</div>)
  }
  if(error){
    setErrorMessage(error.message);
    return( <div>{errorMessage}</div>)
  }
  return(
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Id
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
              {data.products.map(product => {
                    return(
                    <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="https://homepages.cae.wisc.edu/~ece533/images/fruits.png?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""/>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm font-medium text-gray-900">
                            {product.id}
                          </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {product.title}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.description}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        ${product.price}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/eshop/${product.id}`}>
                        <a class="text-indigo-600 hover:text-indigo-900">Detail</a>
                      </Link>
                    </td>
                    </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EShop;