/* eslint react/jsx-no-bind: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                    {
                        this.props.ideas && this.props.ideas.map((idea, index) => {
                            return (
                                <tr key={ index }>
                                    <td>[ ]</td>
                                    <td>{ idea.text }</td>
                                    <td>{ idea.rating }</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    ideas: PropTypes.array
};

export default Table;
