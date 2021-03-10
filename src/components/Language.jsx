import React from 'react';

export default function Language() {
    return (
        <div className='language-wrapper'>
            <select size='1' required name='language[]'>
                <option value='EN'>EN</option>
                <option value='RU'>RU</option>
                <option value='BY'>BY</option>
            </select>
        </div>
    );
}
