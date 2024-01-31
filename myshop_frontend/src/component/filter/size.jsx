import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { Space } from 'antd';

const items = [
    {
        key: '1',
        label: (<p className=''>XS</p>),
    },
    {
        key: '2',
        label: (<p className=''>S</p>),
    },
    {
        key: '3',
        label: (<p className=''>M</p>),
    },
    {
        key: '4',
        label: (<p className=''>L</p>),
    },
    {
        key: '5',
        label: (<p className=''>XL</p>),
    },
    {
        key: '6',
        label: (<p className=''>2XL</p>),
    },
]

const FilterSize = () => {
    return (
        <div className='flex border-y-[1px] py-1.5 px-3 w-fit mx-3'>
            <p className='mr-20'>Kích thước</p>
            <Dropdown menu={{ items, }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <DownOutlined className='w-[10px]' />
                    </Space>
                </a>
            </Dropdown>
        </div>
    )
}

export default FilterSize
