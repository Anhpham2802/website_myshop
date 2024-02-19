import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuHeader from '../../../component/layouts/menu_header';
import anh1 from "../../../assets/users/1.1.jpg";


// import Counter from '../../../component/counter';
import formatPrice from "../../../utils/formater";
import { client } from '../../../api';
// import { RiDeleteBin5Line } from "react-icons/ri";

// const Counter = () => {
//     return (
//         <div className="flex">
//             <button className='border-[1px] border-[#edeceb] w-[30px] h-[30px] rounded-l-md'>-</button>
//             <input type="text" className='w-[30px] h-[30px] text-center border-[1px] border-[#edeceb]' value='1' />
//             <button className='border-[1px] border-[#edeceb] w-[30px] h-[30px] rounded-r-md'>+</button>
//         </div>
//     )
// }

const HistoryCart = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        client.get('/api/history_order')
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        localStorage.getItem('refresh_token') === null ? (
            <div>
                <MenuHeader />
                <div className="text-center mt-10">
                    <p className="text-xl font-sans">Vui lòng đăng nhập để tiếp tục</p>
                    <Link to="/login" className="text-[#6b7c88] hover:text-[#7b8a94]">Đăng nhập</Link>
                </div>
            </div>
        ) : (
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
                    {data.map((item, index) => (
                        <div className='border-b-[4px] border-t-[4px] border-[#cb8035]' key={index}>
                            {item.orderItems.map((orderItem, orderItemIndex) => (
                                <div key={orderItemIndex} className="h-fit mx-7 mt-5 py-3 flex justify-between border-b-[1px] border-b-[#edeceb]">
                                            <img src={orderItem.product.images[0].image} alt="" className='w-[130px] h-[150px] ml-5 -mr-10' />
                                            <div className="w-1/2">
                                                <Link to={`/product/${orderItem.id}`} className='font-thin mt-1 text-[17px] font-serif h-[50px] overflow-hidden'>{orderItem.product.name}</Link>
                                                <p className='text-[#777] text-[13px] my-2'>Nơi nhận hàng: {orderItem.order.ward} - {orderItem.order.district} - {orderItem.order.city}</p>
                                                {orderItem.color !== null ? (
                                                    <p> Màu sắc: {orderItem.color} </p>
                                                ) : null}
                                                {orderItem.size !== null ? (
                                                    <p> Kích thước: {orderItem.size} </p>
                                                ) : null}
                                            </div>
                                            <p>{orderItem.quantity}</p>
                                            {orderItemIndex === 0 ? (
                                            <div className='w-[18%] text-center'>
                                                {formatPrice(orderItem.order.totalPrice)}
                                                <p className='text-[#888] line-through ml-2 text-xs mt-1'></p>
                                            </div>
                                            ) : (
                                                <div className='w-[18%] text-center'>
                                                    <p className='text-[#888] line-through ml-2 text-xs mt-1'></p>
                                                </div>
                                            )}
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* <div className='border-b-[1px] border-[#edeceb]'>
                        <div className="h-fit mx-7 mt-5 py-3 flex justify-between border-b-[1px] border-b-[#edeceb]">
                            <img src={anh1} alt="" className='w-[130px] h-[150px] ml-5 -mr-10' />
                            <div className="w-1/2">
                                <Link to="/product/:id" className='font-thin mt-1 text-[17px] font-serif h-[50px] overflow-hidden'>Tên sản phẩm fdd gsc zaw fbeghbwns czbzeufhjwbsxfguwsfv efguvfuhfv du vgydus hivdbjyubf ygujgjyuk  bukibgvuyg gyuh  yugh</Link>
                                <p className='text-[#777] text-[13px] my-2'>Nơi nhận hàng: Như Thanh - Thanh Hóa</p>
                                <p> Màu sắc | Kích thước </p>
                            </div>
                            <p>1</p>
                            <div className='w-[18%] text-center'>
                                {formatPrice(100000)}
                                <p className='text-[#888] line-through ml-2 text-xs mt-1'>{formatPrice(200000)}</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    )
}

export default HistoryCart;
