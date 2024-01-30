import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import MenuHeader from '../layouts/menu_header';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../api';

const Login = () => {
    const handleLogin = async (data) => {
        // Send request to server
        const response = await toast.promise(
            login(data),
            {
                pending: 'Đang đăng nhập...',
                success: {
                render(){
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 3000);
                    return `Đăng nhập thành công! Bạn sẽ được chuyển hướng về trang chủ sau 3 giây.`;
                },
                // other options
                icon: "🟢",
                },
                error: 'Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin.'
            }
        );
    };

    return (
        <div>
            <MenuHeader />
            <Form
                name='normal_login'
                onFinish={handleLogin}
            >
                <p className='mb-2'>Nhập email</p>
                <Form.Item
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập email!',
                        },
                    ]}
                >
                    <Input
                        prefix={<MailOutlined  className='site-form-item-icon h-8' />}
                        placeholder='Email'
                        required
                    />
                </Form.Item>
                <p className='mb-2'>Nhập mật khẩu</p>
                <Form.Item
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className='site-form-item-icon' />}
                        type='password'
                        placeholder='Mật khẩu'
                        required
                    />
                </Form.Item>
                <Form.Item className='w-1/4'>
                    <Button type='primary' htmlType='submit' className='bg-black h-10 w-full mt-5 -mb-2'>
                        Đăng nhập
                    </Button>
                </Form.Item>
                <p>Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link></p>
            </Form>
        </div>
    );
};

export default Login;
