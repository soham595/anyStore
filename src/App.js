import React, {Component} from 'react';
import NavigationBar from "./navigationBar";
import Routes from "./routes";

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container">
                    <Routes/>
                </div>
            </div>
        );
    }
}

export default App;
