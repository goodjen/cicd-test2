import React from "react";
import { connect } from "react-redux";
import { fetchSres } from "./sresAction";

    class SresList extends React.Component {
        componentDidMount() {
                    this.props.dispatch(fetchSres());
                }

        renderSres(sre, index){
            return(
                <tr key={index}>
                    <td>{sre.id}</td>
                    <td>{sre.firstName}</td>
                    <td>{sre.lastName}</td>
                    <td>{sre.email}</td>
                </tr>
            )
        }

        render() {
                    const { error, loading, sres } = this.props;

                        if (error) {
                            return <div>Error! {error}</div>;
                        }

                        if (loading) {
                            return <div>Loading...</div>;
                        }

            return (
                <div className="row align-center" style={{height: '20vh'}}>
                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {sres.map(this.renderSres)}
                        </tbody>
                    </table>
                </div>
            );
                }
    }

const mapStateToProps = state => ({
        sres: state.sresPage.items,
        loading: state.sresPage.loading,
        error: state.sresPage.error
});

    export default connect(mapStateToProps)(SresList);
