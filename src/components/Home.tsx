import { useNavigate } from "react-router-dom";
import { BaiViet } from "../App";

interface HomeProps {
  baiViet: BaiViet[];
  setBaiViet: React.Dispatch<React.SetStateAction<BaiViet[]>>;
}

export default function Home({ baiViet, setBaiViet }: HomeProps) {
  const nav = useNavigate();

  const xoaBai = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setBaiViet(baiViet.filter((b) => b.id !== id));
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Tổng số bài viết: {baiViet.length}</h2>
      {baiViet.map((b) => (
        <div
          key={b.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: 6,
            padding: 12,
            marginBottom: 16,
          }}
        >
          <img src={b.anh} alt="" width={250} height={150} />
          <h3>{b.tieuDe}</h3>
          <p><b>Tác giả:</b> {b.tacGia}</p>
          <p><b>Thể loại:</b> {b.theLoai}</p>
          <p><b>Ngày:</b> {b.ngay}</p>
          <p>{b.noiDung.slice(0, 80)}...</p>
          <button onClick={() => nav(`/post/${b.id}`)}>Xem</button>
          <button onClick={() => nav(`/edit/${b.id}`)}>Sửa</button>
          <button onClick={() => xoaBai(b.id)}>Xóa</button>
        </div>
      ))}
    </div>
  );
}
