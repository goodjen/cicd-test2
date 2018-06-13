import React from "react";
import { connect } from "react-redux";
import { fetchApps } from "./appActions";

class AppList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchApps());
    }

    renderApps(app, index){
        return(
            <tr key={index}>
                <td>{app.name}</td>
                <td>0</td>
                <td>0</td>
            </tr>
        )
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
            <div className="row align-center" style={{height: '20vh'}}>
                <table>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Last Updated</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                    {apps.map(this.renderApps)}
                    </tbody>
                </table>
            </div>
            //<ul>
             //   {apps.map(app =>
             //       <li key={app.id}>{app.name}</li>
             //   )}
            //</ul>
        );
    }
}

const mapStateToProps = state => ({
    apps: state.appPage.items,
    loading: state.appPage.loading,
    error: state.appPage.error
});

export default connect(mapStateToProps)(AppList);