import React from 'react';
import { Link } from 'react-router-dom';
import MenuHeader from '../../../component/layouts/menu_header';
import anh1 from "../../../assets/users/1.1.jpg";


import Counter from '../../../component/counter';
import formatPrice from "../../../utils/formater";
import { RiDeleteBin5Line } from "react-icons/ri";

const HistoryCart = () => {
    return (
        <div>
            <MenuHeader />
            <div className="mt-10">
                <p className="text-2xl font-serif">Lịch sử đơn hàng của bạn</p>
                <div className='border-t-[1px] border-dashed mx-auto'></div>
            </div>
            {/* <div className="flex mt-5"> */}
            <div className="mx-1 border-[1px] rounded-md border-[#edeceb] mt-5">
                <div className="flex border-b-[1px] justify-between border-[#edeceb] text-lg font-medium py-4 text-[#555555]">
                    <p className='mx-5 w-[60%]'>Các đơn đã mua</p>
                    <p className=''>Số lượng</p>
                    <p className='w-[16%]'>Tổng thanh toán</p>
                </div>
                <div className="h-fit mx-7 mt-5 py-3 flex justify-between border-b-[1px] border-b-[#edeceb]">
                    <img src={anh1} alt="" className='w-[130px] h-[150px] ml-5 -mr-10' />
                    <div className="w-1/2">
                        <Link to="/product/:id" className='font-thin mt-1 text-[17px] font-serif h-[50px] overflow-hidden'>Tên sản phẩm fdd gsc zaw fbeghbwns czbzeufhjwbsxfguwsfv efguvfuhfv du vgydus hivdbjyubf ygujgjyuk  bukibgvuyg gyuh  yugh</Link>
                        <p className='text-[#777] text-[13px] my-2'>Nơi nhận hàng: Như Thanh - Thanh Hóa</p>
                        <p> Màu sắc | Kích thước </p>
                    </div>
                    <p>1</p>
                    {/* <Counter /> */}
                    <div className='w-[18%] text-center'>
                        {formatPrice(100000)}
                        <p className='text-[#888] line-through ml-2 text-xs mt-1'>{formatPrice(200000)}</p>
                    </div>
                </div>
            </div>

            {/* <div className="w-1/3 mx-1 border-[1px] rounded-md border-[#edeceb] h-fit">
                    <div className="border-b-[1px] justify-between border-[#edeceb] text-lg font-medium py-4">
                        <p className='mx-5 text-[#555555]'>Tổng hóa đơn</p>
                    </div>
                    <div className="flex justify-between mx-10 py-5">
                        <p className='text-[#444444] font-medium'>Thành tiền</p>
                        <p className='text-[#444444] '>{formatPrice(200000)}</p>
                    </div>
                    <div className="bg-[#6b7c88] w-fit mx-auto px-16 py-2 text-white font-medium mt-5 mb-8"> Thanh toán</div>
                </div>
            </div> */}
        </div>
    )
}

export default HistoryCart;