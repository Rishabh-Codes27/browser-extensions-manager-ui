import React from 'react'
import ExtensionCard from './ExtensionCard'

const Extensions = () => {
  return (
    <div className=' w-full flex flex-col justify-center mb-24'>
        {/* <div className=''>
        <p className='text-3xl font-bold'>Extensions List</p>
        <div>

        </div>
        </div> */}
        <ExtensionCard />
    </div>
  )
}

export default Extensions