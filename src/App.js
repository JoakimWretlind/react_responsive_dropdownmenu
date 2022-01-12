import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
import Navbar from './components/navbar/Navbar'
import { Home, Work, Contact, Development, Design, Consulting, Education } from './pages/index'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/work" exact element={<Work />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/services/development" exact element={<Development />} />
        <Route path="/services/design" exact element={<Design />} />
        <Route path="/services/consulting" exact element={<Consulting />} />
        <Route path="/services/education" exact element={<Education />} />
      </Routes>
    </>
  );
}

export default App;
