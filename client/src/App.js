import React, {Component, Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/Header';
import MobilNav from './components/Nav/MobileNav';
import Backdrop from './components/ui/BackDrop';
import Main from './components/Main';
import Footer from './components/Footer';
import Routes from './routes';

const Loading = (<h1>Loading ...</h1>);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Header/>
                    <MobilNav/>
                    <Backdrop />
                    <Main>
                        <Suspense fallback={Loading}>
                            <Routes/>
                        </Suspense>
                    </Main>
                    <Footer/>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
