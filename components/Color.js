import React from "react"
// import Link from 'next/link'

const Color = ({hex = '#000000'}) => (
    <div className='color'>
        <div className='circle' />
        <div className='hex'>{hex}</div>
        <style jsx>{`
            .color {
                width: 100px;
                overflow: hidden;
            }
            .circle {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                background-color: ${hex};
            }
            .hex {
                margin-top: 10px;
                font-size: 14px;
                font-family: helvetica, arial, sans-serif;
                color: #333333;
                text-align: center;
            }
        `}</style>
    </div>
);

export default Color;