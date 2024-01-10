import React from 'react'

type ItemCurrentDetailBottomProps = {
    title: string
    image: string
    lblText?: number
    lblUnit: string
}

const ItemCurrentDetailBottom = ({title, image, lblText, lblUnit}: ItemCurrentDetailBottomProps) => {
  return (
    <div className="item">
        <div className="title">{title}</div>
        <div className="content">
            <img src={image} alt="" className='image'/>
            <div className="label">
                <span className="text">{lblText}</span>
                <span className="unit">{lblUnit}</span>
            </div>
        </div>
    </div>
  )
}

export default ItemCurrentDetailBottom