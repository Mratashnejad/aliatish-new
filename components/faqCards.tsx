'use client'
import { useRef, useState, useEffect } from "react";

const FaqsCard = (props) => {
    const answerElRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [answerHeight, setAnswerHeight] = useState('0px');
    const { faqsList, idx } = props;

    useEffect(() => {
        // Calculate the height of the content dynamically when open/closed
        const answerElH = answerElRef.current ? answerElRef.current.scrollHeight : 0;
        setAnswerHeight(isOpen ? `${answerElH}px` : '0px');
    }, [isOpen]);

    const handleOpenAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="space-y-3 mt-5 overflow-hidden border-b" key={idx}>
            <h4 
                className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium" 
                onClick={handleOpenAnswer}
            >
                {faqsList.q}
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                )}
            </h4>
            <div
                ref={answerElRef}
                className="duration-300 ease-in-out overflow-hidden transition-max-height"
                style={{ maxHeight: answerHeight }}
            >
                <div>
                    <p className="text-gray-500">{faqsList.a}</p>
                </div>
            </div>
        </div>
    );
};

export default FaqsCard;
