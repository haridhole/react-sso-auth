import React from 'react';
import { Route } from "react-router-dom"

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div style={{ marginLeft: '20px'}}>
                <h1>Admin and User</h1>
                <p>This page can be accessed by admin and user.</p>
                <Route render={({ history }) => (
                    <button
                    variant="contained"
                    onClick={() => history.goBack()}
                    >
                    Back
                    </button>)}
                />
            </div>
        );
    }
}

export default HomePage;