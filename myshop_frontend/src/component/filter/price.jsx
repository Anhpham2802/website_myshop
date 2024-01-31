import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { Space } from 'antd';
import formatPrice from '../../utils/formater';

const items = [
    {
        key: '1',
        label: (<p className=''>Dưới {formatPrice(100000)}</p>),
    },
    {
        key: '2',
        label: (<p className=''>{formatPrice(100000)} - {formatPrice(200000)}</p>),
    },
    {
        key: '3',
        label: (<p className=''>{formatPrice(200000)} - {formatPrice(300000)}</p>),
    },
    {
        key: '4',
        label: (<p className=''>{formatPrice(300000)} - {formatPrice(400000)}</p>),
    },
    {
        key: '5',
        label: (<p className=''>{formatPrice(400000)} - {formatPrice(500000)}</p>),
    },
    {
        key: '6',
        label: (<p className=''>Trên {formatPrice(500000)}</p>),
    },
]

const FilterPrice = () => {
    return (
        <div className='flex border-y-[1px] py-1.5 px-3 w-fit mx-3'>
            <p className='mr-20'>Giá sản phẩm</p>
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

export default FilterPrice