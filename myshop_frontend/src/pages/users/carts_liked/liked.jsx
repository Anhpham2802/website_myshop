import React, { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import MenuHeader from '../../../component/layouts/menu_header';
import "./style.css"

import { FaXmark } from "react-icons/fa6";
import formatPrice from "../../../utils/formater";
import { toast } from 'react-toastify';
import { client } from '../../../api';

const Liked = () => {
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const res = await client.get('/api/wishlist');
                setItems(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchWishlist();
    }, []);

    const handleDelete = (index) => {
        toast.success('Xóa sản phẩm khỏi danh sách yêu thích thành công');

        const deleteWishlist = async () => {
            try {
                await client.post(`/api/wishlist/add_remove`,
                {
                    product_id: items[index].product.id,
                    remove_from_wishlist: "true"
                });
            } catch (error) {
                console.log(error);
            }
        }
        deleteWishlist();

        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    return (
        localStorage.getItem('refresh_token') === null ? (
            <div>
                <MenuHeader />
                <div className="mt-10 mx-auto">
                    <div className='border-t-[1px] border-dashed w-2/5 mx-auto'></div>
                    <div className="text-center mt-5">
                        <p className="text-2xl font-serif">Danh sách yêu thích của bạn</p>
                        <p className="text-[13px] text-[#555]">. . .</p>
                    </div>
                    <div className='pagination pagination-main mt-4'>
                        <div className='pagination-product'>
                            <div className='pagination-img h-fit'>
                                <Link to='/login'>
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg" alt="" className="h-[300px] w-[240px]" />
                                </Link>
                                <div className="text-center mt-5">
                                    <p className="text-2xl font-serif">Bạn chưa đăng nhập</p>
                                    <p className="text-[13px] text-[#555]">Hãy đăng nhập để xem danh sách yêu thích của bạn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
        <div>
            <MenuHeader />
            <div className="mt-10 mx-auto">
                <div className='border-t-[1px] border-dashed w-2/5 mx-auto'></div>
                <div className="text-center mt-5">
                    <p className="text-2xl font-serif">Danh sách yêu thích của bạn</p>
                    <p className="text-[13px] text-[#555]">. . .</p>
                </div>
                {items.length === 0 ? (
                    <div className="flex justify-center mt-10">
                        <p className="text-xl font-serif">Danh sách yêu thích của bạn trống</p>
                    </div>  
                ) : (
                    <div className='pagination pagination-main mt-4'>
                        {items.map((item, index) => (
                            <div className='pagination-product' key={index}>
                                <div className='pagination-img h-fit'>
                                    <Link to={`/product/${item.product.id}`}>
                                            <img src={item.product.images[0].image} alt="" className="h-[300px] w-[240px]" />
                                    </Link>
                                    <div className={item.product.discountPrice === null ? "hidden" : "sale"}>sale</div>
                                    <div className="icon">
                                        <i className="icon_heart_alt">
                                            <FaXmark className='rounded-full bg-white px-1 py-1' 
                                            onClick={() => handleDelete(index)}
                                            />
                                        </i>
                                    </div>
                                    <Link to={`/product/${item.product.id}`}>
                                        <p className='mt-2 h-[55px] font-sans font-normal overflow-hidden'>{item.product.name}</p>
                                    </Link>
                                    <div className="flex">
                                        {item.product.discountPrice != null ? (
                                            <div className="flex">
                                                <span className='font-semibold text-[#f79217]'>{formatPrice(item.product.discountPrice)}</span>
                                                <span className='text-[#888] line-through ml-2 text-xs mt-1'>{formatPrice(item.product.originPrice)}</span>
                                            </div>
                                        ) : (
                                            <span className='font-semibold text-[#f79217]'>{formatPrice(item.product.originPrice)}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    ));
}

export default Liked;
