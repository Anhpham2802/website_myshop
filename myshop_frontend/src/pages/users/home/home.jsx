import anh1 from "../../../assets/users/1.1.jpg";
import anh2 from "../../../assets/users/1.2.jpg";
import anh3 from "../../../assets/users/1.3.jpg";
import anh4 from "../../../assets/users/1.6.jpg";
import nam2 from "../../../assets/users/1.5.jpg";
import nam1 from "../../../assets/users/nam1.jpg";
import bia from "../../../assets/users/bia5.png";
import bianho2 from "../../../assets/users/bianho2.png";
import bianho3 from "../../../assets/users/bianho3.png";

import formatPrice from "../../../utils/formater";
import SlideShow from "./slide_show";
import { FaAlignJustify, FaRegHeart, FaOpencart, FaSearch } from 'react-icons/fa';
import { SlHandbag } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../component/layouts/style.css";
import "./home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuHeader from "../../../component/layouts/menu_header";

const Home = () => {

    const featProducts = {
        all: {
            title: "Tất cả",
            products: [
                {
                    img: anh1,
                    category_name: "Túi-Balo",
                    product_name: "ten san pham",
                    price_old: 200000,
                    price: 100000,
                },
                {
                    img: anh1,
                    category_name: "Quần áo",
                    product_name: "ten san pham",
                    price_old: 860000,
                    price: 650000,
                }, {
                    img: anh1,
                    category_name: "Giày",
                    product_name: "ten san pham",
                    price_old: 554000,
                    price: 2330000,
                }, {
                    img: anh1,
                    category_name: "Phụ kiện",
                    product_name: "ten san pham",
                    price_old: 200000,
                    price: 145000,
                },
                {
                    img: anh1,
                    category_name: "Phụ kiện",
                    product_name: "ten san pham",
                    price_old: 200000,
                    price: 145000,
                },
                {
                    img: anh1,
                    category_name: "Phụ kiện",
                    product_name: "ten san pham",
                    price_old: 200000,
                    price: 145000,
                },
                {
                    img: anh1,
                    category_name: "Phụ kiện",
                    product_name: "ten san pham",
                    price_old: 200000,
                    price: 145000,
                },
            ]
        },
        clothes: {
            title: "Quần áo",
            products: [
                {
                    img: anh1,
                    category_name: "Quần áo",
                    product_name: "ten san pham",
                    price_old: 860000,
                    price: 650000,
                },
            ]
        },
        bag_balo: {
            title: "Túi-Balo",
            products: [
                {
                    img: anh1,
                    category_name: "Quần áo",
                    product_name: "ten san pham",
                    price_old: 860000,
                    price: 650000,
                },
            ]
        },
        footwear: {
            title: "Giày dép",
            products: [
                {
                    img: anh1,
                    category_name: "Giày",
                    product_name: "ten san pham",
                    price_old: 554000,
                    price: 2330000,
                },
            ]
        },
        accessory: {
            title: "Phụ kiện",
            products: [
                {
                    img: anh1,
                    category_name: "Phụ kiện",
                    product_name: "ten san pham",
                    price_old: 200000,
                    price: 145000,
                },
                {
                    img: anh1,
                    category_name: "Phụ kiện",
                    product_name: "ten san pham",
                    price_old: 200000,
                    price: 145000,
                },
                {
                    img: anh1,
                    category_name: "Phụ kiện",
                    product_name: "ten san pham",
                    price_old: 200000,
                    price: 145000,
                },
            ]
        }
    }
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    // lay du lieu tu api
    const renderFeatProducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        // console.log(data);
        Object.keys(data).forEach((key, index) => {
            // console.log(key, index);
            tabList.push(
                <Tab key={index}>{data[key].title}</Tab>
            );

            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div className="product-item item w-[180px] mr-3" key={j}>
                        <div className="pi-pic">
                            <img src={item.img} alt="" className="h-[225px]" />
                            <div className="sale">Sale</div>
                            <div className="icon">
                                <i className="icon_heart_alt text-white"><CiHeart /></i>
                            </div>
                            <ul className="flex m-auto">
                                <li className="w-icon active"><a href="#"><i><SlHandbag /></i></a></li>
                                <li className="">
                                    <Link to="/product/:id" className="-mt-1 quick-view">
                                        + Xem ngay
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="pi-text">
                            <div className="category-name">{item.category_name}</div>
                            <a href="#">
                                <h5>{item.product_name}</h5>
                            </a>
                            <div className="product-price">
                                <span>{formatPrice(item.price_old)}</span>
                                {formatPrice(item.price)}
                            </div>
                        </div>
                    </div>
                )
            });
            tabPanels.push(tabPanel);
        });
        return (
            <Tabs className="w-3/4 pl-20">
                <TabList className="filter-control">{tabList} </TabList>
                {tabPanels.map((item, key) => (
                    <TabPanel key={key} className="">
                        <Carousel responsive={responsive} className="w-3/4 product-slider owl-carousel women flex mx-auto">
                            {item}
                        </Carousel>
                    </TabPanel>
                ))}
            </Tabs>
        );
    };

    return (
        <div>
            <SlideShow />
            <MenuHeader />
            {/* <div className="flex flex-row w-11/12 m-auto">
                <div className="flex flex-row my-5 xl:w-2/5 m-auto justify-between">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-500 focus:shadow-[inset_0_0_0_1px_rgb(234,179,8)] focus:outline-none dark:border-slate-200 dark:text-neutral-600 dark:placeholder:text-neutral-400 dark:focus:border-amber-400"
                            placeholder="Bạn cần gì ❣️"
                            aria-label="Search"
                            aria-describedby="button-addon1" />
                        <button type="submit"><FaSearch className="ml-5 m-2.5 text-yellow-500" /></button>
                    </div>
                </div>

                <div className="flex flex-row m-2.5 heart-icon float-right">
                    <Link to="/liked">
                        <FaRegHeart className="ml-[15px] text-lg my-5" />
                    </Link>
                    <span>1</span>
                    <Link to="/cart">
                        <FaOpencart className="ml-3 text-xl my-5" />
                    </Link>
                    <span className="cart-icon">3</span>
                </div>
            </div> */}
            {/* content */}
            <div className="flex container m-auto">
                {/* head content */}
                <div className="flex m-auto h-[250px] mt-5">
                    <div className="w-1/3 mr-40 single-banner">
                        <img src={anh1} alt="" className="rounded-sm" />
                        <div className="inner-text">
                            <Link to="/women">
                                <h4>Nữ</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/3 mr-40 single-banner">
                        <img src={anh3} alt="" className="rounded-sm" />
                        <div className="inner-text">
                            <Link to="/kid">
                                <h4>Trẻ em</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/3 single-banner">
                        <img src={anh2} alt="" className="rounded-sm" />
                        <div className="inner-text">
                            <Link to="/men">
                                <h4>Nam</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">❤️❤️❤️</div>

            {/* women banner */}
            <div className="mt-14 flex mx-10">
                <div className="w-2/6 max-h-[400px]">
                    <div className="women-banner">
                        <img src={anh4} alt="" className="h-[400px] w-full" />
                        <div className="inner-text text-center">
                            <h2>Thời trang nữ</h2>
                        </div>
                        <div className="inner-text text-center mt-7">
                            <Link to="/women">
                                Khám phá
                            </Link>
                        </div>
                    </div>
                </div>
                {renderFeatProducts(featProducts)}
            </div>

            {/* banner */}
            <div className="w-full h-[500px] bg-[#D2E3C8] mt-7 flex">
                <div className="w-1/3"><img src={bia} alt="" className=" h-[500px]" /></div>
                <div className="w-1/2  mt-10">
                    <img src={bianho3} alt="" className="w-1/6 ml-[520px] -mb-5" />
                    <p className="text-6xl font-semibold text-[#4F6F52]">MŨ LEN HOẠT HÌNH</p>
                    <p className="mt-5 ml-1">Bộ sưu tập mũ len cùng các phụ kiện cho mùa đông siêu cấp dễ thương</p>
                    <div className="mt-20">
                        <Link to="/product/:id" className="rounded-full border-4 border-[#739072] border-dashed py-8 px-2 font-medium text-[#4F6F52]">Mua ngay</Link>
                    </div>
                </div>
                <div className="w-1/6 justify-end mt-[273px]">
                    <img src={bianho2} alt="" />
                </div>
            </div>

            {/* men banner*/}
            <div className="mt-14 flex mx-10">

                {renderFeatProducts(featProducts)}
                <div className="w-2/6 max-h-[400px]">
                    <div className="women-banner ">
                        <img src={nam1} alt="" className="h-[400px] w-full" />
                        <div className="inner-text text-center inner-text-man">
                            <h2>Thời trang nam</h2>
                        </div>
                        <div className="inner-text text-center mt-7 inner-text-man">
                            <Link to="/men">
                                Khám phá
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;