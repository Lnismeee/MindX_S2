import React from "react";
import "./styles.css";
const Home_footer = () => {
    const card = [
        {
            id: 1,
            img: "https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377",
            name: "Gợi ý đồ chơi phát triển vận động cho bé 0 - 6 tuổi đảm bảo an toàn ",
            day: "18.05.2023",
            desc: "Giải mã gen là công cụ kiểm tra thể chất và tiềm năng bẩm sinh để mở khóa tối đa tiềm năng trong trẻ. Ba mẹ nào có con nhỏ đang mong muốn xây dựng kế hoạch dinh dưỡng và vận động hợp lý, thì hãy theo dõi ngay những thông tin quan trọng về các công dụng tuyệt vời của giải mã gen mà Con Cưng đã tổng hợp được trong bài viết sau nhé! ",
        },
        {
            id: 2,
            img: "https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377",
            name: "Vệ sinh máy hút sữa khi mới mua",
            day: "18.05.2023",
            desc: "Giải mã gen là công cụ kiểm tra thể chất và tiềm năng bẩm sinh để mở khóa tối đa tiềm năng trong trẻ. Ba mẹ nào có con nhỏ đang mong muốn xây dựng kế hoạch dinh dưỡng và vận động hợp lý, thì hãy theo dõi ngay những thông tin quan trọng về các công dụng tuyệt vời của giải mã gen mà Con Cưng đã tổng hợp được trong bài viết sau nhé! ",
        },
        {
            id: 3,
            img: "https://bizweb.dktcdn.net/thumb/grande/100/488/521/themes/913255/assets/home_main_slider_banner_image_1.jpg?1695187373377",
            name: "6 lợi ích bất ngờ từ đồ chơi thông minh cho bé",
            day: "18.05.2023",
            desc: "Giải mã gen là công cụ kiểm tra thể chất và tiềm năng bẩm sinh để mở khóa tối đa tiềm năng trong trẻ. Ba mẹ nào có con nhỏ đang mong muốn xây dựng kế hoạch dinh dưỡng và vận động hợp lý, thì hãy theo dõi ngay những thông tin quan trọng về các công dụng tuyệt vời của giải mã gen mà Con Cưng đã tổng hợp được trong bài viết sau nhé! ",
        },
    ];
    return (
        <>
            <div className="home__footer">
                <h2 className="home__footer--heading">Kiến thức cho mẹ</h2>
                <div className="home__footer1">
                    {card.map((item) => (
                        <div key={item.id} className="home__footer--card">
                            <a href="/">
                                <img src={item.img} alt="" />
                            </a>
                            <div className="home__footer--desc">
                                <a href="/">
                                    <h3>{item.name}</h3>
                                </a>
                                <p>{item.day}</p>
                                <span>{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home_footer;
