import React from 'react';
import { Link } from 'react-router-dom';
import MenuHeader from '../../../component/layouts/menu_header';
import anh1 from "../../../assets/users/1.1.jpg";


import Counter from '../../../component/counter';
import formatPrice from "../../../utils/formater";
import { RiDeleteBin5Line } from "react-icons/ri";


const Cart = () => {
    return (
        localStorage.getItem('refresh_token') === null ? (
            <div>
                <MenuHeader />
                <div className="flex justify-center mt-10">
                    <p className="text-2xl font-serif">Giỏ hàng của bạn</p>
                </div>
                <div className="flex justify-center mt-10">
                    <p className="text-xl font-serif">Vui lòng đăng nhập để xem giỏ hàng của bạn</p>
                </div>
            </div>
        ) : (
            <div>
                <MenuHeader />
                <div className="mt-10">
                    <p className="text-2xl font-serif">Giỏ hàng của bạn</p>
                    <div className='border-t-[1px] border-dashed mx-auto'></div>
                </div>
                <div className="flex mt-5">
                    <div className="mx-1 border-[1px] rounded-md border-[#edeceb] w-2/3">
                        <div className="flex border-b-[1px] justify-between border-[#edeceb] text-lg font-medium py-4 text-[#555555]">
                            <p className='mx-5 w-[60%]'>Sản phẩm có trong giỏ</p>
                            <p className=''>Số lượng</p>
                            <p className='w-[12%]'>Giá</p>
                        </div>
                        <div className="h-fit mx-7 mt-5 py-3 flex justify-between border-b-[1px] border-b-[#edeceb]">
                            <img src={anh1} alt="" className='w-[100px] h-[120px]' />
                            <div className="w-1/2 mx-4">
                                <Link to="/product/:id" className='font-thin mt-1 text-[17px] font-serif h-[50px] overflow-hidden'>Tên sản phẩm fdd gsc zaw fbeghbwns czbzeufhjwbsxfguwsfv efguvfuhfv du vgydus hivdbjyubf ygujgjyuk  bukibgvuyg gyuh  yugh</Link>
                                <p className='text-[#777] text-[13px] my-2'>Sản phẩm sẽ đến nơi từ 4 - 5 ngày</p>
                                <p> Màu sắc | Kích thước </p>
                            </div>
                            <Counter />
                            <div className='w-[12%] mt-2.5'>
                                {formatPrice(100000)}
                                <p className='text-[#888] line-through ml-2 text-xs mt-1'>{formatPrice(200000)}</p>
                                <RiDeleteBin5Line className='text-red-500 mt-10 mx-auto' />
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3 mx-1 border-[1px] rounded-md border-[#edeceb] h-fit">
                        <div className="border-b-[1px] justify-between border-[#edeceb] text-lg font-medium py-4">
                            <p className='mx-5 text-[#555555]'>Tổng hóa đơn</p>
                        </div>
                        <div className="flex justify-between mx-10 py-5">
                            <p className='text-[#444444] font-medium'>Thành tiền</p>
                            <p className='text-[#444444] '>{formatPrice(200000)}</p>
                        </div>
                        <div className="bg-[#6b7c88] hover:bg-[#788791] w-fit mx-auto px-16 py-2 text-white font-medium mt-5 mb-8"> <Link to="/checkout">Thanh toán</Link></div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Cart;
