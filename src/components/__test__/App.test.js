import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
	const div = document.createElement('div');

	ReactDOM.render(<App />, div);
	// looks inside div and check if the comment box is in there
	expect(div.innerHTML).toContain('Comment Box');

	ReactDOM.unmountComponentAtNode(div);
});
