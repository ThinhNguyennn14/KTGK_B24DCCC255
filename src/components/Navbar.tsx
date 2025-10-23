import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#eee", padding: 10, display: "flex", gap: 16 }}>
      <Link to="/">Trang chủ</Link>
      <Link to="/create">Viết bài mới</Link>
    </nav>
  );
}
