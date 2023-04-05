import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { FootballPlayerProvider } from './contexts/FootballPlayerContext'

import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Header } from "./components/Header/Header";
import { Registration } from "./components/Registration/Registration";
import { Home } from './components/Home/Home';
import { RouteGuard } from './components/common/RouteGuard';
import { Logout } from './components/Logout/Logout';
import { Catalog } from './components/Catalog/Catalog';
import { CreateFootballPlayer } from './components/CreateFootballPlayer/CreateFootballPlayer';
import { PlayerDetails } from './components/PlayerDetails/PlayerDetails';
import { FootballPlayerOwner } from './components/common/FootballPlayerOwner';
import { EditPlayer } from './components/EditPlayer/EditPlayer';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

function App() {
    return (

        <AuthProvider>
            <FootballPlayerProvider>
                <div className="App">

                    <Header />

                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Registration />} />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/catalog/:playerId' element={<PlayerDetails />} />



                            <Route element={<RouteGuard />}>
                                <Route path='/catalog/:playerId/edit' element={
                                    <FootballPlayerOwner>
                                        <EditPlayer />
                                    </FootballPlayerOwner>
                                } />
                                <Route path='/create' element={<CreateFootballPlayer />} />
                                <Route path='/logout' element={<Logout />} />
                            </Route>
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>

                    </main>
                    <Footer />
                </div >
            </FootballPlayerProvider>
        </AuthProvider>

    );
}

export default App;
