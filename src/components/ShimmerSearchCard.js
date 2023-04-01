import React from 'react'

const ShimmerSearchCard = () => {
    const shimmerCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20]
    return (
      <div className='flex flex-col m-2 p-5'>
        {shimmerCards.map(s=><div key={s} className='grid-cols-1 m-2 p-2 w-[1200px] h-[200px] rounded-lg bg-gray-200 shadow-lg'></div>)}
      </div>
  
    )
}
  

export default ShimmerSearchCard