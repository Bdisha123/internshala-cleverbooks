import { useState } from 'react';
import feature1 from '../assets/feature-1.webp';
import feature2 from '../assets/feature-2.webp';
import feature3 from '../assets/feature-3.webp';
import feature4 from '../assets/feature-4.webp';
import feature5 from '../assets/feature-5.webp';

import './Target.css';

const Target = () => {
    const data = [
        { id: 1, h2: 'Accurate Demand Forecasting', p: "Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions.", image: feature1 },
        { id: 2, h2: 'HELIX: Workflow Automation', p: "Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a bird's eye view of your supply chain, and help you do things a spreadsheet never can.", image: feature2 },
        { id: 3, h2: 'Automated Purchase Planning', p: "Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What's more, Crest improves with every planning cycle as the data set gets richer.", image: feature3 },
        { id: 4, h2: 'Automated Distribution Planning', p: "Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.", image: feature4 },
        { id: 5, h2: 'Easy Integration', p: "From all online store solutions to cloud ERPs, Crest integrates seamlessly with your current tech and ops stack. What's more? Connecting them to Crest will give you actionable insights.", image: feature5 },
        ];

    const [activeId, setActiveId] = useState(1);

    const handleItemClick = (id) => {
        setActiveId(id === activeId ? null : id);
    };

    return (
        <div className='t-wrapper'>
            <div className="t-container">
                <div className='t-heading'>
                    <h1>Things your spreadsheet wishes it could do</h1>
                </div>
                <div className="t-content">
                    <div className="t-left">
                        {data.map((item) => (
                            <div key={item.id} className={`t-item ${activeId === item.id ? 'active' : ''}`} onClick={() => handleItemClick(item.id)}>
                                <h2>{item.h2}</h2>
                                {activeId === item.id && <p>{item.p}</p>}
                                {activeId === item.id && <p className='learnmore'>Learn more</p>}
                            </div>
                        ))}
                    </div>
                    <div className="t-right">
                        {data.map((item) => (
                            <img key={item.id} src={item.image} alt="" className={activeId === item.id ? 'active' : ''} />
                        ))}
                    </div>
                </div>
                <div className="features">
                    <button>View all features</button>
                </div>
            </div>
        </div>
    );
};

export default Target;