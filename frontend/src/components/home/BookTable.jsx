// import React from 'react'
// import { Link } from 'react-router-dom';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsInfoCircle } from 'react-icons/bs'
// import { MdOutlineDelete } from 'react-icons/md';

// const BookTable = ({ books }) => {
//   return (
//     <table className='w-full border-separate border-spacing-2'>
//       <thead>
//         <tr>
//           <th className='border border-slate-600 rounded-md'>No</th>
//           <th className='border border-slate-600 rounded-md'>Title</th>
//           <th className='border border-slate-600 rounded-md'>Author</th>
//           <th className='border border-slate-600 rounded-md'>Publish Year</th>
//           <th className='border border-slate-600 rounded-md'>Operations</th>
//         </tr>
//       </thead>
//       <tbody>
//         {books.map((book, index) => (
//           <tr key={book._id} className='h-8'>
//             <td className='border border-slate-700 rounded-md text-center'>
//               {index + 1}
//             </td>
//             <td className='border border-slate-700 rounded-md text-center'>
//               {book.title}
//             </td>
//             <td className='border border-slate-700 rounded-md text-center'>
//               {book.author}
//             </td>
//             <td className='border border-slate-700 rounded-md text-center'>
//               {book.publishYear}
//             </td>
//             <td className='border border-slate-700 rounded-md text-center'>
//               <div className='flex justify-center gap-x-4'>
//                 <Link to={`/books/details/${book._id}`}>
//                   <BsInfoCircle className='text-2xl text-green-800' />
//                 </Link>
//                 <Link to={`/books/edit/${book._id}`}>
//                   <AiOutlineEdit className='text-2xl text-yellow-600' />
//                 </Link>
//                 <Link to={`/books/delete/${book._id}`}>
//                   <MdOutlineDelete className='text-2xl text-red-600' />
//                 </Link>
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }

// export default BookTable

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsInfoCircle } from 'react-icons/bs';
// import { MdOutlineDelete } from 'react-icons/md';

// const BookTable = ({ books }) => {
//   return (
//     <table className='w-full border-separate border-spacing-2'>
//       <thead>
//         <tr>
//           <th className='border border-slate-600 rounded-md bg-white px-4 py-2'>No</th>
//           <th className='border border-slate-600 rounded-md bg-white px-4 py-2'>Title</th>
//           <th className='border border-slate-600 rounded-md bg-white px-4 py-2'>Author</th>
//           <th className='border border-slate-600 rounded-md bg-white px-4 py-2'>Publish Year</th>
//           <th className='border border-slate-600 rounded-md bg-white px-4 py-2'>Operations</th>
//         </tr>
//       </thead>
//       <tbody>
//         {books.map((book, index) => (
//           <tr key={book._id} className='h-8 hover:bg-gray-100'>
//             <td className='border border-slate-700 rounded-md text-center bg-white px-4 py-2'>
//               {index + 1}
//             </td>
//             <td className='border border-slate-700 rounded-md text-center bg-white px-4 py-2'>
//               {book.title}
//             </td>
//             <td className='border border-slate-700 rounded-md text-center bg-white px-4 py-2'>
//               {book.author}
//             </td>
//             <td className='border border-slate-700 rounded-md text-center bg-white px-4 py-2'>
//               {book.publishYear}
//             </td>
//             <td className='border border-slate-700 rounded-md text-center bg-white px-4 py-2'>
//               <div className='flex justify-center gap-x-4'>
//                 <Link to={`/books/details/${book._id}`}>
//                   <BsInfoCircle className='text-2xl text-green-800' />
//                 </Link>
//                 <Link to={`/books/edit/${book._id}`}>
//                   <AiOutlineEdit className='text-2xl text-yellow-600' />
//                 </Link>
//                 <Link to={`/books/delete/${book._id}`}>
//                   <MdOutlineDelete className='text-2xl text-red-600' />
//                 </Link>
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default BookTable;

import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BookTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md bg-white px-4 py-2 text-sm md:text-base">
              No
            </th>
            <th className="border border-slate-600 rounded-md bg-white px-4 py-2 text-sm md:text-base">
              Title
            </th>
            <th className="border border-slate-600 rounded-md bg-white px-4 py-2 text-sm md:text-base">
              Author
            </th>
            <th className="border border-slate-600 rounded-md bg-white px-4 py-2 text-sm md:text-base">
              Publish Year
            </th>
            <th className="border border-slate-600 rounded-md bg-white px-4 py-2 text-sm md:text-base">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-8 hover:bg-gray-100">
              <td className="border border-slate-700 rounded-md text-center bg-white px-4 py-2 text-sm md:text-base">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center bg-white px-4 py-2 text-sm md:text-base">
                {book.title}
              </td>
              <td className="border border-slate-700 rounded-md text-center bg-white px-4 py-2 text-sm md:text-base">
                {book.author}
              </td>
              <td className="border border-slate-700 rounded-md text-center bg-white px-4 py-2 text-sm md:text-base">
                {book.publishYear}
              </td>
              <td className="border border-slate-700 rounded-md text-center bg-white px-4 py-2 text-sm md:text-base">
                <div className="flex justify-center gap-x-2 md:gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-xl md:text-2xl text-green-800" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-xl md:text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-xl md:text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
