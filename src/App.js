import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Header } from "./components/Header/Header";
import { Registration } from "./components/Registration/Registration";
import { Home } from './components/Home/Home';
import { RouteGuard } from './components/common/RouteGuard';
import { Logout } from './components/Logout/Logout';
import { Catalog } from './components/Catalog/Catalog';
import { CreateFootballPlayer } from './components/CreateFootballPlayer/CreateFootballPlayer';

function App() {
    return (

        <AuthProvider>
            <div className="App">

                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Registration />} />
                        <Route path='/catalog' element={<Catalog />} />
                        {/* <Route path='/catalog/:gameId' element={<GameDetails />} /> */}



                        <Route element={<RouteGuard />}>
                            {/* <Route path='/catalog/:gameId/edit' element={
                                // <FootballPlayerOwner>
                                //     <EditFootballPlayer />
                                // </FootballPlayerOwner>
                            } /> */}
                            <Route path='/create' element={<CreateFootballPlayer />} />
                            <Route path='/logout' element={<Logout />} />
                        </Route>
                    </Routes>

                </main>
                <Footer />
            </div >
        </AuthProvider>

    );
}

export default App;
