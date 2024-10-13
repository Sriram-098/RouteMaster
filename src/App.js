import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'
import './App.css';

const App=()=>(
<>
<BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> {/* Use element prop */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
 </BrowserRouter>
</>
)



export default App;
