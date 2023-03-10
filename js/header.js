let header = document.getElementsByTagName("header")[0]

header.innerHTML = `
<div class="top-header">
<a href="./index.html"><img src="./Images/bm-logo.png" width="100px"></a>

<div  class="Search-content">
    <input id="search" type="text" onkeypress="ESearch(event)"  name="search" autocomplete="off" placeholder="Nhập nôi dung tìm kiếm">
    <!-- <ul class="search-result">

    </ul> -->
    <button type="button"  id="search-icon"><i class="fa fa-search"></i></button>
</div>
<div class="icon" id="login">
    <a href="./login.html"><i class="fa-thin fa-user"></i></a>
</div>
</div>
<div class="nav-container">
<nav class="navbar">
    <ul class="ul-nav">
        <li class="btn-square " id="home"><a class="" href="./index.html">NÓNG</a></li>
        <li><a class="btn-square" id="new" href="./newNews.html">MỚI</a></li>
        <li><a class="btn-square" href="#">VIDEO</a></li>
        <li><a class="btn-square" href="#">CHỦ ĐỀ</a></li>

        <li><a class="btn-radius" href="#">Năng lượng tích cực</a></li>
        <li><a class="btn-radius" href="#">Khám phá Việt Nam</a></li>
        <li><a class="btn-radius" href="#">Khám phá thế giới</a></li>
        <li class="icon-dropdown" id="dropdown"><i class="fa fa-block-quote "></i></li>
    </ul>
</nav>
<div class="nav-supper dropsupport">
    <div class="nav-area">
        <div style="overflow: hidden;">
            <div class="nav-path display-none">
                <a href="#" class="header-path other-path ">
                    <i class="fa-light fa-location-dot"></i>
                    Tin quanh ta
                    <select name="location" id=""
                        style="float: right; border:none; background-color: #f3f3f3;">
                        <option value="">chọn địa phương</option>
                        <option value="">Hà Nội</option>
                        <option value="">Hà Nội</option>
                        <option value="">Hà Nội</option>
                        <option value="">Hà Nội</option>
                    </select></a>
                <a href="#" class="header-path display-none other-path">
                    BÓNG ĐÁ
                    <i style="display: inline-block; float: right;" class="fa-light fa-futbol"></i>
                </a>
                <a href="#" class="header-path display-none other-path">
                    TIỆN ÍCH
                    <i style="display: inline-block; float: right;" class="fa-light fa-cloud-bolt-sun"></i>
                </a>
                <a href="#" class="header-path display-none other-path">
                    AUDIO
                    <i style="display: inline-block; float: right;" class="fa-light fa-microphone"></i>
                </a>
            </div>
            <div class="nav-path">
                <a href="" class="header-path">THẾ GIỚI</a>
                <ul class="ul-nav-path">

                </ul>
            </div>

            <div class="nav-path">
                <a href="./social.html" class="header-path">XÃ HỘI</a>
                <ul class="ul-nav-path">
                    <li><a class="a-nav-path">Thời sự</a></li>
                    <li><a class="a-nav-path">Giao thông</a></li>
                    <li><a class="a-nav-path">Môi trường - Khí hậu</a></li>
                </ul>
            </div>

            <div class="nav-path">
                <a href="#" class="header-path">VĂN HÓA</a>
                <ul class="ul-nav-path">
                    <li><a class="a-nav-path">Nghệ thuật</a></li>
                    <li><a class="a-nav-path">Ẩm thực</a></li>
                    <li><a class="a-nav-path">Du lịch</a></li>
                </ul>
            </div>

            <div class="nav-path">
                <a href="#" class="header-path">KINH TẾ</a>
                <ul class="ul-nav-path">
                    <li><a class="a-nav-path">Lao động - Việc làm</a></li>
                    <li><a class="a-nav-path"></a>Tài chính</li>
                    <li><a class="a-nav-path"></a>Chứng khoán</li>
                    <li><a class="a-nav-path">Kinh doanh</a></li>
                </ul>
            </div>

            <div class="nav-path">
                <a href="#" class="header-path">GIÁO DỤC</a>
                <ul class="ul-nav-path">
                    <li><a class="a-nav-path">Học bổng - Du lịch</a></li>
                    <li><a class="a-nav-path">Đào tạo - Thi cử</a></li>
                </ul>
            </div>

            <div class="nav-path">
                <a href="#" class="header-path">THỂ THAO</a>
                <ul class="ul-nav-path">
                    <li><a class="a-nav-path">Bóng đá quốc tế</a></li>
                    <li><a class="a-nav-path">Bóng đá Việt Nam</a></li>
                    <li><a class="a-nav-path">Quần vợt</a></li>
                    <li><a class="a-nav-path">Lịch thi đấu</a></li>
                </ul>
            </div>

            <div class="nav-path">
                <a href="#" class="header-path">GIẢI TRÍ</a>
                <ul class="ul-nav-path">
                    <li><a class="a-nav-path">Âm nhạc</a></li>
                    <li><a class="a-nav-path">Thời trang</a></li>
                    <li><a class="a-nav-path">Điện ảnh - Truyền hình</a></li>
                </ul>
            </div>

            <div class="nav-path">
                <a href="#" class="header-path">PHÁP LUẬT</a>
                <ul class="ul-nav-path">
                    <li><a class="a-nav-path">An ninh trật tự</a></li>
                    <li><a href="#" class="a-nav-path">Hình sự dân sự</a></li>
                </ul>
            </div>
            <div class="nav-path">
                <a href="#" class="header-path">CÔNG NGHỆ</a>
                <ul class="ul-nav-path">
                    <li><a class="a-nav-path">CNTT - viễn thông</a></li>
                    <li><a href="#" class="a-nav-path">Thiết bị phân cứng</a></li>
                </ul>
            </div>
            <div class="nav-path">
                <a href="#" class="header-path">KHOA HỌC</a>
                <ul class="ul-nav-path">

                </ul>
            </div>
            <div class="nav-path">
                <a href="#" class="header-path">ĐỜI SỐNG</a>
                <ul class="ul-nav-path">
                    <li><a class="a-nav-path">Dinh dưỡng - làm đẹp</a></li>
                    <li><a href="#" class="a-nav-path">Tình yêu - hôn nhân</a></li>
                    <li><a href="#" class="a-nav-path">Sức khỏe - y tế</a></li>
                </ul>
            </div>
            <div class="nav-path">
                <a href="#" class="header-path">XE CỘ</a>
                <ul class="ul-nav-path">

                </ul>
            </div>
            <div class="nav-path">
                <a href="#" class="header-path">NHÀ ĐẤT</a>
                <ul class="ul-nav-path">
                    <li><a class="a-nav-path">Quản lí quy hoạch</a></li>
                    <li><a href="#" class="a-nav-path">Không gian kiến trúc</a></li>
                </ul>
            </div>
            <div class="btn-close-drop" style="">ĐÓNG</div>
        </div>
        
        <div style="clear: both;"></div>
        
    </div>
</div>
</div>
<div class="bm_CX"><div class="bm_BA"><form><div class="bm_CY"><input type="text" placeholder="Nhập nội dung tìm kiếm" value=""><button class="bm_CJ undefined" tabindex="0" type="button"><i class="fa-light fa-magnifying-glass"></i></button></div></form></div></div>


`