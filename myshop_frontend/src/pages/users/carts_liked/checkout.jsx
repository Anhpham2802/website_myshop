import { Link } from "react-router-dom";
import MenuHeader from "../../../component/layouts/menu_header";
import { Button, Form, Input, Select } from 'antd';
import axios from "axios";
// import "https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"

{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script> */}
const citis = document.getElementById('city');
const districts = document.getElementById("district");
const wards = document.getElementById("ward");

console.log(citis);
const Parameter = {
    url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
    method: "GET",
    responseType: "application/json",
};
const promise = axios(Parameter);
promise.then(function (result) {
    renderCity(result.data);
});

const renderCity = (data) => {
    for (const x of data) {
        citis.options[citis.options.length] = new Option(x.Name, x.Id);
    }
    citis.onchange = function () {
        districts.length = 1;
        wards.length = 1;
        if (this.value != "") {
            const result = data.filter(n => n.Id === this.value);

            for (const k of result[0].Districts) {
                districts.options[districts.options.length] = new Option(k.Name, k.Id);
            }
        }
    };
    districts.onchange = function () {
        wards.length = 1;
        const dataCity = data.filter((n) => n.Id === citis.value);
        if (this.value != "") {
            const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;

            for (const w of dataWards) {
                wards.options[wards.options.length] = new Option(w.Name, w.Id);
            }
        }
    };
}


const Checkout = () => {

    return (
        <div>
            <MenuHeader />
            <div className="mt-10">
                <p className="text-xl font-sans">Vui lòng điền đầy đủ thông tin người nhận</p>
                <div className='border-t-[1px] my-2 mx-auto'></div>
            </div>
            <Form >
                <div className="mx-auto w-2/3 text-[#444] mt-2">
                    <Form.Item>
                        <p>Số điện thoại</p>
                        <Input
                            type="tel"
                            name="phone"
                            placeholder="Nhập số điện thoại"
                            className="w-2/4 h-[40px] border-[1px] border-[#cac6c6] mt-1 mb-2"
                            required
                        >
                        </Input>
                    </Form.Item>

                    <p className="mb-2">Địa chỉ</p>
                    <div className="w-1/2">
                        <Form.Item id="city">
                            <Select className="h-10" placeholder="Chọn tỉnh thành">
                                <Select.Option value="" selected></Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Select className="h-10 " id="district" placeholder="Chọn quận huyện">
                                <Select.Option value="" selected></Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Select className="h-10 " id="ward" placeholder="Chọn phường xã">
                                <Select.Option value="" selected></Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                    {/* <div>
                        <select class="form-select form-select-sm mb-3" id="city" aria-label=".form-select-sm">
                            <option value="" selected>Chọn tỉnh thành</option>
                        </select>

                        <select class="form-select form-select-sm mb-3" id="district" aria-label=".form-select-sm">
                            <option value="" selected>Chọn quận huyện</option>
                        </select>

                        <select class="form-select form-select-sm" id="ward" aria-label=".form-select-sm">
                            <option value="" selected>Chọn phường xã</option>
                        </select>
                    </div> */}
                    {/* <Input
                            type="text"
                            name="phone"
                            placeholder="Nhập số điện thoại"
                            className="w-2/4 h-[40px] border-[1px] border-[#cac6c6] mt-1 mb-2"
                            required
                        >
                        </Input> */}
                    <p>Số điện thoại</p>
                    <p className="flex mb-10">Sinh nhật : <span className="text-[14px] mt-0.5 ml-5">28 / 02 / 2001</span> </p>

                    {/* <Link to="" className=" w-fit px-5 py-2 text-white font-medium rounded-sm bg-[#6b7c88] hover:bg-[#7b8a94]">Sửa thông tin</Link> */}
                    <Button type='' htmlType='submit' className='mt-2 h-[45px] w-2/4 bg-[#6b7c88] text-white font-semibold text-[17px] hover:bg-[#7b8a94]'>
                        Thêm giỏ hàng
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Checkout;
