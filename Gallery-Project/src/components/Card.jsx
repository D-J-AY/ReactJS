import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url}>
                <div className='h-35 w-44 rounded-xl bg-white overflow-hidden'>
                    <img className='h-full object-cover w-full' src={props.elem.download_url} alt="" />
                </div>
                <h2 className='mt-2'>{props.elem.author}</h2>
            </a>
        </div>
    )
}

export default Card
