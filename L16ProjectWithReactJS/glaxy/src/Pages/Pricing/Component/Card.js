// import React from 'react';
// import SingleCard from './SingleCard';
// // import './Cards.css';

// const Card = () => {
//     const data = [
//         {
//             id: 1,
//             name: 'Aamir Hussain Azad',
//             role: 'Founder & CEO',
//             bio: 'Travel enthusiast with 15+ years of industry experience',
//             // image: require('../../assets/team1.jpg'),
//             heading: 'Basics',
//             line1: '5 lakhs',
//             line2: 'No unlimited Access',
//             line3: 'No Food',
//         },
//         {
//             id: 2,
//             name: 'Kamran Hussain Azad',
//             role: 'Travel Expert',
//             bio: 'Specializes in Asian destinations and adventure travel',
//             // image: require('../../assets/team2.jpg'),
//             heading: 'Premium',
//             line1: '10 lakhs',
//             line2: 'Unlimited Access',
//             line3: 'Food',
//         },
//         {
//             id: 3,
//             name: 'Emma Rodriguez',
//             role: 'Customer Experience',
//             bio: 'Dedicated to making your journey seamless and memorable',
//             // image: require('../../assets/team3.jpg'),
//             heading: 'Business',
//             line1: '15 lakhs',
//             line2: 'Unlimited Access',
//             line3: 'Food',
//         },
//     ];

//     return (
//         <>
//             <h1 className="heading">Pricing</h1>
//             <section className="cards">
//                 {data.map((item) => (
//                     const {id, name, role, bio, image, heading, line1, line2, line3} = item;
// }
//                 return (
//                     <SingleCard heading ={item.heading}
//                         key={item.id}
//                         name={item.name}
//                         role={item.role}
//                         bio={item.bio}
//                         image={item.image}
//                         heading={item.heading}
//                         line1={item.line1}
//                         line2={item.line2}
//                         line3={item.line3}
//                     />
//                 )))
//             </section>
//         </>
//     );
// };

// export default Card;












// import React from 'react';
// import SingleCard from './SingleCard';
// import './Cards.css';

// const Card = () => {
//     const data = [
//         {
//             id: 1,
//             heading: 'Basics',
//             line1: '5 lakhs',
//             line2: 'No unlimited Access',
//             line3: 'No Food',
//         },
//         {
//             id: 2,
//             heading: 'Premium',
//             line1: '10 lakhs',
//             line2: 'Unlimited Access',
//             line3: 'Food included',
//         },
//         {
//             id: 3,
//             heading: 'Business',
//             line1: '15 lakhs',
//             line2: 'Unlimited Access',
//             line3: 'Premium Food',
//         },
//     ];

//     return (
//         <div className="pricing-section">
//             <h1 className="pricing-header">Pricing</h1>
//             <div className="cards-container">
//                 {data.map((item) => (
//                     <SingleCard
//                         key={item.id}
//                         heading={item.heading}
//                         line1={item.line1}
//                         line2={item.line2}
//                         line3={item.line3}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Card;









import React from "react";
import SingleCard from "./SingleCard";

const Card = () => {
    const data = [
        {
            id: 1,
            heading: "Basic",
            line1: "5 Lakhs",
            line2: "No Unlimited Access",
            line3: "No Food",
        },
        {
            id: 2,
            heading: "Medium",
            line1: "10 Lakhs",
            line2: "Unlimited Access",
            line3: "No Food",
        },
        {
            id: 3,
            heading: "Premium",
            line1: "20 Lakhs",
            line2: "Unlimited Access",
            line3: "Food Included",
        },
    ];

    return (
        <>
            <h1 className="heading">Pricing</h1>
            <section className="cards">
                {data.map((item) => (
                    <SingleCard
                        key={item.id}
                        heading={item.heading}
                        line1={item.line1}
                        line2={item.line2}
                        line3={item.line3}
                    />
                ))}
            </section>
        </>
    );
};

export default Card;
