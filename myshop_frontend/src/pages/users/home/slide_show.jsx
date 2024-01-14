import React from 'react';
import { Carousel } from 'antd';
import bia1 from '../../../assets/users/bia1.jpg'
import bia2 from '../../../assets/users/bia2.jpg'
import bia3 from '../../../assets/users/bia3.jpg'
import bia4 from '../../../assets/users/bia4.jpg'
 
function SlideShow() {
    return (
        <Carousel autoplay>
            <div className='mt-3'>
                <img src={bia3} alt="" className='m-auto w-10/12 h-[511px]' />
            </div>
            <div className='mt-3'>
                <img src={bia2} alt="" className='m-auto w-10/12 h-[511px]' />
            </div>
            <div className='mt-3'>
                <img src={bia1} alt="" className='m-auto w-10/12 h-[511px]' />
            </div>
            <div className='mt-3'>
                <img src={bia4} alt="" className='m-auto w-10/12 h-[511px]' />
            </div>
        </Carousel>
    );
}
export default SlideShow;