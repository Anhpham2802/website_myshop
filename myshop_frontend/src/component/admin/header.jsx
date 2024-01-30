import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { client } from "../../api";

import { Link } from "react-router-dom";

import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { Space } from 'antd';

const HeaderAdmin = () => {

    const getUserInfo = () => {
        client.get("/auth/users/me/").then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    const items = [
        {
            key: '1',
            label: (
                <p className=''>Logout</p>
            ),
        },
    ]

    return (
        <>
            <div className="w-11/12 h-[500] m-auto">
                <div className="border-b-[1px] border-b-slate-200">
                    <div className="w-11/12 m-auto pb-0.5 flex flex-row">
                        <div className="flex w-full flex-row justify-end">

                            <FaRegCircleUser className="my-[15px] ml-4" />
                            {/* <Link to="/login" className="m-2.5" onClick={getUserInfo}>Login</Link> */}

                            {/* sau khi dang nhap */}
                            <Link to="/profile" className="m-2.5">username</Link>
                            <Dropdown menu={{ items, }} trigger={['click']} className='my-auto border-[1px] rounded-full w-[25px] h-[25px] pl-1.5'>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <DownOutlined className='w-[10px]' />
                                    </Space>
                                </a>
                            </Dropdown>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderAdmin;
