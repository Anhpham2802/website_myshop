import './product.css';
import React, { useEffect } from 'react';
import { useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import MenuHeader from '../../../component/layouts/menu_header';
import Counter from '../../../component/counter';
import formatPrice from "../../../utils/formater"

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Form, Select, Input, Button } from 'antd';
import { LuSearch } from 'react-icons/lu';
import { useParams } from 'react-router-dom';
import { client } from '../../../api';
import { toast } from "react-toastify";

const ProductDetail = () => {

    const { id } = useParams();
    const [data, setData] = useState({});
    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);
    const [brandName, setBrandName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchProduct = async () => {
            const response = await client.get(`/api/product/${id}`);
            setData(response.data);
        };

        fetchProduct();
    }, [id]);

    const sliderRef = useRef(null);
    const scrollAmount = 100; // The amount to scroll when clicking the navigation buttons
    const [firstImage, setFirstImage] = useState('');

    useEffect(() => {
        if (data?.images) {
            setFirstImage(data?.images[0].image);
        }
        if(data?.brand){
            setBrandName(data?.brand.name);
        }
        if(data?.category){
            setCategoryName(data?.category.name);
        }
        if(data?.productAttributes){
            data?.productAttributes.map((item) => {
                if(item.attribute === 'Kích cỡ'){
                    for (let i = 0; i < size.length; i++) {
                        if(size[i].value === item.value){
                            return;
                        }
                    }
                    setSize([...size, {value: item.value, label: item.value}])
                }
                if(item.attribute === 'Màu sắc'){
                    for (let i = 0; i < color.length; i++) {
                        if(color[i].value === item.value){
                            return;
                        }
                    }
                    setColor([...color, {value: item.value, label: item.value}])
                }
            })
        }
        if(localStorage.getItem('refresh_token') != null){
            const fetchIsLiked = async () => {
                const response = await client.get(`/api/wishlist/${id}`);
                setIsLiked(response.data.isLiked);
            };
            fetchIsLiked();
        }
        console.log(data);
    }, [data]);
    return (
        <div>
            <MenuHeader />
            <div className="flex mt-10 mx-6 text-[14px] text-[#666]">
                <Link to="/store" className='mx-5'>Cửa hàng</Link>
                / <p className='mx-5 text-[#3a3a3a]'>{data?.name}</p>
            </div>
            <div className="flex mx-6 mt-5">
                <div className="w-1/2">
                    <img src={firstImage} alt="" className='w-[600px] h-[650px] mx-auto my-5 px-10 bg-[#fbfbfb]' />
                    <div className="flex">
                        {/* Left navigation button */}
                        <button
                            className="nav-btn"
                            onClick={() => {
                                const container = sliderRef.current;
                                container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
                            }}
                        >
                            <FaAngleLeft />
                        </button>
                        {/* Image container */}
                        <div className="images-container" ref={sliderRef}>
                            {data?.images?.map((image, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={image.image}
                                        alt=""
                                        className="image"
                                        onClick={() => {
                                            setFirstImage(image.image);
                                        }}
                                    />
                                );
                            })}
                        </div>
                        {/* Right navigation button */}
                        <button
                            className="nav-btn"
                            onClick={() => {
                                const container = sliderRef.current;
                                container.scrollLeft += scrollAmount; // Scroll right by the specified amount
                            }}
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

                <div className="w-1/2 mt-3 mx-10">
                    <div className='border-b-[1px] border-b-[#666]'>
                        <p className='text-[28px] text-[#444] font-sans'>{data?.name}</p>
                        <p className='text-[#666] text-[15px] my-2'> Rate: {data?.avgRating} | {data?.numReviews} đánh giá | {data?.sold} đã bán</p>
                        <div className='flex mb-1.5'>
                            <div className="flex w-3/4">
                                {data?.discountPrice != null ? (
                                    <div>
                                        <p className='text-[#f79217] text-[20px]'>{formatPrice(data?.discountPrice)}</p>
                                        <p className='text-[15px] text-[#888] line-through mt-1.5 mx-2'>{formatPrice(data?.originPrice)}</p>
                                    </div>
                                ) : (
                                    <p className='text-[#f79217] text-[20px]'>{formatPrice(data?.originPrice)}</p>
                                )}
                            </div>
                            <p className='mt-1 ml-36 text-[#4e4c4c] '>{data?.code}</p>
                        </div>
                    </div>

                    <Form name='' className="mt-5 w-2/3">
                        <Form.Item className=''>
                            <p className='mb-2 text-[16px]'>Kích thước</p>
                            <Select options={size} placeholder="Kích thước" className='h-[40px] focus:border-[#949392] hover:border-[#949392]' />
                        </Form.Item>
                        <Form.Item className='-mt-2' >
                            <p className='mb-2 text-[16px]'>Màu sắc</p>
                            <Select options={color} placeholder="Màu sắc" className='h-[40px] focus:border-[#949392] hover:border-[#949392]' />
                        </Form.Item>
                        {/* <Counter /> */}
                        <Form.Item className='-mt-2 '>
                            <p className='mb-2 text-[16px]'>Số lượng</p>
                            <Input
                                type='number'
                                placeholder='1'
                                min={1}
                                max={data?.stock}
                                defaultValue={1}
                                className='py-1.5 h-[40px] border-[1px] w-[20%] border-[#cac9c7] focus:border-[#949392] hover:border-[#949392]'
                            ></Input>
                            <p className='text-[#666] text-[14px] mt-1'>Còn {data?.stock} sản phẩm</p>
                        </Form.Item>
                        <div className="flex">
                            {data?.stock > 0 ? (
                                <Button type='' htmlType='submit' className='mt-2 h-[45px] w-2/4 bg-[#03dffc] text-white font-semibold text-[17px] hover:bg-[#036ffc] cursor-pointer'>
                                    Thêm giỏ hàng
                                </Button>
                            ) : (
                                <Button type='' htmlType='submit' className='mt-2 h-[45px] w-2/4 bg-[#6b7c88] text-white font-semibold text-[17px]' disabled>
                                    Hết hàng
                                </Button>
                            )}
                            <div onClick={
                                () => {
                                    if(localStorage.getItem('refresh_token') === null){
                                        setTimeout(() => {
                                            toast.error("Cần đăng nhập để thực hiện chức năng này");
                                        }, 1000);
                                        navigate('/login');
                                    }
                                    if(localStorage.getItem('refresh_token')){
                                        async function addWishlist() {
                                            try {
                                                const response = await client.post(`/api/wishlist/add_remove`, {
                                                    product_id: id
                                                });
                                                console.log(response.data);
                                            } catch (error) {
                                                console.log(error);
                                            }
                                        }
                                        addWishlist();
                                        setIsLiked(!isLiked);
                                        if (isLiked) {
                                            toast.success("Đã xóa khỏi danh sách yêu thích");
                                        }
                                        else {
                                            toast.success("Đã thêm vào danh sách yêu thích");
                                        }
                                    }
                             }}>
                                {isLiked ? (
                                    <FaHeart className='text-4xl mt-3.5 border-[1px] rounded-full p-1.5 ml-12 cursor-pointer hover:bg-[#f2f2f2]' />
                                ) : (
                                    <CiHeart className='text-4xl mt-3.5 border-[1px] rounded-full p-1.5 ml-12 cursor-pointer hover:bg-[#f2f2f2]' />
                                )}
                            </div>
                        </div>
                    </Form>
                    <div className="product-content-right-bottom mt-28">
                        <div className="product-content-right-bottom-top">
                        </div>
                        <div className="product-content-right-bottom-content-big">
                            <div className="product-content-right-bottom-content-title">
                                <div className="product-content-right-bottom-content-title-item chitiet">
                                    <p>Chi tiết sản phẩm</p>
                                </div>
                            </div>
                            <div className="product-content-right-bottom-content">
                                <div className="product-content-right-bottom-content-chitiet">
                                    <p>Thương hiệu: {brandName}</p>
                                    <p>Loại sản phẩm: {categoryName}</p>
                                    <p>{data?.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductDetail;
