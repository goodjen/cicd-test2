import React from "react";
import { connect } from "react-redux";
import { fetchApps } from "./appActions";

class AppList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchApps());
    }

    render() {
        const { error, loading, apps } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <ul>
                {apps.map(app =>
                    <li key={app.id}>{app.name}</li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    apps: state.appPage.items,
    loading: state.appPage.loading,
    error: state.appPage.error
});

export default connect(mapStateToProps)(AppList);