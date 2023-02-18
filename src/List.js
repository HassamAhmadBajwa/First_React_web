import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className='main' key={id}>
            <article className='mt-3'>
                <a href={image}><img src={image} /></a>
              <div>
                <p className='m-0 name '>{name}</p>
                <p className='m-0 age '>{age} years</p>
              </div> 
            </article>
          </div>
        )
      })}
    </div>
  )
}

export default List