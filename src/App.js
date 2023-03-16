import { Routes, Route } from 'react-router-dom';

import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Header } from "./components/Header/Header";
import { Registration } from "./components/Registration/Registration";
import { CreatePlayer } from './components/CreatePlayer/CreatePlayer';
import { Home } from './components/Home/Home';

function App() {
    return (
        <div className="App">

            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Registration />} />
                    <Route path='/create' element={<CreatePlayer />} />
                </Routes>

            </main>
            <Footer />
        </div >
    );
}

export default App;
