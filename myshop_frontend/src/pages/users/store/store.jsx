import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./store.css";
import axios from "axios";


import MenuHeader from "../../../component/layouts/menu_header";
import PaginatedItems from "../../../component/pagination/pagination";

// import { FaRegHeart, FaOpencart } from "react-icons/fa";
// import { Form, Input, Button } from 'antd';
// import { LuSearch } from "react-icons/lu";

const Store = () => {
    return (
        <div className="mb-20">
            <MenuHeader />

            <div className="border-t-[1px] border-dashed mt-10 w-2/5 mx-auto">   </div>
            <div className="text-center mt-5">
                <p className="text-3xl font-serif">CỬA HÀNG CỦA CHÚNG TÔI</p>
                <p className="text-[13px] text-[#555]">(121 sản phẩm)</p>
                <p className="text-[13px] text-[#555] w-4/5 mx-auto">
                    Phong cách của bạn là gì? Bạn là người tối giản và thích những món đồ cơ bản,
                    đời thường hay phong cách trẻ trung và lấy cảm hứng từ các ngôi sao K-pop và người nổi tiếng Hollywood?
                    Bất kẻ bạn đang theo đuổi phong cách thẩm mỹ nào, bộ sưu tập váy, áo sơ mi, quần jean, quần dài và váy của chúng tôi chính là thứ bạn đang tìm kiếm.
                </p>
                <p className="text-[13px] text-[#555]">. . .</p>

                {/* <div className="flex flex-row w-11/12 m-auto">
                    <Form name='search' className="flex m-auto mt-3">
                        <Form.Item name='' className="w-[500px]">
                            <Input
                                // prefix={<UserOutlined className='site-form-item-icon' />}
                                placeholder='Bạn cần gì ❣️'
                                className=" focus:border-yellow-500 hover:border-yellow-500"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type='' htmlType='submit' className=''>
                                <LuSearch className="text-yellow-500 text-xl" />
                            </Button>
                        </Form.Item>
                    </Form>

                    <div className="flex flex-row heart-icon float-right">
                        <Link to="/liked">
                            <FaRegHeart className="text-lg my-5" />
                        </Link>
                        <span>1</span>
                        <Link to="/cart">
                            <FaOpencart className="ml-3 text-xl my-5" />
                        </Link>
                        <span className="cart-icon">3</span>
                    </div>

                </div> */}
                <PaginatedItems itemsPerPage={20} />
            </div>
        </div>
    );
};
export default Store;