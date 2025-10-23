import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";
import { useState } from "react";

export interface BaiViet {
  id: number;
  tieuDe: string;
  tacGia: string;
  anh: string;
  noiDung: string;
  theLoai: string;
  ngay: string;
}

function App() {
  const [baiViet, setBaiViet] = useState<BaiViet[]>([
    {
      id: 1,
      tieuDe: "Công nghệ AI 2025 – Kỷ nguyên trí tuệ nhân tạo",
      tacGia: "Thịnh Nguyễn",
      anh: "https://placehold.co/300x180?text=AI",
      noiDung:
        "Trí tuệ nhân tạo (AI) đang định hình lại toàn bộ thế giới. Năm 2025 đánh dấu bước ngoặt với sự phát triển của AI tổng quát (AGI), giúp máy tính có khả năng học hỏi và suy nghĩ như con người. Nhiều công ty công nghệ đang đầu tư mạnh vào lĩnh vực này để tạo ra các hệ thống thông minh, hỗ trợ y tế, giáo dục và tự động hóa sản xuất.",
      theLoai: "Công nghệ",
      ngay: "23/10/2025",
    },
    {
      id: 2,
      tieuDe: "Khám phá Sapa – Thiên đường mây vùng Tây Bắc",
      tacGia: "Hà Phương",
      anh: "https://placehold.co/300x180?text=Sapa",
      noiDung:
        "Sapa là điểm du lịch nổi tiếng của Việt Nam với khí hậu mát mẻ quanh năm. Du khách đến đây không chỉ được ngắm nhìn ruộng bậc thang hùng vĩ mà còn được trải nghiệm văn hóa độc đáo của người H'Mông và Dao. Những món ăn đặc sản như thắng cố, cá suối nướng, và rượu táo mèo cũng là điểm nhấn không thể bỏ qua.",
      theLoai: "Du lịch",
      ngay: "20/10/2025",
    },
    {
      id: 3,
      tieuDe: "Ẩm thực Việt Nam – Hương vị không thể trộn lẫn",
      tacGia: "Ngọc Anh",
      anh: "https://placehold.co/300x180?text=Food",
      noiDung:
        "Ẩm thực Việt Nam là sự hòa quyện tinh tế giữa hương vị, màu sắc và văn hóa. Phở, bánh mì, bún chả hay gỏi cuốn là những món ăn được cả thế giới yêu thích. Điểm đặc biệt của ẩm thực Việt là sự cân bằng giữa vị ngọt, chua, cay, mặn và tươi ngon của nguyên liệu thiên nhiên.",
      theLoai: "Ẩm thực",
      ngay: "18/10/2025",
    },
    {
      id: 4,
      tieuDe: "Bí quyết sống khỏe mỗi ngày – Ăn uống và tập luyện",
      tacGia: "Minh Đức",
      anh: "https://placehold.co/300x180?text=Life",
      noiDung:
        "Sức khỏe là tài sản quý giá nhất của con người. Việc duy trì thói quen ăn uống lành mạnh, ngủ đủ giấc và tập thể dục đều đặn giúp tăng sức đề kháng, cải thiện tinh thần. Hãy dành ít nhất 30 phút mỗi ngày để vận động cơ thể, tránh xa các chất kích thích và duy trì tinh thần lạc quan.",
      theLoai: "Đời sống",
      ngay: "15/10/2025",
    },
    {
      id: 5,
      tieuDe: "Khám phá vũ trụ – Cuộc đua không gian mới",
      tacGia: "Hữu Long",
      anh: "https://placehold.co/300x180?text=Space",
      noiDung:
        "Con người chưa bao giờ ngừng tò mò về vũ trụ. Năm 2025, hàng loạt sứ mệnh vũ trụ mới được triển khai: SpaceX đưa người lên sao Hỏa, NASA khai thác năng lượng Mặt Trăng, và các vệ tinh AI được phóng lên để nghiên cứu khí hậu. Tất cả mở ra một kỷ nguyên khám phá không gian hoàn toàn mới.",
      theLoai: "Khác",
      ngay: "12/10/2025",
    },
    {
      id: 6,
      tieuDe: "Đà Lạt – Thành phố ngàn hoa",
      tacGia: "Bảo Trâm",
      anh: "https://placehold.co/300x180?text=DaLat",
      noiDung:
        "Đà Lạt là một trong những điểm đến du lịch nổi tiếng nhất Việt Nam. Không khí mát lạnh, cảnh sắc thơ mộng cùng với hàng ngàn loài hoa rực rỡ khiến nơi đây được mệnh danh là thành phố ngàn hoa. Ngoài ra, du khách còn có thể thưởng thức những món đặc sản như bánh căn, nem nướng và cà phê Arabica thơm nồng.",
      theLoai: "Du lịch",
      ngay: "10/10/2025",
    },
  ]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home baiViet={baiViet} setBaiViet={setBaiViet} />} />
        <Route path="/create" element={<PostForm baiViet={baiViet} setBaiViet={setBaiViet} />} />
        <Route path="/edit/:id" element={<PostForm baiViet={baiViet} setBaiViet={setBaiViet} />} />
        <Route path="/post/:id" element={<PostDetail baiViet={baiViet} setBaiViet={setBaiViet} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
