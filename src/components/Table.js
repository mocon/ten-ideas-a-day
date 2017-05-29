/* eslint react/jsx-no-bind: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ ideas }) => {
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
                    ideas && ideas.map((idea) => {
                        return (
                            <tr key={ idea.id }>
                                <td className="text-center">[ ]</td>
                                <td>{ idea.text }</td>
                                <td className="text-center">{ idea.rating } <span className="light">({ idea.votes })</span></td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

Table.propTypes = {
    ideas: PropTypes.array
};

export default Table;
