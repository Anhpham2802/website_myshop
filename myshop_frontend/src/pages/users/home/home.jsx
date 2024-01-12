import anh1 from "../../../assets/users/1.1.jpg";
import anh2 from "../../../assets/users/1.2.jpg";
import anh3 from "../../../assets/users/1.3.jpg";
import anh4 from "../../../assets/users/1.6.jpg";
import nam2 from "../../../assets/users/1.5.jpg";
import nam1 from "../../../assets/users/nam1.jpg";
import bia from "../../../assets/users/bia5.png";
import bianho2 from "../../../assets/users/bianho2.png";
import bianho3 from "../../../assets/users/bianho3.png";

import SlideShow from "./slide_show";
import {FaSearch, FaOpencart, FaAlignJustify } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {FaRegHeart } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import "../../../component/layouts/style.css";
import "./home.css";
import React from "react";

const Home = () => {
    return (
        <div>
            <SlideShow />

            <div className="bg-yellow-600 h-[50px] py-0.5 mt-5">
                <div className="w-11/12 flex flex-row text-white h-full m-auto justify-between ">
                    <div className="flex flex-row border-r-[1px] border-r-slate-200 px-3  hover:text-yellow-900">
                        <FaAlignJustify className="mt-4 mr-[10px]" />
                        <p className="mt-2.5 mr-2.5 font-semibold">Tất cả sản phẩm</p>
                        <IoMdArrowDropdown className="mt-4 ml-7" />
                    </div>
                    <div className="flex flex-row border-r-[1px] border-r-slate-200 mx-5 hover:text-yellow-900">
                        <a href="" className="mt-2.5 pr-12 font-semibold">Trang chủ</a>
                    </div>
                    <div className="flex flex-row border-r-[1px] border-r-slate-200 px-5  hover:text-yellow-900">
                        <a href="" className="mt-2.5 pr-10 font-semibold">Cửa hàng</a>
                    </div>
                    <div className="flex flex-row border-r-[1px] border-r-slate-200 px-5  hover:text-yellow-900">
                        <a href="" className="mt-2.5 pr-8 font-semibold">Yêu thích</a>
                    </div>
                    <div className="flex flex-row border-r-[1px] border-r-slate-200 px-5  hover:text-yellow-900">
                        <a href="" className="mt-2.5 pr-10 font-semibold">Giỏ hàng</a>
                    </div>
                    <div className="flex flex-row border-r-[1px] border-r-slate-200 px-5  hover:text-yellow-900">
                        <a href="" className="mt-2.5 pr-14 font-semibold">Lịch sử đơn hàng</a>
                    </div>
                    <div className="flex flex-row border-r-[1px] border-r-slate-200 px-5  hover:text-yellow-900">
                        <a href="" className="mt-2.5 pr-16 font-semibold">Liên hệ</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-11/12 m-auto">
                <div className="flex flex-row my-5 xl:w-2/5 m-auto justify-between">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-500 focus:shadow-[inset_0_0_0_1px_rgb(234,179,8)] focus:outline-none dark:border-slate-200 dark:text-neutral-600 dark:placeholder:text-neutral-400 dark:focus:border-amber-400"
                            placeholder="Bạn cần gì ❣️"
                            aria-label="Search"
                            aria-describedby="button-addon1" />
                        <FaSearch className="ml-5 m-2.5 text-yellow-500" />
                    </div>
                </div>

                <div className="flex flex-row m-2.5 heart-icon float-right">
                    <FaRegHeart className="ml-[15px] text-lg my-5" />
                    <span>1</span>
                    <FaOpencart className="ml-3 text-xl my-5" />
                    <span className="cart-icon">3</span>
                </div>
            </div>
            {/* content */}
            <div className="flex container m-auto">
                <div className="flex m-auto h-[250px] mt-5">
                    <div className="w-1/3 mr-40 single-banner">
                        <img src={anh1} alt="" className="rounded-sm" />
                        <div className="inner-text">
                            <h4>Nữ</h4>
                        </div>
                    </div>
                    <div className="w-1/3 mr-40 single-banner">
                        <img src={anh3} alt="" className="rounded-sm" />
                        <div className="inner-text">
                            <h4>Trẻ em</h4>
                        </div>
                    </div>
                    <div className="w-1/3 single-banner">
                        <img src={anh2} alt="" className="rounded-sm" />
                        <div className="inner-text">
                            <h4>Nam</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">❤️❤️❤️</div>

            <div className="mt-14 flex mx-10">
                <div className="w-2/6 max-h-[400px]">
                    <div className="women-banner">
                        <img src={anh4} alt="" className="h-[400px]" />
                        <div className="inner-text text-center">
                            <h2>Thời trang nữ</h2>
                        </div>
                        <div className="inner-text text-center mt-7">
                            <a href="#">Khám phá</a>
                        </div>
                    </div>
                </div>
                <div className="w-3/4">
                    <div className="filter-control">
                        <ul>
                            <li className="item active" data-tag="*" data-category="women">Tất cả</li>
                            <li className="item" data-tag=".Clothing" data-category="women">Quần áo</li>
                            <li className="item" data-tag=".HandBag" data-category="women">Túi-Balo</li>
                            <li className="item" data-tag=".Shoes" data-category="women">Giày</li>
                            <li className="item" data-tag=".Accessories" data-category="women">Phụ kiện</li>
                        </ul>
                    </div>
                    <div className="product-slider owl-carousel women flex">
                        <div className="mt-24 mr-14 text-slate-400"><MdKeyboardArrowLeft className="text-6xl" /></div>
                        {/* @foreach($womenProducts as $womenProduct) */}
                        <div className="product-item item w-1/5 mr-14">
                            <div className="pi-pic">
                                <img src={anh1} alt="" className="h-[225px]" />
                                {/* @if($womenProduct->discount != null) */}
                                <div className="sale">Sale</div>
                                {/* @endif */}
                                <div className="icon">
                                    <i className="icon_heart_alt">❤️</i>
                                </div>
                                <ul className="flex m-auto">
                                    <li className="w-icon active mx-1"><a href="#"><i><SlHandbag /></i></a></li>
                                    <li className="quick-view"><a href="" className="-mt-1">+ Xem ngay</a></li>
                                    {/* <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li> */}
                                </ul>
                            </div>
                            <div className="pi-text">
                                <div className="category-name">Túi-Balo</div>
                                <a href="#">
                                    <h5>ten san pham</h5>
                                </a>
                                <div className="product-price">
                                    {/* @if($womenProduct->discount != null)
                                    {{ $womenProduct-> discount}} */}
                                    <span>100.000</span>
                                    200000k
                                    {/* @else
                                    ${{ $womenProduct-> price}}
                                    @endif */}
                                </div>
                            </div>
                        </div>

                        {/* @endforeach */}

                        <div className="product-item item w-1/5 mr-14">
                            <div className="pi-pic">
                                <img src={anh3} alt="" className="h-[225px]" />
                                {/* @if($womenProduct->discount != null) */}
                                <div className="sale">Sale</div>
                                {/* @endif */}
                                <div className="icon">
                                    <i className="icon_heart_alt">❤️</i>
                                </div>
                                <ul className="flex m-auto">
                                    <li className="w-icon active mx-1"><a href="#"><i><SlHandbag /></i></a></li>
                                    <li className="quick-view"><a href="" className="-mt-1">+ Xem ngay</a></li>
                                    {/* <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li> */}
                                </ul>
                            </div>
                            <div className="pi-text">
                                <div className="category-name">Túi-Balo</div>
                                <a href="#">
                                    <h5>ten san pham</h5>
                                </a>
                                <div className="product-price">
                                    {/* @if($womenProduct->discount != null)
                                    {{ $womenProduct-> discount}} */}
                                    <span>100.000</span>
                                    200000k
                                    {/* @else
                                    ${{ $womenProduct-> price}}
                                    @endif */}
                                </div>
                            </div>
                        </div>

                        {/* @endforeach */}

                        <div className="product-item item w-1/5 mr-14">
                            <div className="pi-pic">
                                <img src={nam2} alt="" className="h-[225px]" />
                                {/* @if($womenProduct->discount != null) */}
                                <div className="sale">Sale</div>
                                {/* @endif */}
                                <div className="icon">
                                    <i className="icon_heart_alt">❤️</i>
                                </div>
                                <ul className="flex m-auto">
                                    <li className="w-icon active mx-1"><a href="#"><i><SlHandbag /></i></a></li>
                                    <li className="quick-view"><a href="" className="-mt-1">+ Xem ngay</a></li>
                                    {/* <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li> */}
                                </ul>
                            </div>
                            <div className="pi-text">
                                <div className="category-name">Túi-Balo</div>
                                <a href="#">
                                    <h5>ten san pham</h5>
                                </a>
                                <div className="product-price">
                                    {/* @if($womenProduct->discount != null)
                                    {{ $womenProduct-> discount}} */}
                                    <span>100.000</span>
                                    200000k
                                    {/* @else
                                    ${{ $womenProduct-> price}}
                                    @endif */}
                                </div>
                            </div>
                        </div>

                        {/* @endforeach */}

                        <div className="mt-24 text-slate-400"><MdKeyboardArrowRight className="text-6xl" /></div>

                    </div>
                </div>
            </div>

            {/* banner */}
            <div className="w-full h-[500px] bg-[#D2E3C8] mt-7 flex">
                <div className="w-1/3"><img src={bia} alt="" className=" h-[500px]" /></div>
                <div className="w-1/2  mt-10">
                    <img src={bianho3} alt="" className="w-1/6 ml-[520px] -mb-5" />
                    <p className="text-6xl font-semibold text-[#4F6F52]">MŨ LEN HOẠT HÌNH</p>
                    <p className="mt-5 ml-1">Bộ sưu tập mũ len cùng các phụ kiện cho mùa đông siêu cấp dễ thương</p>
                    <div className="mt-20"><a href="" className="rounded-full border-4 border-[#739072] border-dashed py-8 px-2 font-medium text-[#4F6F52]">Mua ngay</a></div>
                    {/* <img src={bianho4} alt="" className="w-1/6 ml-[520px]"/> */}

                </div>
                <div className="w-1/6 justify-end mt-[273px]">
                    {/* <div className="flex w-1/2">
                        <img src={bianho1} alt="" />
                        <img src={bianho3} alt="" />
                    </div> */}
                    <img src={bianho2} alt="" />
                </div>
            </div>

            {/* men banner*/}
            <div className="mt-14 flex mx-10">
                <div className="w-3/4">
                    <div className="filter-control">
                        <ul>
                            <li className="item active" data-tag="*" data-category="women">Tất cả</li>
                            <li className="item" data-tag=".Clothing" data-category="women">Quần áo</li>
                            <li className="item" data-tag=".HandBag" data-category="women">Túi-Balo</li>
                            <li className="item" data-tag=".Shoes" data-category="women">Giày</li>
                            <li className="item" data-tag=".Accessories" data-category="women">Phụ kiện</li>
                        </ul>
                    </div>
                    <div className="product-slider owl-carousel women flex">
                        <div className="mt-24 mr-14 text-slate-400"><MdKeyboardArrowLeft className="text-6xl" /></div>
                        {/* @foreach($womenProducts as $womenProduct) */}
                        <div className="product-item item w-1/5 mr-14">
                            <div className="pi-pic">
                                <img src={nam2} alt="" className="h-[225px]" />
                                {/* @if($womenProduct->discount != null) */}
                                <div className="sale">Sale</div>
                                {/* @endif */}
                                <div className="icon">
                                    <i className="icon_heart_alt">❤️</i>
                                </div>
                                <ul className="flex m-auto">
                                    <li className="w-icon active mx-1"><a href="#"><i><SlHandbag /></i></a></li>
                                    <li className="quick-view"><a href="" className="-mt-1">+ Xem ngay</a></li>
                                    {/* <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li> */}
                                </ul>
                            </div>
                            <div className="pi-text">
                                <div className="category-name">Túi-Balo</div>
                                <a href="#">
                                    <h5>ten san pham</h5>
                                </a>
                                <div className="product-price">
                                    {/* @if($womenProduct->discount != null)
                                    {{ $womenProduct-> discount}} */}
                                    <span>100.000</span>
                                    200000k
                                    {/* @else
                                    ${{ $womenProduct-> price}}
                                    @endif */}
                                </div>
                            </div>
                        </div>
                        {/* @endforeach */}

                        <div className="product-item item w-1/5 mr-14">
                            <div className="pi-pic">
                                <img src={nam1} alt="" className="h-[225px]" />
                                {/* @if($womenProduct->discount != null) */}
                                <div className="sale">Sale</div>
                                {/* @endif */}
                                <div className="icon">
                                    <i className="icon_heart_alt">❤️</i>
                                </div>
                                <ul className="flex m-auto">
                                    <li className="w-icon active mx-1"><a href="#"><i><SlHandbag /></i></a></li>
                                    <li className="quick-view"><a href="" className="-mt-1">+ Xem ngay</a></li>
                                    {/* <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li> */}
                                </ul>
                            </div>
                            <div className="pi-text">
                                <div className="category-name">Túi-Balo</div>
                                <a href="#">
                                    <h5>ten san pham</h5>
                                </a>
                                <div className="product-price">
                                    {/* @if($womenProduct->discount != null)
                                    {{ $womenProduct-> discount}} */}
                                    <span>100.000</span>
                                    200000k
                                    {/* @else
                                    ${{ $womenProduct-> price}}
                                    @endif */}
                                </div>
                            </div>
                        </div>
                        {/* @endforeach */}

                        <div className="product-item item w-1/5 mr-14">
                            <div className="pi-pic">
                                <img src={nam2} alt="" className="h-[225px]" />
                                {/* @if($womenProduct->discount != null) */}
                                <div className="sale">Sale</div>
                                {/* @endif */}
                                <div className="icon">
                                    <i className="icon_heart_alt">❤️</i>
                                </div>
                                <ul className="flex m-auto">
                                    <li className="w-icon active mx-1"><a href="#"><i><SlHandbag /></i></a></li>
                                    <li className="quick-view"><a href="" className="-mt-1">+ Xem ngay</a></li>
                                    {/* <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li> */}
                                </ul>
                            </div>
                            <div className="pi-text">
                                <div className="category-name">Túi-Balo</div>
                                <a href="#">
                                    <h5>ten san pham</h5>
                                </a>
                                <div className="product-price">
                                    {/* @if($womenProduct->discount != null)
                                    {{ $womenProduct-> discount}} */}
                                    <span>100.000</span>
                                    200000k
                                    {/* @else
                                    ${{ $womenProduct-> price}}
                                    @endif */}
                                </div>
                            </div>
                        </div>
                        {/* @endforeach */}

                        <div className="mt-24 text-slate-400"><MdKeyboardArrowRight className="text-6xl" /></div>
                    </div>
                </div>
                <div className="w-2/6 max-h-[400px]">
                    <div className="women-banner ml-[80px]">
                        <img src={nam1} alt="" className="h-[400px]" />
                        <div className="inner-text text-center inner-text-man">
                            <h2>Thời trang nam</h2>
                        </div>
                        <div className="inner-text text-center mt-7 inner-text-man">
                            <a href="#">Khám phá</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;