import React from "react";
import MenuHeader from "../../../component/layouts/menu_header";
import PaginatedItems from "../../../component/pagination/pagination";

const Store = () => {
    return (
        <div className="mb-20">
            <MenuHeader />
            <div className="border-t-[1px] border-dashed mt-10 w-2/5 mx-auto">   </div>
            <div className="text-center mt-5">
                <p className="text-3xl font-serif">CỬA HÀNG CỦA CHÚNG TÔI</p>
                <p className="text-[13px] text-[#555]">(121 sản phẩm)</p>
                <p className="text-[13px] text-[#555] w-4/5 mx-auto">
                    Phong cách của bạn là gì? Bạn là người tối giản và thích những món đồ cơ bản,
                    đời thường hay phong cách trẻ trung và lấy cảm hứng từ các ngôi sao K-pop và người nổi tiếng Hollywood?
                    Bất kẻ bạn đang theo đuổi phong cách thẩm mỹ nào, bộ sưu tập váy, áo sơ mi, quần jean, quần dài và váy của chúng tôi chính là thứ bạn đang tìm kiếm.
                </p>
                <p className="text-[13px] text-[#555]">. . .</p>
                <PaginatedItems itemsPerPage={20} />
            </div>
        </div>
    );
};
export default Store;