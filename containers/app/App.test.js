import React from 'react';
import MyApp from '../../pages/_app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
