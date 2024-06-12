import React from 'react';
import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import Message from '../../host/src/Message';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

test('renders Host Msg', () => {
    const rendered = render(<Message text={"salut toi from the host"}/>);
    const h1 = rendered.container.querySelector('section');
    expect(h1).not.toBeNull();
    expect(h1.textContent).toContain('salut toi from the host');
});