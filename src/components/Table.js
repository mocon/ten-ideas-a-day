/* eslint react/jsx-no-bind: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th className="text-center">+/-</th>
                        <th>Idea</th>
                        <th className="text-center">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.ideas && this.props.ideas.map((idea) => {
                            return (
                                <tr key={ idea.id }>
                                    <td className="text-center">[ ]</td>
                                    <td>{ idea.text }</td>
                                    <td className="text-center">{ idea.rating }</td>
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
