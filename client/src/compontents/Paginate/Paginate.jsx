import React from 'react';

import './Paginate.scss';

const Paginate = ({
  numberDoctors, 
  changePaginate, 
  doctorFilter
}) => {
  const numberOfPages = Math.ceil(numberDoctors / doctorFilter.perPage);
  const arrayOfPages = [];
  const handelPrevPaginate = _ => {
    const page = doctorFilter.page - 1 <= 0 ? 1 : doctorFilter.page - 1
    changePaginate(page)
  }
  const handelNextPaginate = _ => {
    const page = doctorFilter.page + 1 >= numberOfPages ? numberOfPages : doctorFilter.page + 1
    changePaginate(page)
  }
  for (let i = 1; i<=numberOfPages; i++){
    arrayOfPages.push(i)
  }
  console.log(doctorFilter)
  return (
    <ul className='paginate-nav'>
      <li onClick={handelPrevPaginate}>
        prev
      </li>
      {
        arrayOfPages.map(page =>(
          <li className={doctorFilter.page === page ? 'active' : null}>{page}</li>
        ) )
      }
      
      <li onClick={handelNextPaginate}>
        next
      </li>
    </ul>
  )
}

export default Paginate