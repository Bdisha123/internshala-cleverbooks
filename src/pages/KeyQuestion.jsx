import Card from "../components/Card"
import { cardItem } from "../constants"

const KeyQuestion = () => {
    return (
        <div className=" h-min-screen bg-white md:px-32 px-10 pt-[100px] pb-[100px]">
            <div className="flex items-center justify-center ">
                <h1 className="font-normal text-xl md:text-5xl ">
                    Four key questions answered by Crest
                </h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-4  lg:mt-20 tracking-wider flex-wrap justify-items-center">
                {cardItem.map((item, index) => (
                    <Card
                        logo={item.logo}
                        question={item.question}
                        ans={item.ans}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default KeyQuestion