import React from 'react';
import { storiesOf } from '@storybook/react';
import Color from './Color';

storiesOf('Color', module)
	.add('black', () => <Color hex="#000000" />)
	.add('red', () => <Color hex="#ff0000" />);
