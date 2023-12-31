import React from 'react';
import './board.css'; // Import the CSS file
import HeaderNews from "./header/header";

const News = () => {
  return (
    
    <div>
      <HeaderNews></HeaderNews>
      <div className='page-container'>
        <div className="row">
          <div className="grid-container">
            <div className="grid-item">
              <div className="img-container">
                <img src="..\src\assets\news_1.webp" alt="News 1" />
                <div className="magnifying-glass"></div>
              </div>
              <div className="text-container">
                <h2>Gợi ý đồ chơi phát triển vận động cho bé 0 - 6 tuổi đảm bảo an toàn và chất lượng</h2>
                <p className='date'>18.05.2023</p>
                <p className='info'>Giải mã gen là công cụ kiểm tra thể chất và tiềm năng bẩm sinh để mở khóa tối đa tiềm năng trong trẻ. Ba mẹ nào có con nhỏ đang mong muốn xây dựng kế hoạch dinh dưỡng và vận động hợp lý, thì hãy theo dõi ngay những thông tin quan trọng về</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="img-container">
                <img src="..\src\assets\news_2.webp" alt="News 2" />
                <div className="magnifying-glass"></div>
              </div>
              <div className="text-container">
                <h2>Vệ sinh máy hút sữa khi mới mua</h2>  
                <p className='date'>18.05.2023</p>
                <p className='info'>Giải mã gen là công cụ kiểm tra thể chất và tiềm năng bẩm sinh để mở khóa tối đa tiềm năng trong trẻ. Ba mẹ nào có con nhỏ đang mong muốn xây dựng kế hoạch dinh dưỡng và vận động hợp lý, thì hãy theo dõi ngay những thông tin quan trọng về</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="img-container">
                <img src="..\src\assets\news_3.webp" alt="News 3" />
                <div className="magnifying-glass"></div>
              </div>
              <div className="text-container">
                <h2>6 lợi ích bất ngờ từ đồ chơi thông minh cho bé</h2>
                <p className='date'>18.05.2023</p>
                <p className='info'>Giải mã gen là công cụ kiểm tra thể chất và tiềm năng bẩm sinh để mở khóa tối đa tiềm năng trong trẻ. Ba mẹ nào có con nhỏ đang mong muốn xây dựng kế hoạch dinh dưỡng và vận động hợp lý, thì hãy theo dõi ngay những thông tin quan trọng về</p>
              </div>
            </div>
            <div className="grid-item">
              <div className="img-container">
                <img src="..\src\assets\news_4.webp" alt="News 4" />
                <div className="magnifying-glass"></div>
              </div>
              <div className="text-container">
                <h2>Có nên mua xe đẩy em bé?</h2>        
                <p className='date'>18.05.2023</p>
                <p className='info'>Giải mã gen là công cụ kiểm tra thể chất và tiềm năng bẩm sinh để mở khóa tối đa tiềm năng trong trẻ. Ba mẹ nào có con nhỏ đang mong muốn xây dựng kế hoạch dinh dưỡng vàvận động hợp lý, thì hãy theo dõi ngay nhữngThông tin quan trọng về</p>
              </div>
            </div>
          </div>
          <div className="medium-boxes-container">
            <h3>ĐỪNG BỎ LỠ.</h3>
                <div className="medium-box">
                <div className="box-label">1</div>
                  <div className="box-content">
                    <div className="box-img-container">
                      <img src="..\src\assets\news_4.webp" alt="Image 1" />
                      <div className="magnifying-glass"></div>
                    </div>
                    <div className="box-text">
                      <p>Gợi ý đồ chơi phát triển vận động cho bé 0 - 6 tuổi đảm bảo an toàn và chất lượng</p>
                    </div>
                  </div>
                </div>
                <div className="medium-box">
                  <div className="box-label">2</div>
                  <div className="box-content">
                    <div className="box-img-container">
                      <img src="..\src\assets\news_1.webp" alt="Image 2" />
                      <div className="magnifying-glass"></div>
                    </div>
                    <div className="box-text">
                      <p>Vệ sinh máy hút sữa khi mới mua</p>
                    </div>
                  </div>
                </div>
                <div className="medium-box">
                  <div className="box-label">3</div>
                  <div className="box-content">
                    <div className="box-img-container">
                      <img src="..\src\assets\news_2.webp" alt="Image 3" />
                      <div className="magnifying-glass"></div>
                    </div>
                    <div className="box-text">
                      <p>6 lợi ích bất ngờ từ đồ chơi thông minh cho bé</p>
                    </div>
                  </div>
                </div>
            <div className="new-container">
              <h3>BẠN CẦN TƯ VẤN?</h3>
              <img className="new-container-image" src="src\assets\read.webp" alt="Image" />
          </div>    
          </div>


          {/* Add more dropdown sections as needed */}
        </div>
      </div>  
    </div>
  );
};

export default News;