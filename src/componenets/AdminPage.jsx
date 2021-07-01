import React from 'react';
import { Route } from "react-router-dom"

class AdminPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div style={{ marginLeft: '20px'}}>
                <h1>Admin</h1>
                <p>This page can only be accessed by administrators.</p>
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

export default AdminPage;