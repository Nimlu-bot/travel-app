import React, { useState } from 'react';

function Quote() {
    let [quote, setQuote] = useState(0);
    const arrQuote = [
        'Ничто так не развивает ум, как путешествие» — Эмиль Золя.',
        '«Говорить на иностранном языке — значит завоевать его мир и культуру» — Франц Фанон.',
        '«Ничто так не развивает ум, как путешествие» — Эмиль Золя.',
        '«Путешествовать необходимо тем, кто учится» — Марк Твен.',
        '«Посмотри на мир. Он куда удивительнее cнов» — Рэй Брэдберри.',
        '«Инвестиции в поездки это инвестиции в себя» — Мэттью Карстен.',
        '«Жизнь — это либо отчаянное приключение, либо ничего» — Хеллен Келлер.',
        '«Дорога лучше всего измеряется не в милях, а в друзьях» — Тим Кэхилл.',
        '«Путешествия лишают тебя дара речи, а потом превращают в лучшего рассказчика» — Ибн Баттута.',
        '«Как же я люблю чувствовать себя безликим в городе, где я раньше никогда не был» — Билл Брайсон.',
    ];

    return (
        <div
            className='quote'
            onClick={() => {
                setQuote(quote < 9 ? quote + 1 : (quote = 0));
            }}
        >
            <p>{arrQuote[quote]}</p>
        </div>
    );
}
export default Quote;