import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Currency from './Currency';

let container = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders currency name', () => {
    act(() => {
        render(<Currency currency='Euro' />, container);
    });
    expect(container.querySelector('.currency-name').textContent).toContain('Euro');
});
