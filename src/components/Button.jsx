/* eslint-disable react/prop-types */
export default function Button({ title, btnFunc }) {
    return (
        <div>
            <button className="rounded-full p-3 hover:ring-2 ring-salmon ring-opacity-0 transition-all duration-300 py-3 px-6 hover:bg-custom-gradient border border-custom-border">
                {title}
            </button>
        </div>
    );
}
