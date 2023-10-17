import React from "react";
import "./styles.css";
import { useState } from "react";
const Buy = () => {
    const [show, setShow] = useState(true);

    return (
        <div class="cartBuy">
            <h2 class="cart__heading">Danh sách sản phẩm</h2>
            <div class="listCartBuy">
                <div class="itemBuy">
                    <img src="../assets/img/product/kid.jpg" />
                    <div class="contentBuy">
                        <div class="nameBuy">CoPilot / Black / Automatic</div>
                        <div class="priceBuy">$550 / 1 product</div>
                    </div>
                    <div class="quantityBuy">
                        <button>-</button>
                        <span class="valueBuy">3</span>
                        <button>+</button>
                    </div>
                </div>
            </div>

            <div class="buttons">
                <div class="closeBuy">Đóng cửa sổ</div>
                <div class="checkout">
                    <a href="./checkout.html">Thanh toán</a>
                </div>
            </div>
        </div>
    );
};

export default Buy;
