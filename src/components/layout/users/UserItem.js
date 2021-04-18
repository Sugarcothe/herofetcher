import React from 'react'


const UserItem = ({user: { name, work, appearance, powerstats, images}}) => {
    

    return (
      <div className='card text-center'>
        <img src={images.url} style={{ width: '60px'}} alt='Hero'/>
        <h3>{name}</h3>
        <p>Gender: {appearance.gender}</p>
        <p>Occupation: {work.occupation}</p>
        <p>Power: {powerstats.power}</p>
        <p>Speed: {powerstats.speed}</p>
        <p>Intelligence: {powerstats.intelligence}</p>

        <a  href='' className="a btn btn-dark btn-sm my-1">More..</a>
    
      </div>
    )
  }


export default UserItem
