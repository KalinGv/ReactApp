import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import TttPage from "./TttPage/TttPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                <Route path="/ttt" component={TttPage} />
                <Route component={PageNotFound} />
            </Switch>
            <ToastContainer autoClose={3000} hideProgressBar />


        </div>
    );
}

export default App;