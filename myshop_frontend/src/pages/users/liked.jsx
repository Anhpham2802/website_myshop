import React from 'react';
import { Link } from 'react-router-dom';
import MenuHeader from '../../component/layouts/menu_header';
import anh1 from "../../assets/users/1.1.jpg";


import Counter from '../../component/counter';
import formatPrice from "../../utils/formater";
import { RiDeleteBin5Line } from "react-icons/ri";


const Liked = () => {
    return (
        <div>
            <MenuHeader />
            <div className='w-[95%] mx-auto my-10 border-[2px] border-yellow-400'>
                {/* <div className='border-[1px] border-slate-300'></div> */}
                <div className="flex justify-between text-lg font-medium border-b-[2px] border-yellow-400 px-10 py-4">
                    <h1 className='w-1/2'>Sản phẩm</h1>
                    <h1>Đơn giá</h1>
                    <h1>Số lượng</h1>
                    <h1>Số tiền</h1>
                    <h1 className='w-[8%]'>Thao tác</h1>
                </div>
                <div className="flex justify-between bg-[#f8f8f8] px-10 py-4 mt-1 border-b-[2px] border-yellow-400">
                    <div className='w-1/2 flex'>
                        <div className="w-1/4">
                            <img src={anh1} alt="" className=' w-[120px] h-[120px] mr-10' />
                        </div>
                        <div className=' w-[75%] '>
                            <h1 className='h-[50px] overflow-hidden font-serif text-yellow-600'>TTeen sản phẩm
                                jdhjksdhjsijdisi djjksw ijdksi wjdejks ijd kijei
                                kwj ejedijejew iefjedjdjdejfj jcbdhjkdfd njkav aiv
                                f dfheu hjerfahyf dr hergr h gebklb fbue uefgb begia  rue ureyg uerah h g bvsry eug fhab bvgfyrgs
                            </h1>
                            <Link to="/product/:id">Xem chi tiết</Link>
                        </div>
                    </div>
                    <h1>{formatPrice(100000)}</h1>
                    <h1 className='-mt-3'><Counter /></h1>
                    <h1>{formatPrice(100000)}</h1>
                    <div className='w-[13%] flex -mr-5 -ml-9 -mt-1.5'>
                        <h1 className='bg-yellow-500 h-fit py-1.5 px-1.5 text-white font-medium hover:text-yellow-700'>Thêm giỏ hàng</h1>
                        <RiDeleteBin5Line className=' text-red-500 ml-1.5 mt-2' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Liked;