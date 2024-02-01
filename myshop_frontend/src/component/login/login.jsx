import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import MenuHeader from '../layouts/menu_header';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <MenuHeader />
            <Form
                name='normal_login'
                className="w-2/5 mx-auto mt-20"
            // form={form}
            // onFinish={onFinish}
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
                    <Input
                        prefix={<LockOutlined className='site-form-item-icon h-8' />}
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