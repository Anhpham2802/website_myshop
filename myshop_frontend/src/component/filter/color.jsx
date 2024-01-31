import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { Space } from 'antd';
import "./filter.css"

const items = [
    {
        key: '1',
        label: (<p className=''>Đen</p>),
        color: '#000000',
    },
    {
        key: '2',
        label: (<p className=''>Trắng</p>),
        background: '#FFFFFF',
    },
    {
        key: '3',
        label: (<p className=''>Hồng</p>),
        background: '#FFC0CB',
    },
    {
        key: '4',
        label: (<p className=''>Xanh</p>),
        background: '#00FFFF',
    },
    {
        key: '5',
        label: (<p className=''>Đỏ</p>),
        background: '#FF0000',
    },
    {
        key: '6',
        label: (<p className=''>Vàng</p>),
        background: '#FFFF00',
    },
    {
        key: '7',
        label: (<p className=''>Be</p>),
        background: '#F5F5DC',
    },
    {
        key: '8',
        label: (<p className=''>Ghi</p>),
        background: '#808080',
    },
]

const FilterColor = () => {
    return (
        <div className='flex border-y-[1px] py-1.5 px-3 w-fit mx-3'>
        <p className='mr-28'>Màu sắc</p>
            <Dropdown menu={{ items, }} trigger={['click']} className=''>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <DownOutlined className='w-[10px]' />
                    </Space>
                </a>
            </Dropdown>
        </div>
    )
}

export default FilterColor