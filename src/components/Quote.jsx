import React, { useState } from 'react';
import { useLanguage } from './../context/LanguageContext';

function Quote() {
    const { language } = useLanguage();
    let [quote, setQuote] = useState(0);
    const arrQuote = {
        en: [
            'A man travels the world over in search of what he needs, and returns home to find it - Moore',
            'The man who goes out alone can start today; but he who travels with another must wait till that other is ready - Thoreau',
            'The world is a book, and those who do not travel, read only a page - Augustine, St.',
            'When at Rome, do as Romans do.',
            'Travel broadens the minds.',
            'To carry coals to Newcastle.',
            'Every country has its customs.',
            'Travel broadens the minds.',
            '"Only two things we will regret on deathbed – that we are a little loved and little traveled." - Mark Twain',
            '"Travel as the greatest science and serious science helps us to rediscover ourselves."- Albert Camus',
        ],
        ru: [
            'Ничто так не развивает ум, как путешествие — Эмиль Золя.',
            '«Говорить на иностранном языке — значит завоевать его мир и культуру» — Франц Фанон.',
            '«Ничто так не развивает ум, как путешествие» — Эмиль Золя.',
            '«Путешествовать необходимо тем, кто учится» — Марк Твен.',
            '«Посмотри на мир. Он куда удивительнее cнов» — Рэй Брэдберри.',
            '«Инвестиции в поездки это инвестиции в себя» — Мэттью Карстен.',
            '«Жизнь — это либо отчаянное приключение, либо ничего» — Хеллен Келлер.',
            '«Дорога лучше всего измеряется не в милях, а в друзьях» — Тим Кэхилл.',
            '«Путешествия лишают тебя дара речи, а потом превращают в лучшего рассказчика» — Ибн Баттута.',
            '«Как же я люблю чувствовать себя безликим в городе, где я раньше никогда не был» — Билл Брайсон.',
        ],
        ua: [
            'Ніщо так не розвиває розум, як подорож - Еміль Золя.',
            ' «Говорити на іноземній мові - значить завоювати його світ і культуру» - Франц Фанон.',
            ' «Ніщо так не розвиває розум, як подорож» - Еміль Золя.',
            ' «Подорожувати необхідно тим, хто вчиться» - Марк Твен.',
            ' «Подивися на світ. Він куди дивніше Знову »- Рей Бредберрі. ',
            ' «Інвестиції в поїздки це інвестиції в себе» - Меттью Карстен.',
            ' «Життя - це або відчайдушний пригода, або нічого» - Хеллен Келлер.',
            ' «Дорога найкраще вимірюється не в милях, а в друзях» - Тім Кехілл.',
            ' «Подорожі позбавляють тебе дару мови, а потім перетворюють в кращого оповідача» - ІбнБатута.',
            ' «Як же я люблю відчувати себе безликим в місті, де я раніше ніколи не був» - Білл Брайсон.',
        ],
    };

    return (
        <div
            className='quote'
            onClick={() => {
                setQuote(quote < 9 ? quote + 1 : (quote = 0));
            }}
        >
            <p>{arrQuote[language][quote]}</p>
        </div>
    );
}

export default Quote;
