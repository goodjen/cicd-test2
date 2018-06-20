import React, { Component } from 'react';

class ScorePage extends Component {
    render() {
        return (
            <div className="page">
                <div className="page-content box">
                    <h2 >Evaluation<hr /></h2>

                    <div className="row align-center" style={{height: '20vh'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Last Update</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Checkout</td>
                                    <td>5.24.18</td>
                                    <td>92%</td>
                                </tr>
                                <tr>
                                    <td>Cart</td>
                                    <td>5.3.18</td>
                                    <td>83%</td>
                                </tr>
                                <tr>
                                    <td>Image Loading</td>
                                    <td>4.24.18</td>
                                    <td>60%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ScorePage;
