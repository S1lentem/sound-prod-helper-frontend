import * as React from 'react';
import { Link } from 'react-router-dom';

import { LocalStorage } from '../../core/storage/LoaclSotrage';
import { StorageKeys } from '../../constants/StorageKeys';
import { IGlobalStorage } from 'src/core/interfaces/IGlobalStorage';
import { Routings } from '../../constants/Routings';

export default class Header extends React.Component {
    private readonly storage: IGlobalStorage = new LocalStorage();
    
    public render(){

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Sound Producer Helper</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to={Routings.home}>Home</Link>
                <Link className="nav-item nav-link" to={Routings.news}>News</Link>
                <Link className="nav-item nav-link" to={Routings.music}>Music</Link>
                <Link className="nav-item nav-link" to={Routings.demo}>Demo</Link>
                <Link className="nav-item nav-link" to={Routings.labels}>Labels</Link>
                <Link className="nav-item nav-link" to={Routings.communities}>Communities</Link>
                {this.storage.constainsKey(StorageKeys.userToken) ? (
                  <Link className="nav-item nav-link" to={Routings.signOut}>SignOut</Link> 
                ) : (
                <>
                  <Link className="nav-item nav-link" to={Routings.signUp}>SignUp</Link> 
                  <Link className="nav-item nav-link" to={Routings.signIn}>SignIn</Link> 
                </>
                )}
              </div>
            </div>
          </nav>
        );
    }
}