// import React from 'react';
// import{FaTimes} from 'react-icons/fa';

// // import { Link } from 'react-router-dom';
// const Modal = ({modal, handleClick}) => {
//     return (
        
//         <div className="overlay">
//             <div className="modal">
//                 <div className="cross">
//                 <FaTimes style={{ color: 'white' }} size={25}  onClick={handleClick}/>
//                 </div>
//                 <h2 className="text-center mb-4">Our Modal</h2>
//             </div>
//         </div>
//     );
// };

// export default Modal;







import React from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-xl font-bold text-center mb-4">Our Modal</h2>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
