import { Link } from "react-router-dom";
import MenuHeader from "../../component/layouts/menu_header";
import { Form, Input } from 'antd';

const Profile = () => {

    return (
        localStorage.getItem('refresh_token') === null ? (
            <div className="text-center mt-10">
                <p className="text-xl">Vui lòng đăng nhập để xem thông tin cá nhân</p>
                <Link to="/login" className="w-fit px-5 py-2 text-white font-medium rounded-sm bg-[#6b7c88] hover:bg-[#7b8a94]">Đăng nhập</Link>
            </div>
        ) : (
            <>
                <MenuHeader />
                <div className="mt-10">
                    <p className="text-xl font-serif">THÔNG TIN CÁ NHÂN</p>
                    <div className='border-t-[1px] my-2 mx-auto'></div>
                </div>
                <div className="mx-auto w-2/3 text-[#444] mt-2">
                    <p>Tên tài khoản</p>
                    <div className="w-2/4 h-[40px] border-[1px] border-[#cac6c6] pt-2 pl-5 mt-1 mb-2 text-[14px] text-[#616060]">{localStorage.getItem('full_name')}</div>
                    <p>Email</p>
                    <div className="w-2/4 h-[40px] border-[1px] border-[#cac6c6] pt-2 pl-5 mt-1 mb-2 text-[14px] text-[#616060]">{localStorage.getItem('email')}</div>
                    <p>Số điện thoại</p>
                    <div className="w-2/4 h-[40px] border-[1px] border-[#cac6c6] pt-2 pl-5 mt-1 mb-2 text-[14px] text-[#616060]">0847689544</div>
                    <p className="flex mb-10">Sinh nhật : <span className="text-[14px] mt-0.5 ml-5">28 / 02 / 2001</span> </p>

                    <Link to="" className=" w-fit px-5 py-2 text-white font-medium rounded-sm bg-[#6b7c88] hover:bg-[#7b8a94]">Sửa thông tin</Link>
                    {/* { <Form > 
                        <Form.Item>
                            <Input
                                placeholder={'Nguyễn Văn A'}
                                defaultValue={'Nguyễn Văn A'}
                                className="w-2/4 h-[40px] border-[1px] border-[#cac6c6] mt-1 mb-2"
                            >
                            </Input>
                        </Form.Item> 
                    </Form> } */}

                </div>
            </>
        )
    )
}

export default Profile;
