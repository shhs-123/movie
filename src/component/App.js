import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Footer/footer";
import Items from "./Items/items";
import Landingpage from "./Landingpage/landingpage";
import Navbar from "./NavBar/navbar";
import Detail from "./Detail/Detail";   // 경로 추가
import ExTable from './example/ExTable';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        {/* 요청된 경로로 페이지 이동: 특정 컴포넌트 실행 */}
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/movie/:movieId" element={<Detail />} />
            <Route path="/items" element={<Items />} />
            <Route path="/example/table" element={<ExTable />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;