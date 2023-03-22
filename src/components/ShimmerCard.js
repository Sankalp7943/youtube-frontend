import React from 'react'

const ShimmerCard = () => {
  const shimmerCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20]
  return (
    <div className='flex flex-wrap'>
      {shimmerCards.map(s=><div key={s} className='grid-cols-1 m-2 p-2 w-80 h-80 rounded-lg bg-gray-200 shadow-lg'></div>)}
    </div>

  )
}

export default ShimmerCard