import React from "react";
import "./styles.css";
const Home_footer = () => {
    const card = [
        {
            id: 1,
            img: "https://bizweb.dktcdn.net/thumb/medium/100/488/521/articles/5770445-2990168-1-1-8f803b2eeedb4ee2a707e391933e9ac9.jpg?v=1686567540437",
            name: "Gợi ý đồ chơi phát triển vận động cho bé 0 - 6 tuổi đảm bảo an toàn ",
            day: "18.05.2023",
            link: "https://www.kidsplaza.vn/blog/kinh-nghiem-ve-sinh-may-hut-sua-mua-moi-va-sau-khi-hut.html",
            desc: "Giải mã gen là công cụ kiểm tra thể chất và tiềm năng bẩm sinh để mở khóa tối đa tiềm năng trong trẻ. Ba mẹ nào có con nhỏ đang mong muốn xây dựng kế hoạch dinh dưỡng và vận động hợp lý, thì hãy theo dõi ngay những thông tin quan trọng về các công dụng tuyệt vời của giải mã gen mà Con Cưng đã tổng hợp được trong bài viết sau nhé! ",
        },
        {
            id: 2,
            img: "https://bizweb.dktcdn.net/thumb/medium/100/488/521/articles/3242819-469509-pgfx28-438-1-1-d09213ea61f44ae79c8ada2e27647776.jpg?v=1686567539883",
            name: "Vệ sinh máy hút sữa khi mới mua",
            day: "18.05.2023",
            link: "https://www.kidsplaza.vn/blog/kinh-nghiem-ve-sinh-may-hut-sua-mua-moi-va-sau-khi-hut.html",
            desc: "Hiện nay có rất nhiều các hãng máy hút sữa khác nhau nhưng chia làm 2 loại máy hút bằng tay và máy hút bằng điện mỗi loại có cách vệ sinh khác nhau nên mẹ cần chú ý tránh làm hỏng máy.",
        },
        {
            id: 3,
            img: "https://bizweb.dktcdn.net/thumb/medium/100/488/521/articles/32177694-7914155-1-1-071cf643922f4745b2c502a146dcb39a.jpg?v=1686567540380",
            name: "6 lợi ích bất ngờ từ đồ chơi thông minh cho bé",
            day: "18.05.2023",
            link: "https://www.mykingdom.com.vn/blog/nhung-loi-ich-bat-ngo-cua-do-choi-thong-minh-cho-be",
            desc: "Đồ chơi trẻ em theo định nghĩa đơn thuần là những món đồ có tác dụng giải trí, giúp trẻ vui chơi lành mạnh. Tuy nhiên với những món đồ chơi thông minh cho bé như bột nặn, đồ chơi lắp ráp LEGO, đồ chơi STEAM... còn mang lại nhiều lợi ích thiết thực khác.",
        },
    ];
    return (
        <>
            <div className="home__footer">
                <h2 className="home__footer--heading">Kiến thức cho mẹ</h2>
                <div className="home__footer1">
                    {card.map((item) => (
                        <div key={item.id} className="home__footer--card">
                            <a href={item.link}>
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
