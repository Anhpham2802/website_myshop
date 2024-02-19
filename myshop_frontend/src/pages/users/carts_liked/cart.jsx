import React from 'react';
import { Link } from 'react-router-dom';
import MenuHeader from '../../../component/layouts/menu_header';

import formatPrice from "../../../utils/formater";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from 'react-toastify';
import { client } from '../../../api';


const Cart = () => {
    const [data, setData] = React.useState([]);
    const [quantity, setQuantity] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(0);

    React.useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await client.get('/api/cart');
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCart();
    }, []);

    React.useEffect(() => {
        setQuantity(data.map((item) => item.quantity));

        var total = 0;

        for (let i = 0; i < data.length; i++) {
            if (data[i].product.discountPrice !== null) {
                total += data[i].product.discountPrice * data[i].quantity;
            } else {
                total += data[i].product.originPrice * data[i].quantity;
            }
            setTotalPrice(total);
        }

    }, [data]);

    const handleDeleteProduct = (id) => {
        client.post('/api/add_remove_cart_item'
        , {
            product_id: id,
            remove_from_cart: true
        })
        .catch(err => {
            console.log(err);
        })
        console.log("delete product id: ", id);
    }

    const Counter = (props) => {
        // Function is called everytime increment button is clicked
        const handleClick1 = () => {
            // Counter state is incremented
            setQuantity(quantity.map((item, index) => {
                if (index === props.index){
                    if (data[props.index].product.stock > item + 1) {
                        return item + 1
                    }
                    return item
                }
                return item
            }));
            if (data[props.index].product.discountPrice !== null) {
                setTotalPrice(totalPrice + data[props.index].product.discountPrice);
            } else {
                setTotalPrice(totalPrice + data[props.index].product.originPrice);
            }
            if (data[props.index].product.stock > quantity[props.index]) {
                client.post('/api/add_remove_cart_item', {
                    product_id: props.productId,
                    increment: true
                })
                .catch(err => {
                    console.log(err);
                })
            }
            else {
                toast.error('Số lượng sản phẩm trong kho không đủ');
            }
        };

        // Function is called everytime decrement button is clicked
        const handleClick2 = () => {
            // Counter state is decremented
            setQuantity(quantity.map((item, index) => index === props.index ? item - 1 : item));
            if (data[props.index].product.discountPrice !== null) {
                setTotalPrice(totalPrice - data[props.index].product.discountPrice);
            } else {
                setTotalPrice(totalPrice - data[props.index].product.originPrice);
            }
            
            if (totalPrice < 0) {
                setTotalPrice(0);
            }
            if (quantity[props.index] > 1) {
                client.post('/api/add_remove_cart_item', {
                    product_id: props.productId,
                    decrement: true
                })
                .catch(err => {
                    console.log(err);
                })
            }
        };

        if (quantity[props.index] < 1) {
            setQuantity(quantity.map((item, index) => index === props.index ? 1 : item));
        }
        return (
            <div>
                <div className="flex">
                    <button className="text-4xl px-2 mr-3 hover:text-[#e7ab3c]" onClick={handleClick2}>-</button>
                    <div className="mt-2.5">{quantity[props.index]}</div>
                    <button className="text-3xl px-2 ml-3 hover:text-[#e7ab3c]" onClick={handleClick1}>+</button>
                </div>
            </div>
        );
}

    return (
        localStorage.getItem('refresh_token') === null ? (
            <div>
                <MenuHeader />
                <div className="flex justify-center mt-10">
                    <p className="text-2xl font-serif">Giỏ hàng của bạn</p>
                </div>
                <div className="flex justify-center mt-10">
                    <p className="text-xl font-serif">Vui lòng đăng nhập để xem giỏ hàng của bạn</p>
                </div>
            </div>
        ) : (
            <div>
                <MenuHeader />
                <div className="mt-10">
                    <p className="text-2xl font-serif">Giỏ hàng của bạn</p>
                    <div className='border-t-[1px] border-dashed mx-auto'></div>
                </div>
                {data.length === 0 ? (
                    <div className="flex justify-center mt-10">
                        <p className="text-xl font-serif">Giỏ hàng của bạn đang trống</p>
                    </div>
                ) : (
                    <div className="flex mt-5">
                        <div className="mx-1 border-[1px] rounded-md border-[#edeceb] w-2/3">
                            <div className="flex border-b-[1px] justify-between border-[#edeceb] text-lg font-medium py-4 text-[#555555]">
                                <p className='mx-5 w-[60%]'>Sản phẩm có trong giỏ</p>
                                <p className=''>Số lượng</p>
                                <p className='w-[12%]'>Giá</p>
                            </div>
                            {data.map((item, index) => (
                                <div key={index} className="h-fit mx-7 mt-5 py-3 flex justify-between border-b-[1px] border-b-[#edeceb]">
                                    <img src={item.product.images[0].image} alt="" className='w-[100px] h-[120px]' />
                                    <div className="w-1/2 mx-4">
                                        <Link to={`/product/${item.product.id}`} className='font-thin mt-1 text-[17px] font-serif h-[50px] overflow-hidden'>{item.product.name}</Link>
                                        <p className='text-[#777] text-[13px] my-2'>Sản phẩm sẽ đến nơi từ 4 - 5 ngày</p>
                                        {item.size !== null ? (
                                            <p className='text-[#777] text-[13px] my-2'>Size: {item.size}</p>
                                        ) : null}
                                        {item.color !== null ? (
                                            <p className='text-[#777] text-[13px] my-2'>Màu: {item.color} {quantity[index]}</p>
                                        ) : null}
                                    </div>
                                    <Counter defaultValue={item.quantity} key={index} productId={item.product.id} index={index} />
                                    <div className='w-[12%] mt-2.5'>
                                        {item.product.discountPrice !== null ? (
                                            <>
                                                {formatPrice(item.product.discountPrice * quantity[index])}
                                                <p className='text-[#888] line-through ml-2 text-xs mt-1'>{formatPrice(item.product.originPrice * quantity[index])}</p>
                                            </>
                                        ) : (
                                            <>
                                                {formatPrice(item.product.originPrice * quantity[index])}
                                            </>
                                        )}
                                        <RiDeleteBin5Line className='text-red-500 mt-10 mx-auto cursor-pointer'
                                            onClick={() => {
                                                    toast.success('Xóa sản phẩm khỏi giỏ hàng thành công')
                                                    setData(data.filter((_, i) => i !== index))
                                                    handleDeleteProduct(item.product.id)
                                                }
                                            } 
                                        />
                                    </div>
                                </div>
                            ))}

                        </div>

                        <div className="w-1/3 mx-1 border-[1px] rounded-md border-[#edeceb] h-fit">
                            <div className="border-b-[1px] justify-between border-[#edeceb] text-lg font-medium py-4">
                                <p className='mx-5 text-[#555555]'>Tổng hóa đơn</p>
                            </div>
                            <div className="flex justify-between mx-10 py-5">
                                <p className='text-[#444444] font-medium'>Thành tiền</p>
                                <p className='text-[#444444] '>{formatPrice(totalPrice)}</p>
                            </div>
                            <div className="bg-[#6b7c88] hover:bg-[#788791] w-fit mx-auto px-16 py-2 text-white font-medium mt-5 mb-8"> <Link to="/checkout">Thanh toán</Link></div>
                        </div>
                    </div>
                )
                }
            </div>
        )
    )
}

export default Cart;
