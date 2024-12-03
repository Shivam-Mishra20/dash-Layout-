import React from 'react'
import Cards from './Cards';

const TotalCards = () => {
    const cardData = Array.from({ length: 24 }, (_, index) => ({
        companyName: `East Auto
`,
        contactName: `Patrick`,
        phoneNumber: `+18323314168`,
        date: '21-Oct -24',
        time: '9:45 PM',
        id: `77018`,
    }));

    return (
        <>
            {/* Grid for Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4  ">
                {cardData.map((card, index) => (
                    <Cards
                        key={index} // Add a unique key for each card
                        companyName={card.companyName}
                        contactName={card.contactName}
                        phoneNumber={card.phoneNumber}
                        date={card.date}
                        time={card.time}
                        id={card.id}
                    />
                ))}
            </div>
        </>
    )
}

export default TotalCards