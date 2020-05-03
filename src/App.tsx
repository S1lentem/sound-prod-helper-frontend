import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import NewsPage from './pages/news/index';
import MusicPage from './pages/music/index';
import DemoPage from './pages/demo/index';
import LabelsPage from './pages/labels/index';
import CommunnitiesPage from './pages/communities/index';
import HomePage from './pages/home/index';
import SignUpPage from './pages/signUp/index';
import { Routings } from './constants/Routings';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Route path={Routings.home} exact component={HomePage}/>
                <Route path={Routings.news} component={NewsPage}/>
                <Route path={Routings.music} component={MusicPage}/>
                <Route path={Routings.demo} component={DemoPage}/>
                <Route path={Routings.labels} component={LabelsPage}/>
                <Route path={Routings.communities} component={CommunnitiesPage}/>
                <Route path={Routings.signUp} component={SignUpPage}/>
            </Router>
        );
    }
}