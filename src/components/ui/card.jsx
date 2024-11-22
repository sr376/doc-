// // import React from 'react';

// // const Card = ({ children }) => {
// //   return <div className="card">{children}</div>;
// // };

// // export default Card;

// import React from 'react';
// import PropTypes from 'prop-types';

// const Card = ({ title, description, children, footer }) => {
//   return (
//     <div className="border rounded-lg shadow-md p-4 bg-white">
//       {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
//       {description && <p className="text-gray-700 mb-4">{description}</p>}
//       <div className="mb-4">{children}</div>
//       {footer && <div className="border-t pt-2 text-sm text-gray-500">{footer}</div>}
//     </div>
//   );
// };

// // Default props
// Card.defaultProps = {
//   title: '',
//   description: '',
//   footer: null,
// };

// // Prop type validation
// Card.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   children: PropTypes.node,
//   footer: PropTypes.node,
// };

// export default Card;

import React from 'react';

export const Card = ({ children, className }) => {
  return <div className={`rounded-lg shadow-lg bg-white ${className}`}>{children}</div>;
};

export const CardHeader = ({ children, className }) => {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className }) => {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};


