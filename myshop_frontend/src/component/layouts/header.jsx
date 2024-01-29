import React from "react";
import "./style.css";
import myshop from "../../assets/users/myshop.png";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram, FaPinterestP } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { client } from "../../api";
import { Link } from "react-router-dom";

const Header = () => {

    const getUserInfo = () => {
        client.get("/auth/users/me/").then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <div className="w-11/12 h-[500] m-auto">
                <div className="border-b-[1px] border-b-slate-200">
                    <div className="w-11/12 m-auto pb-0.5 flex flex-row">
                        <Link to="/" className=" w-[10%] float-start mr-5 my-auto"><img src={myshop} alt=""/></Link>
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
                                <p className="m-2.5" onClick={getUserInfo}>Login</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
