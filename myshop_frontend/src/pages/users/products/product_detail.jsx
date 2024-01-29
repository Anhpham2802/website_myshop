import './product.css';
import React from 'react';
import { CiHeart } from "react-icons/ci";
import nam2 from "../../../assets/users/1.5.jpg";
import anh1 from "../../../assets/users/1.1.jpg";
import MenuHeader from '../../../component/layouts/menu_header';
import Counter from '../../../component/counter';

const ProductDetail = () => {
    return (
        <div>
            <MenuHeader />
            <div className="product-container">
                <div className="product-sidebar w-1/5">
                    <h2>Danh mục</h2>
                    <ul>
                        {/* <li>Thời trang nam</li>
                        <li>Thời trang nữ</li>
                        <li>Thời trang trẻ em</li> */}
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
                    {/* <!-- <div className="product-container"> --> */}
                    <div className="product-content">
                        <div className="w-1/2 mx-auto product-content-left">
                            <div className="product-content-left-big-img">
                                <img src={anh1} alt="" className='h-[500px]' />
                            </div>
                            <div className="flex product-content-left-small-img">
                                {/* @foreach($product->productImages as $image) */}
                                <img src={nam2} alt="" />
                                <img src={anh1} alt="" />
                                <img src={anh1} alt="" />
                                {/* @endforeach
          <!-- <img src="front/img/banner-3.jpg" alt=""> --> */}
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

                            {/* @if($productDetail[0]->quantity > 0) */}
                            <div className="product-quantity">
                                <p className='font-bold'>Số lượng : </p>
                                <div className='ml-8 -mt-2.5'><Counter /></div>
                                {/* <input type="number" minLength="1" defaultValue="1" maxLength="10" /> */}
                            </div>
                            <div className="mt-10 text-center product-content-right-button">
                                <a href="cart.html">THÊM GIỎ HÀNG</a>
                            </div>
                            {/* @else */}
                            <div className="mt-10 text-center product-content-right-button">
                                <p className='text-red-700'>Hết hàng</p>
                            </div>
                            {/* @endif */}

                            {/* <!-- <div className="product-content-right-icon">
            <div className="product-content-right-icon-item">
              <i className="fas fa-phone-alt"></i>
              <p>Hotline</p>
            </div>
            <div className="product-content-right-icon-item">
              <i className="far fa-comments"></i>
              <p>Chat</p>
            </div>
            <div className="product-content-right-icon-item">
              <i className="far fa-envelope"></i>
              <p>Mail</p>
            </div>
          </div> --> */}
                        </div>
                        {/* <!-- </div> --> */}
                    </div>
                    <div className="product-content-right-bottom">
                        <div className="product-content-right-bottom-top">
                            {/* &#8711; */}
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
        </div>
    );
};
export default ProductDetail;