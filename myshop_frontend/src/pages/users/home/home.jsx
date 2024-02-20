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
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuHeader from "../../../component/layouts/menu_header";
import { client } from "../../../api";
import { toast } from "react-toastify";

const Home = () => {
    const [menProducts, setMenProducts] = useState([]);
    const [womenProducts, setWomenProducts] = useState([]);
    const [renderMenProducts, setRenderMenProducts] = useState(null);
    const [renderWomenProducts, setRenderWomenProducts] = useState(null);
    const navigate = useNavigate();

    let womenFeatProducts = {
        all: {
            title: "Tất cả",
            products: []
        },
        clothes: {
            title: "Quần áo",
            products: []
        },
        bag_balo: {
            title: "Túi-Balo",
            products: []
        },
        footwear: {
            title: "Giày dép",
            products: []
        },
        accessory: {
            title: "Phụ kiện",
            products: []
        }
    }

    let menFeatProducts = {
        all: {
            title: "Tất cả",
            products: []
        },
        clothes: {
            title: "Quần áo",
            products: []
        },
        bag_balo: {
            title: "Túi-Balo",
            products: []
        },
        footwear: {
            title: "Giày dép",
            products: []
        },
        accessory: {
            title: "Phụ kiện",
            products: []
        }
    }

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

    const addToCart = (product_id, size, color) => {
        if (localStorage.getItem("refresh_token") === null) {
            setTimeout(() => {
                toast.error("Cần đăng nhập để thực hiện chức năng này");
            }, 1000);
            navigate('/login');
        }
        else {
            client.post("/api/add_remove_cart_item", { product_id: product_id, add_to_cart: true, size: size, color: color })
                .then(res => {
                    toast.success("Thêm sản phẩm vào giỏ hàng thành công");
                })
                .catch(err => {
                    toast.error("Thêm sản phẩm vào giỏ hàng thất bại");
                });
        }
        }

    useEffect(() => {
        const fetchMenProducts = async () => {
            try {
                const res = await client.get("/api/product_by_category?category=men");
                setMenProducts(res.data);
            } catch (error) {
                console.log("Failed", error);
            }
        }

        const fetchWomenProducts = async () => {
            try {
                const res = await client.get("/api/product_by_category?category=women");
                setWomenProducts(res.data);
            } catch (error) {
                console.log("Failed", error);
            }
        }

        fetchMenProducts();
        fetchWomenProducts();
    }, []);

    useEffect(() => {
        if (menProducts.length > 0) {
            menFeatProducts.all.products = menProducts;
            menFeatProducts.clothes.products.splice(0, menFeatProducts.clothes.products.length);
            menFeatProducts.bag_balo.products.splice(0, menFeatProducts.bag_balo.products.length);
            menFeatProducts.footwear.products.splice(0, menFeatProducts.footwear.products.length);
            menFeatProducts.accessory.products.splice(0, menFeatProducts.accessory.products.length);
            for (let i = 0; i < menProducts.length; i++) {
                if (menProducts[i].category.name.includes("QuanAo")) {
                    menFeatProducts.clothes.products.push(menProducts[i]);
                }
                if (menProducts[i].category.name.includes("GiayDep")) {
                    menFeatProducts.footwear.products.push(menProducts[i]);
                }
                if (menProducts[i].category.name.includes("PhuKien")) {
                    menFeatProducts.accessory.products.push(menProducts[i]);
                }
                if (menProducts[i].category.name.includes("BaloTui")) {
                    menFeatProducts.bag_balo.products.push(menProducts[i]);
                }
            }
        }
        if (womenProducts.length > 0) {
            womenFeatProducts.all.products = womenProducts;
            womenFeatProducts.clothes.products.splice(0, womenFeatProducts.clothes.products.length);
            womenFeatProducts.bag_balo.products.splice(0, womenFeatProducts.bag_balo.products.length);
            womenFeatProducts.footwear.products.splice(0, womenFeatProducts.footwear.products.length);
            womenFeatProducts.accessory.products.splice(0, womenFeatProducts.accessory.products.length)
            for (let i = 0; i < womenProducts.length; i++) {
                if (womenProducts[i].category.name.includes("QuanAo")) {
                    womenFeatProducts.clothes.products.push(womenProducts[i]);
                }
                if (womenProducts[i].category.name.includes("GiayDep")) {
                    womenFeatProducts.footwear.products.push(womenProducts[i]);
                }
                if (womenProducts[i].category.name.includes("PhuKien")) {
                    womenFeatProducts.accessory.products.push(womenProducts[i]);
                }
                if (womenProducts[i].category.name.includes("BaloTui")) {
                    womenFeatProducts.bag_balo.products.push(womenProducts[i]);
                }
            }

            setRenderMenProducts(renderFeatProducts(menFeatProducts));
            setRenderWomenProducts(renderFeatProducts(womenFeatProducts));
        }
    }, [menProducts, womenProducts]);

    // lay du lieu tu api
    const renderFeatProducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            tabList.push(
                <Tab key={index}>{data[key].title}</Tab>
            );

            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div className="product-item item w-[180px] mr-3" key={j}>
                        <div className="pi-pic">
                            <img src={item.images[0].image} alt="" className="h-[225px]" />
                            <div className={item.discountPrice === null ? "hidden" : "sale"}>Sale</div>
                            <div className="icon">
                                <i className="icon_heart_alt text-red-500"><CiHeart /></i>
                            </div>
                            <ul className="flex m-auto">
                                <li className="w-icon active">
                                    <i>
                                        <SlHandbag className="cursor-pointer"
                                            onClick={() => {
                                                let color = "";
                                                let size = "";
                                                for (let i = 0; i < item.productAttributes.length; i++) {
                                                    if (item.productAttributes[i].attribute === "Màu sắc") {
                                                        color = item.productAttributes[i].value;
                                                    }
                                                    if (item.productAttributes[i].attribute === "Kích cỡ") {
                                                        size = item.productAttributes[i].value;
                                                    }
                                                }
                                                addToCart(item.id, size, color);
                                            }}
                                        />
                                    </i>
                                </li>
                                <li className="">
                                    <Link to={`/product/${item.id}`} className="-mt-1 quick-view">
                                        + Xem ngay
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="pi-text">
                            <div className="category-name">{item.category.name}</div>
                            <Link to={`/product/${item.id}`}>
                                <h5>{item.name}</h5>
                            </Link>
                            <div className="product-price">
                                {item.discountPrice !== null ? (
                                    <>
                                        <span>{formatPrice(item.originPrice)}</span>
                                        {formatPrice(item.discountPrice)}
                                    </>
                                ) : (
                                    <>{formatPrice(item.originPrice)}</>
                                )}
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
                {renderWomenProducts}
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
                {renderMenProducts}
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
