import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../../api';

const Register = () => {
    const requestRegister = async (data) => {
        // Validate email
        const email = data.email;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Email không hợp lệ!');
            return;
        }

        // Check all fields are not empty or blank space
        const fields = ['first_name', 'last_name', 'email', 'username', 'password', 'password2'];
        for (const field of fields) {
            if (!data[field] || data[field].trim() === '') {
                toast.error('Vui lòng điền đầy đủ thông tin!');
                return;
            }
        }

        // Check username has >= 6 characters
        if (data.username.length < 6) {
            toast.error('Tên tài khoản phải có ít nhất 6 ký tự!');
            return;
        }

        // Check password has >= 8 characters
        if (data.password.length < 8 || data.password2.length < 8) {
            toast.error('Mật khẩu phải có ít nhất 8 ký tự!');
            return;
        }

        // Check password and password2 are the same
        if (data.password !== data.password2) {
            toast.error('Mật khẩu không khớp!');
            return;
        }

        // Send request to server
        const response = await toast.promise(
            register(data),
            {
              pending: 'Đang đăng ký...',
              success: {
                render(){
                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 3000);
                    return `Đăng ký thành công! Bạn sẽ được chuyển hướng về trang đăng nhập sau 3 giây.`;
                },
                // other options
                icon: "🟢",
              },
              error: 'Đăng ký thất bại! Vui lòng kiểm tra lại thông tin.'
            }
        );
    }

    return (
        <div>
            <Form
                name='normal_login'
                onFinish={requestRegister}
            >
                <p className='mb-2'>Nhập email</p>
                <Form.Item
                    name='first_name'
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập họ của bạn!',
                        },
                    ]}
                >
                    <Input 
                        prefix={<UserOutlined className='site-form-item-icon' />}
                        placeholder='Họ' />
                </Form.Item>
                <Form.Item
                    name='last_name'
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập tên của bạn!',
                        },
                    ]}
                >
                    <Input 
                        prefix={<UserOutlined className='site-form-item-icon' />}
                        placeholder='Tên' />
                </Form.Item>
                <Form.Item
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập email của bạn!',
                        },
                    ]}
                >
                    <Input
                        prefix={<MailOutlined className='site-form-item-icon h-8' />}
                        placeholder='Email'
                        required
                    />
                </Form.Item>
                <p className='mb-2'>Nhập tên tài khoản</p>
                <Form.Item
                    name='username'
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập tên tài khoản của bạn!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className='site-form-item-icon h-8' />}
                        placeholder='Tên tài khoản'
                        required
                    />
                </Form.Item>
                <p className='mb-2'>Nhập mật khẩu</p>
                <Form.Item
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập mật khẩu của bạn!',
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
                <p className='mb-2'>Nhập lại mật khẩu</p>
                <Form.Item
                    name='password2'
                    rules={[
                        {
                            required: true,
                            message: 'Nhập lại mật khẩu của bạn!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className='site-form-item-icon' />}
                        type='password'
                        placeholder='Nhập lại mật khẩu'
                        required
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' className='bg-black h-10 w-1/4 mt-5 -mb-2'>
                        Đăng Ký
                    </Button>
                </Form.Item>
                <div className="flex">Bạn đã có tài khoản?
                    <Link to="/login" className='ml-2'>Đăng nhập</Link>
                </div>
            </Form>
        </div>
    );
};

export default Register;
