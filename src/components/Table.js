/* eslint react/jsx-no-bind: 0 */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>+/-</th>
                        <th>Idea</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>[ ]</td>
                        <td>Idea text goes here</td>
                        <td>91</td>
                    </tr>
                    <tr>
                        <td>[ ]</td>
                        <td>Idea text goes here</td>
                        <td>91</td>
                    </tr>
                    <tr>
                        <td>[ ]</td>
                        <td>Idea text goes here</td>
                        <td>91</td>
                    </tr>
                    <tr>
                        <td>[ ]</td>
                        <td>Idea text goes here</td>
                        <td>91</td>
                    </tr>
                    <tr>
                        <td>[ ]</td>
                        <td>Idea text goes here</td>
                        <td>91</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    // newIdea: PropTypes.string
};

export default Table;
