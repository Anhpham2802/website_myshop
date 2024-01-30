import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
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
            <Form
                name='normal_login'
                onFinish={handleLogin}
            >
                <Form.Item
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className='site-form-item-icon' />}
                        placeholder='Email'
                    />
                </Form.Item>
                <Form.Item
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className='site-form-item-icon' />}
                        type='password'
                        placeholder='Mật khẩu'
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' className='bg-black'>
                        Đăng nhập
                    </Button>
                </Form.Item>
                <p>Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link></p>
            </Form>
        </div>
    );
};

export default Login;
