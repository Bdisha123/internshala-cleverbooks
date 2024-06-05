/* eslint-disable react/prop-types */
export default function Card({ logo, question, ans }) {
    return (
        <div className="grid grid-row-5 element md:h-auto w-full md:w-auto m-5 p-5 rounded-2xl">
            <img className="row-span-2 w-20 h-20" src={logo} />
            <div className="row-span-1 my-4 font-bold text-xl"> {question}</div>
            <div className="row-span-3">{ans}</div>
        </div>
    );
}