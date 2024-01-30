import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Form
                name='normal_login'
            // className={styles.form}
            // form={form}
            // onFinish={onFinish}
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
                    <Input
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