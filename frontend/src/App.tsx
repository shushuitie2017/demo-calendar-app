import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import { ReservationsList } from './features/Reservations';
import { NotFound } from './components/NotFound';
const App = () =>{
    const onClickButton = () => {
        alert("アラート！");
    }
    const isLoggedIn: boolean = false;
    if (!isLoggedIn) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<ReservationsList />} />
                    <Route path='/test1' element={<ReservationsList />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        );
    }
    return (
        <div className="App">
            <header>
                <h1>Reservation App</h1>
            </header>
            <body>
                <ReservationsList/>
                <BrowserRouter>
                    <Routes>
                        <Route path='/test' element={<ReservationsList />} />
                        <Route path='/test1' element={<ReservationsList />}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
                <button onClick={onClickButton}>ボタン</button>
            </body>
        </div>
    );
}

export default App;
