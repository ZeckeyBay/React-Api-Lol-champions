import React from 'react'

const SingleChampion = ({champion}) => {
  return (
    <div className='single-champ'>
      <div className='champ-info'>
        <h2 className='champ-name'>
          {champion.name}
        </h2>
        <div className='champ-container'>
          <p className='champ-title'>
            Title : {champion.title}
          </p>
          <p className='champ-tags'>
          Champion Type : {champion.tags[0]}
          </p>
          <p>
            Party Type : {champion.partype}
          </p>
        </div>       
      </div>  
    </div>
  )
}

export default SingleChampion