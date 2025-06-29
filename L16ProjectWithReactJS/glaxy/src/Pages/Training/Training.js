// import React from 'react'

// const Training = () => {
//     return (
//         <div>
//             <h1>Training</h1>
//             <p>We offer comprehensive training programs to help you master our platform.</p>
//             <ul>
//                 <li>Beginner Training</li>
//                 <li>Advanced Techniques</li>
//                 <li>Certification Programs</li>
//             </ul>
//         </div>
//     )
// }

// export default Training







// import "./Training.css";
// import React, { useState } from 'react';
// import { FaChalkboardTeacher, FaLaptopCode, FaCertificate, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const Training = () => {
//   const [expandedCourse, setExpandedCourse] = useState(null);

//   const toggleCourse = (index) => {
//     setExpandedCourse(expandedCourse === index ? null : index);
//   };

//   const trainingPrograms = [
//     {
//       title: "Beginner Training",
//       icon: <FaChalkboardTeacher className="text-blue-500" size={24} />,
//       description: "Perfect for new users to get started with our platform",
//       duration: "4 weeks",
//       topics: [
//         "Platform fundamentals",
//         "Basic navigation",
//         "Core features overview",
//         "Getting started exercises"
//       ],
//       upcomingDates: ["June 5, 2023", "July 10, 2023", "August 7, 2023"]
//     },
//     {
//       title: "Advanced Techniques",
//       icon: <FaLaptopCode className="text-purple-500" size={24} />,
//       description: "Master advanced features and workflows",
//       duration: "6 weeks",
//       topics: [
//         "Advanced customization",
//         "Workflow automation",
//         "Integration techniques",
//         "Performance optimization"
//       ],
//       prerequisites: "Beginner Training or equivalent experience",
//       upcomingDates: ["June 12, 2023", "July 17, 2023", "August 14, 2023"]
//     },
//     {
//       title: "Certification Programs",
//       icon: <FaCertificate className="text-green-500" size={24} />,
//       description: "Become a certified expert in our platform",
//       duration: "8 weeks",
//       topics: [
//         "Comprehensive platform mastery",
//         "Best practices",
//         "Troubleshooting",
//         "Final certification project"
//       ],
//       prerequisites: "Advanced Techniques or equivalent experience",
//       upcomingDates: ["June 19, 2023", "July 24, 2023", "August 21, 2023"]
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">Training Programs</h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Our comprehensive training programs are designed to help you master our platform at every level.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//         {trainingPrograms.map((program, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
//             <div className="p-6">
//               <div className="flex items-center mb-4">
//                 <div className="mr-4">
//                   {program.icon}
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">{program.title}</h2>
//               </div>
//               <p className="text-gray-600 mb-4">{program.description}</p>
//               <p className="text-sm text-gray-500 mb-4"><strong>Duration:</strong> {program.duration}</p>
              
//               <button
//                 onClick={() => toggleCourse(index)}
//                 className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-4"
//               >
//                 {expandedCourse === index ? (
//                   <>
//                     <span>Hide details</span>
//                     <FaChevronUp className="ml-2" />
//                   </>
//                 ) : (
//                   <>
//                     <span>View details</span>
//                     <FaChevronDown className="ml-2" />
//                   </>
//                 )}
//               </button>

//               {expandedCourse === index && (
//                 <div className="mt-4 pt-4 border-t border-gray-200">
//                   <h3 className="font-bold text-gray-800 mb-2">Topics Covered:</h3>
//                   <ul className="list-disc pl-5 mb-4">
//                     {program.topics.map((topic, i) => (
//                       <li key={i} className="text-gray-700 mb-1">{topic}</li>
//                     ))}
//                   </ul>

//                   {program.prerequisites && (
//                     <div className="mb-4">
//                       <h3 className="font-bold text-gray-800 mb-2">Prerequisites:</h3>
//                       <p className="text-gray-700">{program.prerequisites}</p>
//                     </div>
//                   )}

//                   <h3 className="font-bold text-gray-800 mb-2">Upcoming Sessions:</h3>
//                   <ul className="space-y-2">
//                     {program.upcomingDates.map((date, i) => (
//                       <li key={i} className="text-gray-700">{date}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
//                 Enroll Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="bg-gray-50 rounded-lg p-8 text-center">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Custom Training?</h2>
//         <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//           We offer customized training solutions for teams and organizations. Contact us to discuss your specific needs.
//         </p>
//         <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded transition-colors duration-300">
//           Contact Our Training Team
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Training;


















import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
// import About from '../../Components/About/About'
import Footer from '../../Components/Footer/Footer'
import About from "../Home/Components/About";

const Training = ({heading}) => {
    return (
        <>
        <h1>{heading}</h1>
        <Navbar />
            <Header heading="Training Page" />
            <About heading="Training"/>    
        <Footer/> 
        </>
    )
}

export default Training
