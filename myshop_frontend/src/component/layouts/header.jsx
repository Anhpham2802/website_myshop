import React, { useEffect } from "react";
import "./style.css";
import myshop from "../../assets/users/myshop.png";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram, FaPinterestP } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { client, logout } from "../../api";

import { Link } from "react-router-dom";

import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { Space } from 'antd';
import { verifyToken } from "../../api";

const Header = () => {

    useEffect(() => {
        if (localStorage.getItem('refresh_token') != null) {
            verifyToken();
        }
    }, []);

    const items = [
        {
            key: '1',
            label: (
                <p className='' onClick={logout}>Logout</p>
            ),
        },
    ]

    return (
        <>
            <div className="w-11/12 h-[500] m-auto">
                <div className="border-b-[1px] border-b-slate-200">
                    <div className="w-11/12 m-auto pb-0.5 flex flex-row">
                        <Link to="/" className=" w-[10%] float-start mr-5 my-auto"><img src={myshop} alt="" /></Link>
                        {/* <a href="/" className=" w-[10%] float-start mr-5 my-auto"><img src={myshop} alt=""/></a> */}
                        <div className="w-full h-12 flex flex-row justify-between">
                            <div className="flex flex-row">
                                <div className="border-r-[1px] border-r-slate-200">
                                    <div className="flex flex-row my-2.5">
                                        <MdOutlineMarkEmailUnread className="mt-[5px]" />
                                        <p className="mx-2.5">Anhcherry2802@gmail.com</p>
                                    </div>
                                </div>
                                <BsTelephone className="my-[15px] ml-4" />
                                <p className="m-2.5">+84 123 456 789</p>
                            </div>

                            <div className="flex flex-row">
                                <div className="border-r-[1px] border-r-slate-200">
                                    <div className="flex flex-row my-[15px]">
                                        <LuFacebook className=" mx-2.5" />
                                        <SlSocialTwitter className=" mx-2.5" />
                                        <FaInstagram className=" mx-2.5" />
                                        <FaPinterestP className=" mx-2.5" />
                                    </div>
                                </div>
                                <FaRegCircleUser className="my-[15px] ml-4" />

                                {localStorage.getItem('refresh_token') == null ? (
                                    <Link to="/login" className="m-2.5">Login</Link>
                                ) : (
                                    <>
                                        <Link to="/profile" className="m-2.5">{localStorage.getItem('full_name')}</Link>
                                        <Dropdown menu={{ items, }} trigger={['click']} className='my-auto border-[1px] rounded-full w-[25px] h-[25px] pl-1.5'>
                                            <a onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                    <DownOutlined className='w-[10px]' />
                                                </Space>
                                            </a>
                                        </Dropdown>
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
