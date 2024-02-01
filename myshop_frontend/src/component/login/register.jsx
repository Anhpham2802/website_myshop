import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
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
                        prefix={<MailOutlined className='site-form-item-icon h-8' />}
                        placeholder='Email'
                        required
                    />
                </Form.Item>
                <p className='mb-2'>Nhập tên tài khoản</p>
                <Form.Item
                    name='account'
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên tài khoản!',
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
                <p className='mb-2'>Nhập lại mật khẩu</p>
                <Form.Item
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Chưa đúng mật khẩu!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className='site-form-item-icon h-8' />}
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