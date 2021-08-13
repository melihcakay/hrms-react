import React from 'react'
import { routes } from "../Pages/Routes";
import {createBrowserHistory} from 'history'
import {Router, Route, Switch} from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import JobAdvertisementList from './JobAdvertisementList';
import RegisterSelector from '../Pages/RegisterSelector';
import LoginSelector from '../Pages/LogInSelector';
import CandidateRegister from '../Pages/CandidateRegister';
import EmployerRegister from '../Pages/EmployerRegister';
import CandidateLogIn from '../Pages/CandidateLogIn';
import EmployerLogIn from '../Pages/EmployerLogIn';
import EmployeeLogIn from '../Pages/EmployeeLogin';
import MainPage from '../Pages/MainPage';

const history = createBrowserHistory();

class MainContent extends React.Component {

    constructor(props) {
        super(props);
        return;
    }


    handlePageChange = (activePage) => {
        history.push(activePage)
    }



    render() {

        const {jobAdvertisement,
            registerSelector,
            loginSelector,
            candidateRegister, 
            employerRegister,
            candidateLogin,
            employerLogin,
            employeeLogin,
            mainPage
        } = routes;

        return (
            <div className="MainContent"> 

                <Router history={history}>
                    <Switch>
                        <Route exact path={jobAdvertisement.path}>
                            <JobAdvertisementList handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={registerSelector.path}>
                            <RegisterSelector handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={loginSelector.path}>
                            <LoginSelector handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={candidateRegister.path}>
                            <CandidateRegister handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={employerRegister.path}>
                            <EmployerRegister handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={candidateLogin.path}>
                            <CandidateLogIn handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={employerLogin.path}>
                            <EmployerLogIn handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={employeeLogin.path}>
                            <EmployeeLogIn handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route exact path={mainPage.path}>
                            <MainPage handlePageChange={this.handlePageChange}/>
                        </Route>
                
                
                    </Switch>
                </Router>
            
            
            </div>
        )
    }



    
  }

export default MainContent; 