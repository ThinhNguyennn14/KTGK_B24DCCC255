import { useNavigate, useParams } from "react-router-dom";
import { BaiViet } from "../App";

interface PostDetailProps {
  baiViet: BaiViet[];
  setBaiViet: React.Dispatch<React.SetStateAction<BaiViet[]>>;
}

export default function PostDetail({ baiViet, setBaiViet }: PostDetailProps) {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();

  const bai = baiViet.find((b) => b.id === Number(id));

  if (!bai) {
    return <h3 style={{ padding: 20 }}>❌ Không tìm thấy bài viết!</h3>;
  }

  const xoaBai = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setBaiViet(baiViet.filter((b) => b.id !== Number(id)));
      alert("🗑️ Bài viết đã bị xóa!");
      nav("/");
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 10 }}>{bai.tieuDe}</h2>
      <img
        src={bai.anh}
        alt={bai.tieuDe}
        width={500}
        style={{ borderRadius: 8, marginBottom: 20 }}
      />
      <p><b>Tác giả:</b> {bai.tacGia}</p>
      <p><b>Thể loại:</b> {bai.theLoai}</p>
      <p><b>Ngày đăng:</b> {bai.ngay}</p>
      <p style={{ marginTop: 20, lineHeight: 1.6 }}>{bai.noiDung}</p>

      <div style={{ marginTop: 30, display: "flex", gap: 10 }}>
        <button onClick={() => nav("/")}>Quay lại</button>
        <button onClick={() => nav(`/edit/${bai.id}`)}>Chỉnh sửa</button>
        <button onClick={xoaBai}>Xóa bài viết</button>
      </div>
    </div>
  );
}
