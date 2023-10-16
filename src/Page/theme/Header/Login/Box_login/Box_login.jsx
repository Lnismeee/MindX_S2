import React, { useState } from "react";

const Box_login = () => {
  const [render, SetRender] = useState("1");
  return (
    <div className="box-login">
      <div className="box-login-left">
        <img
          src="https://bizweb.dktcdn.net/100/488/521/themes/913255/assets/shop_logo_image.png?1695187373377"
          alt="ImgLogo"
        />
        <p
          onClick={() => {
            SetRender(1);
          }}
        >
          Đăng nhập
        </p>
        <p
          onClick={() => {
            SetRender(2);
          }}
        >
          Quên mật khẩu
        </p>
        <p
          onClick={() => {
            SetRender(3);
          }}
        >
          Đăng ký
        </p>
      </div>
      <div className="box-login-right">
        {render == 1 && (
          <div className="dn">
            <h2>ĐĂNG NHẬP</h2>
          </div>
        )}
        {render == 2 && (
          <div className="qmk">
            <h2>QUÊN MẬT KHẨU</h2>
          </div>
        )}
        {render == 3 && (
          <div className="dk">
            <h2>ĐĂNG KÍ</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Box_login;
