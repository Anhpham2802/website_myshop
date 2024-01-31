import React from 'react';
import { Link } from 'react-router-dom';
import MenuHeader from '../../../component/layouts/menu_header';
import anh1 from "../../../assets/users/1.1.jpg";
import anh2 from "../../../assets/users/1.2.jpg";
import anh3 from "../../../assets/users/1.3.jpg";
import anh5 from "../../../assets/users/1.4.jpg";
import anh4 from "../../../assets/users/1.5.jpg";
import "./style.css"

import { LuSearch } from "react-icons/lu";
import { Form, Input, Button } from 'antd';
import Select from 'react-select'
import Counter from '../../../component/counter';
import formatPrice from "../../../utils/formater";
import { RiDeleteBin5Line } from "react-icons/ri";

const items = [
    {
        img: anh1,
        sale: null,
        category_name: "Túi-Balo",
        product_name: "XINH Túi Xách Nữ Xinh Đeo Chéo Đeo Vai Cao Cấp Túi Chéo Nữ Đẹp Thiết Kế Dây Da Phối Nơ TDC043 OK",
        price_old: 200000,
        price: 100000,
    },
    {
        img: anh2,
        sale: "sale",
        category_name: "Quần áo",
        product_name: "SET 02 MÓN Bộ quần áo nữ hoa xuân tơ đũi cao cấp - đồ lam - đồ đi chùa",
        price_old: 860000,
        price: 650000,
    }, {
        img: anh3,
        sale: null,
        category_name: "Phụ kiện",
        product_name: "Kẹp Tóc đính Ngọc Trai Nhân Tạo Xinh Xắn Thời Trang Thơi Trang Han Quôc Cho Nữ",
        price_old: 554000,
        price: 2330000,
    }, {
        img: anh5,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "【Bờm Tóc】Băng đô Cài Tóc Rửa Mặt Đa Năng Màu Trắng Thời Trang Hàn Quốc Cho Nữ",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh4,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "Kẹp tóc nơ màu trắng cỡ lớn thời trang Hàn Quốc cho nữ",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Quần áo",
        product_name: "Áo len hoạ tiết nữ 2hand",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Quần áo",
        product_name: "Quần jean loe nữ chốt live",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: null,
        category_name: "Quần áo",
        product_name: "gouliu quần áo phụ nữ Áo Sơ Mi chiffon Tay Dài Dáng Rộng Thời Trang Mùa Thu 2023",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Quần áo",
        product_name: "Bộ Đồ Nữ, Áo Dài, Quần Dài, Áo Cổ Tròn - Q39",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: null,
        category_name: "Túi-Balo",
        product_name: "Túi Xách Nữ Thiết Kế Dáng Vuông Phối Quai Xách Sang Chảnh TN15 ac hot",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Túi-Balo",
        product_name: "Túi Canvas Thời Trang",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Túi-Balo",
        product_name: "Balo Ulzzang Chống Thấm Đi Học, Đi Chơi ( YOYOKO)",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Giày dép",
        product_name: "Giày thể thao nữ giày đi học nữ quai dán viền tua rua vải canvas đế 5cm thời trang hàn quốc",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Giày dép",
        product_name: "giày đế bằng lolita đế bệt bản trơn dễ đi đa phong cách",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: null,
        category_name: "Giày dép",
        product_name: "Giày Sandals Da Mềm nữ lolita đế 3cm, Giày búp bê quai trên màu đen trắng kem mũi tròn ulzzang hàn quốc CÓ SẴN",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Giày dép",
        product_name: "Sẵn Màu Trắng Nâu Dép Đế cói Giày Xăng Đan Sandals Đi Biển Đế Cói Cao Cấp Thêu Tay",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
    {
        img: anh1,
        sale: "sale",
        category_name: "Phụ kiện",
        product_name: "ten san pham",
        price_old: 200000,
        price: 145000,
    },
];

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Liked = () => {
    return (
        <div>
            <MenuHeader />
            <div className="mt-10 mx-auto">
                <div className='border-t-[1px] border-dashed w-2/5 mx-auto'></div>
                <div className="text-center mt-5">
                    <p className="text-2xl font-serif">Danh sách yêu thích của bạn</p>
                    <p className="text-[13px] text-[#555]">. . .</p>
                </div>
                <div className='pagination pagination-main mt-4'>
                    {items.map((item) => (
                        <div className='pagination-product'>
                            <div className='pagination-img h-fit'>
                                <Link to="/product/:id">
                                    <img src={item.img} alt="" className="h-[300px] w-[240px]" />
                                </Link>
                                <div className={item.sale === null ? "" : "sale"}>{item.sale}</div>
                                <div className="icon">
                                    <i className="icon_heart_alt">❤️</i>
                                </div>
                                <Link to="/product/:id">
                                    <p className='mt-2 h-[55px] font-sans font-normal overflow-hidden'>{item.product_name}</p>
                                </Link>
                                <div className="flex">
                                    <span className='font-semibold text-[#f79217]'>{formatPrice(item.price)}</span>
                                    <span className='text-[#888] line-through ml-2 text-xs mt-1'>{formatPrice(item.price_old)}</span>
                                </div>
                                <Form name='' className="mt-2">
                                    <Form.Item>
                                        <Select options={options} placeholder="Kích thước" className='focus:border-[#949392] hover:border-[#949392]' />
                                    </Form.Item>
                                    <Form.Item className='-mt-3' >
                                        <Select options={options} placeholder="Màu sắc" className='focus:border-[#949392] hover:border-[#949392]' />
                                    </Form.Item>
                                    <Form.Item className='-mt-3'>
                                        <Input
                                            type='number'
                                            placeholder='1'
                                            min={1}
                                            max={10}
                                            defaultValue={1}
                                            className='py-1.5 border-[1px] border-[#cac9c7] focus:border-[#949392] hover:border-[#949392]'
                                        ></Input>
                                    </Form.Item>
                                    <Button type='' htmlType='submit' className='w-full bg-[#e7ab3c] -mt-3 text-white font-semibold text-[15px]'>
                                        Thêm giỏ hàng
                                        {/* <LuSearch className="text-yellow-500 text-xl" /> */}
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Liked;