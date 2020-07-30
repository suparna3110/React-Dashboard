import React  from "react";
import { Route } from "react-router-dom";
import {Dashboard} from "../screens";
import Layout from "./layout/index"

const Routing = () => {
    return (
        <div>
            <Route path="/" component={Dashboard} exact/>
            {/* <Route path="/dashboard" component={Dashboard} exact/> */}
            <Route path="/dashboard" render= {() => <Layout> <Dashboard/> </Layout>}exact/>
        </div>
        
    );
}

export default Routing;
