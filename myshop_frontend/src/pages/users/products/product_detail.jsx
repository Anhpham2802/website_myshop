import './product.css';
import React from 'react';
import { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import MenuHeader from '../../../component/layouts/menu_header';
import Counter from '../../../component/counter';
import formatPrice from "../../../utils/formater"

import nam2 from "../../../assets/users/1.5.jpg";
import anh1 from "../../../assets/users/1.1.jpg";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { Form, Select, Input, Button } from 'antd';
import { LuSearch } from 'react-icons/lu';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const ProductDetail = () => {

    const sliderRef = useRef(null);
    const scrollAmount = 100; // The amount to scroll when clicking the navigation buttons
    const [images, setImages] = useState([
        {
            id: 1,
            url: anh1,
        },
        {
            id: 2,
            url: anh1,
        },
        {
            id: 3,
            url: anh1,
        },
        {
            id: 4,
            url: anh1,
        },
        {
            id: 5,
            url: anh1,
        },
        {
            id: 6,
            url: nam2,
        },
        {
            id: 7,
            url: nam2,
        },
        {
            id: 8,
            url: nam2,
        },
    ]);

    return (
        <div>
            <MenuHeader />
            <div className="flex mt-10 mx-6 text-[14px] text-[#666]">
                <Link to="/store" className='mx-5'>Cửa hàng</Link>
                / <p className='mx-5 text-[#3a3a3a]'>Tên sản phẩm</p>
            </div>
            <div className="flex mx-6 mt-5">
                <div className="w-1/2">
                    <img src={anh1} alt="" className='w-[600px] h-[650px] mx-auto my-5 px-10 bg-[#fbfbfb]' />
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
                            {images.map((image) => {
                                return (
                                    <img
                                        className="image"
                                        alt="sliderImage"
                                        key={image?.id}
                                        src={image?.url}
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
                        <p className='text-[28px] text-[#444] font-sans'>Ten san pham</p>
                        <div className='flex mb-1.5'>
                            <div className="flex w-3/4">
                                <p className='text-[#f79217] text-[20px]'>{formatPrice(100000)}</p>
                                <p className='text-[15px] text-[#888] line-through mt-1.5 mx-2'>{formatPrice(100000)}</p>
                            </div>
                            <p className='mt-1 text-[#4e4c4c] '>SKU# item.maSP</p>
                        </div>
                    </div>

                    <Form name='' className="mt-5 w-2/3">
                        <Form.Item className=''>
                            <p className='mb-2 text-[16px]'>Kích thước</p>
                            <Select options={options} placeholder="Kích thước" className='h-[40px] focus:border-[#949392] hover:border-[#949392]' />
                        </Form.Item>
                        <Form.Item className='-mt-2' >
                            <p className='mb-2 text-[16px]'>Màu sắc</p>
                            <Select options={options} placeholder="Màu sắc" className='h-[40px] focus:border-[#949392] hover:border-[#949392]' />
                        </Form.Item>
                        {/* <Counter /> */}
                        <Form.Item className='-mt-2 '>
                            <p className='mb-2 text-[16px]'>Số lượng</p>
                            <Input
                                type='number'
                                placeholder='1'
                                min={1}
                                max={10}
                                defaultValue={1}
                                className='py-1.5 h-[40px] border-[1px] w-[20%] border-[#cac9c7] focus:border-[#949392] hover:border-[#949392]'
                            ></Input>
                        </Form.Item>
                        <div className="flex">
                            <Button type='' htmlType='submit' className='mt-2 h-[45px] w-2/4 bg-[#6b7c88] text-white font-semibold text-[17px] hover:bg-[#7b8a94]'>
                                Thêm giỏ hàng
                            </Button>
                            <CiHeart className='text-4xl mt-3.5 border-[1px] rounded-full p-1.5 ml-12'/>
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
                                <div className="product-content-right-bottom-content-title-item baoquan">
                                    <p>Cách bảo quản</p>
                                </div>
                            </div>
                            <div className="product-content-right-bottom-content">
                                <div className="product-content-right-bottom-content-chitiet">
                                    <p>Tránh ánh nắng trực tiếp </p>
                                </div>
                                <div className="product-content-right-bottom-content-baoquan">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Impedit perferendis in eligendi laboriosam eaque explicabo.
                                        cupiditate nihil ipsum non odit facilis corporis accusamus.
                                        praesentium repudiandae deleniti eum dolore eius aliquam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className="product-container">
            <div className="product-sidebar w-1/5">
                    <h2>Danh mục</h2>
                    <ul>
                        <li>Thời trang nam</li>
                        <li>Thời trang nữ</li>
                        <li>Thời trang trẻ em</li>
                        <li class="active"><a href="#">Trang phục cho nữ</a> </li>
                        <li><a href="#">Trang phục cho nam</a></li>
                        <li><a href="#">Trang phục trẻ em</a></li>

                    </ul>
                    <h2 className="product-filter">Phụ kiện</h2>
                    <ul>
                        <li><a href="#">Túi xách - Balo</a></li>
                        <li><a href="#">Giày dép</a></li>
                        <li><a href="#">Phụ kiện thời trang</a></li>
                    </ul>
                </div>
                <div className="w-4/5 product">
                    <div className="product-content">
                        <div className="w-1/2 mx-auto product-content-left">
                            <div className="product-content-left-big-img">
                                <img src={anh1} alt="" className='h-[500px]' />
                            </div>
                            <div className="flex product-content-left-small-img">
                                <img src={nam2} alt="" />
                                <img src={anh1} alt="" />
                                <img src={anh1} alt="" />
                            </div>
                        </div>
                        <div className="product-content-right">
                            <div className="product-content-right-name">
                                <div className='flex'>
                                    <h1>ten san pham</h1>
                                    <CiHeart className='w-1/3 mt-2 font-bold text-2xl' />
                                </div>
                                <p>MSP : 123456</p>
                            </div>
                            <div className='flex mt-2'>
                                <div className='font-bold'>
                                    <p>Giá</p>
                                    <p className='mt-3'>Màu sắc</p>
                                    <p className='mt-3'>Chất liệu</p>
                                    <p className='mt-3'>Kích thước</p>
                                    <p className='my-3'>Thương hiệu</p>
                                </div>
                                <div className='ml-5'>
                                    <p>: 100.000<sup>đ</sup></p>
                                    <p className='mt-3'>: xanh</p>
                                    <p className='mt-3'>: Vari cotton</p>
                                    <p className='mt-3'>: S</p>
                                    <p className='my-3'>: Dior</p>
                                </div>
                            </div>

                            <div className="product-quantity">
                                <p className='font-bold'>Số lượng : </p>
                                <div className='ml-8 -mt-2.5'><Counter /></div>
                            </div>
                            <div className="mt-10 text-center product-content-right-button">
                                <a href="cart.html">THÊM GIỎ HÀNG</a>
                            </div>
                            <div className="mt-10 text-center product-content-right-button">
                                <p className='text-red-700'>Hết hàng</p>
                            </div>
                        </div>

                    </div>
                    <div className="product-content-right-bottom">
                        <div className="product-content-right-bottom-top">
                        </div>
                        <div className="product-content-right-bottom-content-big">
                            <div className="product-content-right-bottom-content-title">
                                <div className="product-content-right-bottom-content-title-item chitiet">
                                    <p>Chi tiết sản phẩm</p>
                                </div>
                                <div className="product-content-right-bottom-content-title-item baoquan">
                                    <p>Cách bảo quản</p>
                                </div>
                            </div>
                            <div className="product-content-right-bottom-content">
                                <div className="product-content-right-bottom-content-chitiet">
                                    <p>Tránh ánh nắng trực tiếp </p>
                                </div>
                                <div className="product-content-right-bottom-content-baoquan">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Impedit perferendis in eligendi laboriosam eaque explicabo.
                                        cupiditate nihil ipsum non odit facilis corporis accusamus.
                                        praesentium repudiandae deleniti eum dolore eius aliquam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
export default ProductDetail;