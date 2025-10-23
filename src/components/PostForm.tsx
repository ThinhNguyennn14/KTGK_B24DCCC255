import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BaiViet } from "../App";

interface PostFormProps {
  baiViet: BaiViet[];
  setBaiViet: React.Dispatch<React.SetStateAction<BaiViet[]>>;
}

export default function PostForm({ baiViet, setBaiViet }: PostFormProps) {
  const { id } = useParams();
  const nav = useNavigate();
  const laSua = Boolean(id);
  const bai = baiViet.find((b) => b.id === Number(id));

  const [tieuDe, setTieuDe] = useState<string>(bai?.tieuDe || "");
  const [tacGia, setTacGia] = useState<string>(bai?.tacGia || "");
  const [anh, setAnh] = useState<string>(bai?.anh || "");
  const [noiDung, setNoiDung] = useState<string>(bai?.noiDung || "");
  const [theLoai, setTheLoai] = useState<string>(bai?.theLoai || "Công nghệ");

  useEffect(() => {
    if (bai) {
      setTieuDe(bai.tieuDe);
      setTacGia(bai.tacGia);
      setAnh(bai.anh);
      setNoiDung(bai.noiDung);
      setTheLoai(bai.theLoai);
    }
  }, id, bai]);

  const handleSubmit = () => {
    if (tieuDe.trim().length < 10) return alert("Tiêu đề phải ít nhất 10 ký tự");
    if (tacGia.trim().length < 3) return alert("Tác giả phải ít nhất 3 ký tự");
    if (noiDung.trim().length < 50) return alert("Nội dung phải ít nhất 50 ký tự");

    if (laSua) {
      const capNhat = baiViet.map((b) =>
        b.id === Number(id)
          ? { ...b, tieuDe, tacGia, anh, noiDung, theLoai, ngay: new Date().toLocaleDateString() }
          : b
      );
      setBaiViet(capNhat);
      alert("Cập nhật thành công!");
      nav(`/post/${id}`);
    } else {
      const baiMoi: BaiViet = {
        id: baiViet.length + 1,
        tieuDe,
        tacGia,
        anh,
        noiDung,
        theLoai,
        ngay: new Date().toLocaleDateString(),
      };
      setBaiViet([...baiViet, baiMoi]);
      alert("Đăng bài thành công!");
      nav("/");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{laSua ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}</h2>
      <label>Tiêu đề:</label><br />
      <input value={tieuDe} onChange={(e) => setTieuDe(e.target.value)} style={{ width: 400 }} /><br />
      <label>Tác giả:</label><br />
      <input value={tacGia} onChange={(e) => setTacGia(e.target.value)} style={{ width: 400 }} /><br />
      <label>URL ảnh:</label><br />
      <input value={anh} onChange={(e) => setAnh(e.target.value)} style={{ width: 400 }} /><br />
      <label>Nội dung:</label><br />
      <textarea rows={10} value={noiDung} onChange={(e) => setNoiDung(e.target.value)} style={{ width: 400 }} /><br />
      <label>Thể loại:</label><br />
      <select value={theLoai} onChange={(e) => setTheLoai(e.target.value)} style={{ width: 200 }}>
        <option value="Công nghệ">Công nghệ</option>
        <option value="Du lịch">Du lịch</option>
        <option value="Ẩm thực">Ẩm thực</option>
        <option value="Đời sống">Đời sống</option>
        <option value="Khác">Khác</option>
      </select><br /><br />
      <button onClick={handleSubmit}>{laSua ? "Cập nhật" : "Đăng bài"}</button>
      <button onClick={() => nav(laSua ? `/post/${id}` : "/")}>Hủy</button>
    </div>
  );
}
