import './App.css';
import {ReservePage, HomePage} from './pages/pages'
import {Header, Footer, CopyRights} from './components/components'
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/reserve-table" element={<ReservePage />}></Route>
          </Routes>

          <Footer  />
          <CopyRights />

      </BrowserRouter>
    </>
  );
}

export default App;
