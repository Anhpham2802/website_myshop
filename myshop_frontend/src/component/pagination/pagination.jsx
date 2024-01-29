import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import anh1 from "../../assets/users/1.1.jpg";
import anh2 from "../../assets/users/1.2.jpg";
import anh4 from "../../assets/users/bianho4.png";
import anh3 from "../../assets/users/1.3.jpg";
import anh5 from "../../assets/users/myshop.png";
import formatPrice from "../../utils/formater";

import "./pagination.css";
import { Link } from 'react-router-dom';

// Example items, to simulate fetching from another resources.
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

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <div className='pagination-product'>
                            <div className='pagination-img h-[375px]'>
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
                                <span className='font-semibold'>{formatPrice(item.price)}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>
            <div className="flex mt-16">
                <button className='w-[10%]'>1
                </button>
                <button className='w-[10%]'>1
                </button>
                <button className='w-[10%]'>1
                </button>
            </div>
            <div className='pagination pagination-main mt-4'>
                <Items currentItems={currentItems} />
                <br />
                <div className='mt-5'>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        className='flex'
                    />
                </div>
            </div>
        </div>
    );
}

export default PaginatedItems;
// Add a <div id="container"> to your HTML to see the component rendered.
// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById('container')
// );