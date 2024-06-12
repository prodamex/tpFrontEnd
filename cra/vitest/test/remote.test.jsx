import React from 'react';
import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import Personnage from '../../remote/src/Personnage';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

test('renders Remote Msg', () => {
  const rendered = render(<Personnage text={'hey toi'} />);
  const h1 = rendered.container.querySelector('section');
  expect(h1).not.toBeNull();
  expect(h1.textContent).toContain('hey you');
});
