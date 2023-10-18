import React, { useState } from "react";
import "./index.css";
const Box_login = () => {
  const [render, SetRender] = useState("1");
  const [gmail, setGmail] = useState("");
  const [mk, setMK] = useState("");
  const [tb, setTb] = useState("");
  const [fullname, setFullname] = useState("");
  const [name, setName] = useState("");
  const [sdt, setSdt] = useState("");
  function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }
  function ValidateSDT(inputText) {
    var sdtformat = /^(0[23456789][0-9]{8}|1[89]00[0-9]{4})$/;
    if (inputText.match(sdtformat)) {
      return true;
    } else {
      return false;
    }
  }

  const checkttin = () => {
    setTb("");
    if (gmail == "" || mk == "") {
      setTb("Nhập đầy đủ thông tin");
      return;
    }
    if (!ValidateEmail(gmail)) {
      setTb("Nhập sai định dạng gmail");
      return;
    }
  };
  const checkttin1 = () => {
    setTb("");
    if (gmail == "") {
      setTb("Nhập đầy đủ thông tin");
      return;
    }
    if (!ValidateEmail(gmail)) {
      setTb("Nhập sai định dạng gmail");
      return;
    }
  };
  const checkttin2 = () => {
    setTb("");
    if (mk == "" || gmail == "" || fullname == "" || name == "" || sdt == "") {
      setTb("Nhập đầy đủ thông tin");
      return;
    }
    if (!ValidateEmail(gmail)) {
      setTb("Nhập sai định dạng gmail");
      return;
    }
    if (!ValidateSDT(sdt)) {
      setTb("Nhập sai định dạng số điện thoại");
      return;
    }
  };
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
            <label htmlFor="gmail_dn">Email*</label>
            <div className="input_log">
              <input
                type="text"
                className="input_log1"
                id="gmail_dn"
                value={gmail}
                onChange={(e) => {
                  setGmail(e.target.value);
                }}
              />
            </div>
            <label htmlFor="mk_dn">Mật khẩu*</label>
            <div className="input_log">
              <input
                type="password"
                className="input_log1"
                id="mk_dn"
                value={mk}
                onChange={(e) => {
                  setMK(e.target.value);
                }}
              />
            </div>
            <div className="tb">{tb}</div>
            <button
              onClick={() => {
                checkttin();
              }}
            >
              ĐĂNG NHẬP
            </button>
            <div className="dnqua">
              <h2>Hoặc đăng nhập bằng:</h2>
              <img
                src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                alt=""
              />
              <img
                src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                alt=""
              />
            </div>
          </div>
        )}
        {render == 2 && (
          <div className="qmk">
            <h2>QUÊN MẬT KHẨU</h2>
            <label htmlFor="gmail_dn">Email*</label>
            <div className="input_log">
              <input
                type="text"
                className="input_log1"
                id="gmail_dn"
                value={gmail}
                onChange={(e) => {
                  setGmail(e.target.value);
                }}
              />
            </div>
            <div className="tb">{tb}</div>
            <button
              onClick={() => {
                checkttin1();
              }}
            >
              GỬI
            </button>
          </div>
        )}
        {render == 3 && (
          <div className="dk">
            <h2>ĐĂNG KÍ</h2>
            <label htmlFor="name_dk">Họ và tên*</label>
            <div className="input_log">
              <input
                type="text"
                className="input_log1"
                id="name_dk"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
            </div>
            <label htmlFor="fullname_dk">Tên*</label>
            <div className="input_log">
              <input
                type="text"
                className="input_log1"
                id="fullname_dk"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <label htmlFor="sdt_dk">Số điện thoại*</label>
            <div className="input_log">
              <input
                type="text"
                className="input_log1"
                id="sdt_dk"
                value={sdt}
                onChange={(e) => {
                  setSdt(e.target.value);
                }}
              />
            </div>
            <label htmlFor="gmail_dn">Email*</label>
            <div className="input_log">
              <input
                type="text"
                className="input_log1"
                id="gmail_dn"
                value={gmail}
                onChange={(e) => {
                  setGmail(e.target.value);
                }}
              />
            </div>
            <label htmlFor="mk_dn">Mật khẩu*</label>
            <div className="input_log">
              <input
                type="password"
                className="input_log1"
                id="mk_dn"
                value={mk}
                onChange={(e) => {
                  setMK(e.target.value);
                }}
              />
            </div>
            <div className="tb">{tb}</div>
            <button
              onClick={() => {
                checkttin2();
              }}
            >
              ĐĂNG KÝ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Box_login;
