import Image from 'next/image'
import React from 'react'
import Heading5 from '../Typography/Heading5'

function CategoryCard({ data }) {
    return (
        <div>
            <div className='bg-grayLight rounded-lg p-5 flex items-center justify-center gap-4 flex-col'>
                <Image src={data?.banner || data?.thumbnail || data?.bannerImage} alt={data?.title} height={162} width={162} />
                <Heading5 className='' blackHeading={data?.title} />
            </div>
        </div>
    )
}

export default CategoryCard