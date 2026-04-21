import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function RedirectToHtml({ fileName }) {
  useEffect(() => {
    window.location.replace(`/legacy_html/${fileName}`);
  }, [fileName]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectToHtml fileName="trang-chu-khach-hang.html" />} />

        <Route path="/home" element={<RedirectToHtml fileName="trang-chu-khach-hang.html" />} />
        <Route path="/cars" element={<RedirectToHtml fileName="danh-sach-xe.html" />} />
        <Route path="/cars/:carId" element={<RedirectToHtml fileName="chi-tiet-xe.html" />} />
        <Route path="/book/:carId" element={<RedirectToHtml fileName="thanh-toan.html" />} />
        <Route path="/payment-options" element={<RedirectToHtml fileName="chon-phuong-thuc-thanh-toan.html" />} />
        <Route path="/payment" element={<RedirectToHtml fileName="thanh-toan.html" />} />
        <Route path="/success" element={<RedirectToHtml fileName="thanh-cong-hop-dong-dien-tu.html" />} />
        <Route path="/history" element={<RedirectToHtml fileName="thanh-cong-hop-dong-dien-tu.html" />} />

        <Route path="/login" element={<RedirectToHtml fileName="dashboard-tong-quan-admin.html" />} />
        <Route path="/admin" element={<RedirectToHtml fileName="dashboard-tong-quan-admin.html" />} />
        <Route path="/admin/fleet" element={<RedirectToHtml fileName="quan-ly-doi-xe.html" />} />
        <Route path="/admin/orders" element={<RedirectToHtml fileName="quan-ly-hop-dong-cho-ky-so.html" />} />
        <Route path="/admin/delivery" element={<RedirectToHtml fileName="quan-ly-hop-dong-cho-ky-so.html" />} />
        <Route path="/admin/maintenance" element={<RedirectToHtml fileName="quan-ly-bao-duong.html" />} />
        <Route path="/admin/payments" element={<RedirectToHtml fileName="quan-ly-ke-toan-thanh-toan.html" />} />
        <Route path="/admin/contracts" element={<RedirectToHtml fileName="quan-ly-hop-dong-cho-ky-so.html" />} />
        <Route path="/admin/users" element={<RedirectToHtml fileName="quan-ly-nguoi-dung-phan-quyen.html" />} />
        <Route path="/admin/reports" element={<RedirectToHtml fileName="dashboard-tong-quan-admin.html" />} />

        <Route path="*" element={<RedirectToHtml fileName="trang-chu-khach-hang.html" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
