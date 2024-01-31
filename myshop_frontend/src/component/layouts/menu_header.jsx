import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify, FaRegHeart, FaOpencart, FaSearch } from 'react-icons/fa';
import { ROUTERS } from '../../utils/router';
import "../../pages/users/home/home.css"

const MenuHeader = () => {
    const [menus, setMenus] = useState([
        {
            name: "Tất cả sản phẩm",
            path: ROUTERS.USER.HOME,
            isShowSubmenu: false,
            child: [
                {
                    name: "Trang phục cho nữ",
                    path: ROUTERS.USER.WOMEN,
                },
                {
                    name: "Trang phục cho nam",
                    path: ROUTERS.USER.MEN,
                },
                {
                    name: "Trang phục trẻ em",
                    path: ROUTERS.USER.KID,
                },
                {
                    name: "Túi xách - Balo",
                    path: ROUTERS.USER.TUI_BALO,
                },
                {
                    name: "Giày dép",
                    path: ROUTERS.USER.GIAY_DEP,
                },
                {
                    name: "Phụ kiện thời trang",
                    path: ROUTERS.USER.PHU_KIEN,
                },
            ]
        },
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.STORE,
        },
        {
            name: "Yêu thích",
            path: ROUTERS.USER.LIKED,
        },
        {
            name: "Giỏ hàng",
            path: ROUTERS.USER.CART,
        },
        {
            name: "Lịch sử đơn hàng",
            path: ROUTERS.USER.HISTORY_CART,
        },
        {
            name: "Thông tin cá nhân",
            path: ROUTERS.USER.PROFILE,
        },
    ]);

    return (
        <>
            <div className="bg-yellow-600 h-[50px] py-0.5 mt-5">
                <div className="w-11/12 text-white h-full m-auto">
                    <ul className="flex flex-row justify-between">
                        {menus.map((menu, index) => (
                            <li key={index} className={index === 0 ? "flex flex-row border-r-[1px] relative border-r-slate-950 text-lg text-[#f0d699] hover:text-yellow-900 menu_dropdown" : "flex flex-row menu_dropdown relative border-r-[1px] border-r-slate-200 hover:text-yellow-900"}>
                                {index === 0 ? <FaAlignJustify className="mt-4 mr-[10px]" /> : ""}
                                <Link to={menu.path} className="mt-2.5 pr-10 font-semibold">{menu.name}</Link>
                                {
                                    menu.child && (
                                        <ul className="dropdown_content bg-yellow-600 block absolute text-[17px] w-[280px] z-[9] py-[10px] pl-[55px] mt-[48px] -ml-[56px] font-medium text-white transition-all invisible">
                                            {
                                                menu.child.map((child, indexChild) => (
                                                    <li key={`${index}-${indexChild}`} className="hover:text-[18px] hover:text-[#f0d699] mt-2">
                                                        <Link to={child.path}>{child.name}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MenuHeader;