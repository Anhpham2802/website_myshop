import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import MenuHeader from "../../../component/layouts/menu_header";
import { Button, Form, Input, Select } from 'antd';
import axios from "axios";
import { client } from "../../../api";
import { toast } from "react-toastify";

const Checkout = () => {
    const [citis, setCitis] = React.useState([]);
    const [districts, setDistricts] = React.useState([]);
    const [wards, setWards] = React.useState([]);
    const [data, setData] = React.useState([]);
    let [city, setCity] = React.useState(0);
    let [district, setDistrict] = React.useState(0);
    let [ward, setWard] = React.useState(0);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [cartData, setCartData] = React.useState([])

    useEffect(() => {
        client.get('/api/cart')
            .then(res => {
                setCartData(res.data);
            })
            .catch(err => {
                console.log(err);
            });

        axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then(res => {
                setData(res.data);
                if (res.status === 200) {
                    for (let i = 0; i < res.data.length; i++) {
                        setCitis(citis => [...citis, { label: res.data[i].Name, value: i }]);
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const onFinish = (values) => {
        client.post('/api/checkout', {
            phone: values.phone,
            city: data[values.city].Name,
            district: data[values.city].Districts[values.district].Name,
            ward: data[values.city].Districts[values.district].Wards[values.ward].Name,
            other_address: values.other_address,
            payment_method: values.payment_method === '1' ? 'Thanh toán trực tuyến' : 'Tiền mặt'
        })
        .then(res => {
            setTimeout(() => {
                toast.success('Đặt hàng thành công');
            }, 1000);
            navigate('/history_cart');
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        localStorage.getItem('refresh_token') === null ? (
            <div>
                <MenuHeader />
                <div className="text-center mt-10">
                    <p className="text-xl font-sans">Vui lòng đăng nhập để tiếp tục</p>
                    <Link to="/login" className="text-[#6b7c88] hover:text-[#7b8a94]">Đăng nhập</Link>
                </div>
            </div>
        ) : cartData.length !== 0 ? (
            <div>
                <MenuHeader />
                <div className="mt-10">
                    <p className="text-xl font-sans">Vui lòng điền đầy đủ thông tin người nhận</p>
                    <div className='border-t-[1px] my-2 mx-auto'></div>
                </div>
                <Form form={form} className="justify-center" layout="vertical" name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
                    <div className="mx-auto w-2/3 text-[#444] mt-2">
                    <p>Số điện thoại</p>
                        <Form.Item name="phone">
                            <Input
                                type="text"
                                length="10"
                                placeholder="Nhập số điện thoại"
                                className="w-2/4 h-[40px] border-[1px] border-[#cac6c6] mt-1 mb-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập số điện thoại!',
                                    },
                                ]}
                            >
                            </Input>
                        </Form.Item>

                        <p className="mb-2">Địa chỉ</p>
                        <div className="w-1/2">
                            <Form.Item
                                name='city'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn tỉnh thành!',
                                    },
                                ]}>
                                <Select options={citis} className="h-10" placeholder="Chọn tỉnh thành"
                                    onSelect={(value) => {
                                        setCity(value);
                                        setDistricts([]);
                                        setWards([]);
                                        for (let i = 0; i < data[value].Districts.length; i++) {
                                            setDistricts(districts => [...districts, { label: data[value].Districts[i].Name, value: i }]);
                                        }
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name='district'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn quận huyện!',
                                    },
                                ]}>
                                <Select options={districts} className="h-10" placeholder="Chọn quận huyện" 
                                    onSelect={(value) => {
                                        setDistrict(value);
                                        setWards([]);
                                        for (let i = 0; i < data[city].Districts[value].Wards.length; i++) {
                                            setWards(wards => [...wards, { label: data[city].Districts[value].Wards[i].Name, value: i }]);
                                        }
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name='ward'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn phường xã!',
                                    },
                                ]}>
                                <Select options={wards} className="h-10" placeholder="Chọn phường xã" 
                                    onSelect={(value) => {
                                        setWard(value);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item name="other_address">
                            <Input
                                type="text"
                                placeholder="Nhập địa chỉ thôn, xóm, số nhà, phố"
                                className="w-full h-[40px] border-[1px] border-[#cac6c6]"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập địa chỉ thôn, xóm, số nhà, phố!',
                                    },
                                ]}
                            >
                            </Input>
                        </Form.Item>

                            <p className="mb-2">Phương thức thanh toán</p>
                            <Form.Item
                                name='payment_method'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng phương thức thanh toán!',
                                    },
                                ]}>
                                <Select className="h-10 ">
                                    <Select.Option value="1" selected required> Thanh toán trực tuyến </Select.Option>
                                    <Select.Option value="2" selected required> Tiền mặt </Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                        <Button
                            type='primary'
                            htmlType="submit"
                            className='mt-2 h-[45px] w-2/4 bg-[#6b7c88] text-white font-semibold text-[17px] hover:bg-[#7b8a94]'
                        >
                            Đặt hàng
                        </Button>
                    </div>
                </Form>
            </div>
        ) : (
            <div>
                <MenuHeader />
                <div className="text-center mt-10">
                    <p className="text-xl font-sans">Giỏ hàng của bạn đang trống</p>
                    <Link to="/" className="text-[#6b7c88] hover:text-[#7b8a94]">Quay lại trang chủ</Link>
                </div>
            </div>
        )
    );
};

export default Checkout;
