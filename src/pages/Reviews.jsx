import { useState } from 'react'
import { ReviewItems } from '../constants';

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % ReviewItems.length);
            setIsTransitioning(false);
        }, 300);
    };

    const handlePrev = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(
                (prevIndex) =>
                    (prevIndex - 1 + ReviewItems.length) % ReviewItems.length
            );
            setIsTransitioning(false);
        }, 300);
    };

    const {
        quote,
        name,
        position,
        clientImg,
        logoImg,
        mainImg,
        card1,
        subcard1,
        subcard2,
        card2,
        card3,

        subcard3,
    } = ReviewItems[currentIndex];

    return (
        <div className="lg:px-32 h-min-screen flex-col flex md:flex-row mt-[120px] mb-[120px]">
            <div
                className={`md:w-2/3 sm:w-full justify-between flex flex-col p-5 lg:p-0 lg:pr-10 h-auto transition-all duration-300 md:order-1 order-2 ${isTransitioning ? "fade-out" : "fade-in"}`}>
                <div className="mb-10 text-sm md:text-lg ">
                    <p>{quote}</p>
                </div>
                <div className="mb-24">
                    <div className="flex justify-between">
                        <div className="flex">
                            <div className="h-16 w-16 rounded-full">
                                <img src={clientImg} className="rounded-full" alt="Client" />
                            </div>
                            <div className="flex flex-col mx-10">
                                <h1 className="text-2xl font-semibold">{name}</h1>
                                <h1>{position}</h1>
                            </div>
                        </div>

                        <img src={logoImg} alt="Logo" className="w-20 h-20" />
                    </div>
                    <div className="flex mt-2">
                        <img
                            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                            className="mr-3 scale-x-[-1] cursor-pointer"
                            alt="Previous"
                            onClick={handlePrev}
                        />
                        <img
                            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                            className="ml-3 cursor-pointer"
                            alt="Next"
                            onClick={handleNext}
                        />
                    </div>
                </div>
                <div className="lg:mt-0 flex flex-col lg:flex-row w-full ">
                    <div className=" w-full  lg:mr-5 lg:mt-5 lg:mb-5 lg:w-auto h-auto flex-col bg-purple-100 rounded-2xl flex items-center justify-center md:mr-3 px-5 py-2 lg:my-0 my-2">
                        <h1 className="p-3 font-semibold text-4xl bg-gradient-to-r from-salmon to-medium-purple bg-clip-text text-transparent">
                            {card1}
                        </h1>
                        <h1 className="p-3">{subcard1}</h1>
                    </div>
                    <div className="lg:w-auto  lg:m-5 w-full h-auto flex-col bg-purple-100 rounded-2xl flex items-center justify-center mr-3 px-9 py-2 my-2">
                        <h1 className="p-3 font-semibold text-4xl bg-gradient-to-r from-salmon to-medium-purple bg-clip-text text-transparent  ">
                            {card2}
                        </h1>
                        <h1 className="p-3">{subcard2}</h1>
                    </div>
                    {card3 && (
                        <div className="lg:w-auto   w-full h-auto flex-col bg-purple-100 rounded-2xl flex items-center justify-center  px-9 lg:ml-5 lg:mt-5 lg:mb-5 lg:my-0 my-2">
                            <h1 className=" font-semibold text-2xl bg-gradient-to-r from-salmon to-medium-purple bg-clip-text text-transparent  ">
                                {card3}
                            </h1>
                            <h1 className="p-3"> {subcard3}</h1>
                        </div>
                    )}
                </div>
            </div>
            <div
                className={`lg:w-[35rem] h-[38rem] md:w-1/3 sm:w-full   m-5 rounded-2xl transition-all duration-300 order-1 md:order-2 border border-black ${isTransitioning ? "fade-out" : "fade-in"
                    }`}
            >
                <img
                    src={mainImg}
                    className="h-full w-full rounded-2xl bg-cover  "
                    alt="Main"
                />
            </div>
        </div>
    );
}

export default Reviews