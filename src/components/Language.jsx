import React from 'react';

export default function Language() {
    return (
        <div className='language-wrapper'>
            <form>
                <select size='1' required name='language[]'>
                    <option selected value='EN'>
                        EN
                    </option>
                    <option value='RU'>RU</option>
                    <option value='BY'>BY</option>
                </select>
            </form>
        </div>
    );
}
