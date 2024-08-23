// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import { Link } from 'react-router-dom';
// import { MdOutlineAddBox } from 'react-icons/md';
// import BookCard from '../components/home/BookCard';
// import BookTable from '../components/home/BookTable';


// const Home = () => {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [showType, setShowType] = useState('table');

//     useEffect(() => {
//         setLoading(true);
//         axios
//             .get('http://localhost:5555/books')
//             .then((response) => {
//                 setBooks(response.data.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setLoading(false);
//             });
//     }, []);
//     return (
//         <div className='p-4'>
//             <div className='flex justify-center items-center gap-x-4'>
//                 <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//                     onClick={() => setShowType('table')}>
//                     Table
//                 </button>
//                 <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//                     onClick={() => setShowType('card')}
//                 >
//                     Card
//                 </button>
//             </div>
//             <div className='flex justify-between items-center'>
//                 <h1 className='text-3xl my-8'>Books List</h1>
//                 <Link to='/books/create'>
//                     <MdOutlineAddBox className='text-sky-800 text-4xl' />
//                 </Link>
//             </div>
//             {loading ?
//                 <Spinner /> : showType === 'table' ? (<BookTable books={books} />) : (<BookCard books={books} />)
//             }
//         </div>
//     );
// };

// export default Home
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import { Link } from 'react-router-dom';
// import { MdOutlineAddBox } from 'react-icons/md';
// import BookCard from '../components/home/BookCard';
// import BookTable from '../components/home/BookTable';
// import bookBackground from '../assets/Book.jpg'; // Assuming the image is in the assets folder

// const Home = () => {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [showType, setShowType] = useState('table');

//     useEffect(() => {
//         setLoading(true);
//         axios
//             .get('http://localhost:5555/books')
//             .then((response) => {
//                 setBooks(response.data.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setLoading(false);
//             });
//     }, []);

//     return (
//         <div 
//             className='p-4'
//             style={{
//                 backgroundImage: `url(${bookBackground})`,
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//                 minHeight: '100vh'
//             }}
//         >
//             <div className='flex justify-center items-center gap-x-4'>
//                 <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//                     onClick={() => setShowType('table')}>
//                     Table
//                 </button>
//                 <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//                     onClick={() => setShowType('card')}
//                 >
//                     Card
//                 </button>
//             </div>
//             <div className='flex justify-between items-center'>
//                 <h1 className='text-3xl my-8'>Books List</h1>
//                 <Link to='/books/create'>
//                     <MdOutlineAddBox className='text-sky-800 text-4xl' />
//                 </Link>
//             </div>
//             {loading ?
//                 <Spinner /> : showType === 'table' ? (<BookTable books={books} />) : (<BookCard books={books} />)
//             }
//         </div>
//     );
// };

// export default Home;

//23 8 2024 12 02
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import { Link } from 'react-router-dom';
// import { MdOutlineAddBox } from 'react-icons/md';
// import BookCard from '../components/home/BookCard';
// import BookTable from '../components/home/BookTable';
// import './Home.css'; 

// const Home = () => {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [showType, setShowType] = useState('table');

//     useEffect(() => {
//         setLoading(true);
//         axios
//             .get('http://localhost:5555/books')
//             .then((response) => {
//                 setBooks(response.data.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setLoading(false);
//             });
//     }, []);

//     return (
//         <div className="home-container">
//             <div className='flex justify-center items-center gap-x-4'>
//                 <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//                     onClick={() => setShowType('table')}>
//                     Table
//                 </button>
//                 <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//                     onClick={() => setShowType('card')}
//                 >
//                     Card
//                 </button>
//             </div>
//             <div className='flex justify-between items-center'>
//                 <h1 className='text-3xl my-8'>Books List</h1>
//                 <Link to='/books/create'>
//                     <MdOutlineAddBox className='text-sky-800 text-4xl' />
//                 </Link>
//             </div>
//             {loading ?
//                 <Spinner /> : showType === 'table' ? (<BookTable books={books} />) : (<BookCard books={books} />)
//             }
//         </div>
//     );
// };

// export default Home;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import { Link } from 'react-router-dom';
// import { MdOutlineAddBox } from 'react-icons/md';
// import BookCard from '../components/home/BookCard';
// import BookTable from '../components/home/BookTable';
// import bookBackground from '../assets/Book.jpg';

// const Home = () => {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [showType, setShowType] = useState('table');
//     const [searchQuery, setSearchQuery] = useState('');  // Search query state
//     const [filter, setFilter] = useState('');  // Filter state, e.g., by category

//     useEffect(() => {
//         setLoading(true);
//         axios
//             .get('http://localhost:5555/books')
//             .then((response) => {
//                 setBooks(response.data.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setLoading(false);
//             });
//     }, []);

//     // Filtered books based on search and filter criteria
//     const filteredBooks = books.filter((book) => {
//         return (
//             (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             book.author.toLowerCase().includes(searchQuery.toLowerCase())) &&
//             (filter ? book.category === filter : true)
//         );
//     });

//     return (
//         <div 
//             className='p-4'
//             style={{
//                 backgroundImage: `url(${bookBackground})`,
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//                 minHeight: '100vh'
//             }}
//         >
//             <div className='flex flex-col items-center gap-y-4'>
//                 {/* Search Input */}
//                 <input 
//                     type="text" 
//                     placeholder="Search by title or author..." 
//                     className='p-2 border border-gray-400 rounded-md'
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                 />
                
//                 {/* Filter Dropdown (Example: by Category) */}
//                 <select 
//                     className='p-2 border border-gray-400 rounded-md'
//                     value={filter}
//                     onChange={(e) => setFilter(e.target.value)}
//                 >
//                     <option value="">All Categories</option>
//                     <option value="Fiction">Fiction</option>
//                     <option value="Non-fiction">Non-fiction</option>
//                     <option value="Science">Science</option>
//                     <option value="History">History</option>
//                     {/* Add more filter options here */}
//                 </select>
//             </div>
            
//             <div className='flex justify-center items-center gap-x-4'>
//                 <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//                     onClick={() => setShowType('table')}>
//                     Table
//                 </button>
//                 <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//                     onClick={() => setShowType('card')}
//                 >
//                     Card
//                 </button>
//             </div>
//             <div className='flex justify-between items-center'>
//                 <h1 className='text-3xl my-8'>Books List</h1>
//                 <Link to='/books/create'>
//                     <MdOutlineAddBox className='text-sky-800 text-4xl' />
//                 </Link>
//             </div>
//             {loading ? (
//                 <Spinner />
//             ) : showType === 'table' ? (
//                 <BookTable books={filteredBooks} />
//             ) : (
//                 <BookCard books={filteredBooks} />
//             )}
//         </div>
//     );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BookCard from '../components/home/BookCard';
import BookTable from '../components/home/BookTable';
import bookBackground from '../assets/Book.jpg';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
    const [searchQuery, setSearchQuery] = useState('');  // Search query state

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    // Filtered books based on search criteria
    const filteredBooks = books.filter((book) => {
        return (
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div 
            className='p-4'
            style={{
                backgroundImage: `url(${bookBackground})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh'
            }}
        >
            <div className='flex flex-col items-end gap-y-4'>
                {/* Search Input */}
                <input 
                    type="text" 
                    placeholder="Search by title or author..." 
                    className='p-2 border border-gray-400 rounded-md'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-300 hover:bg-white px-4 py-1 rounded-lg'
                    onClick={() => setShowType('table')}>
                    Table
                </button>
                <button className='bg-sky-300 hover:bg-white px-4 py-1 rounded-lg'
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8 text-white'>Books List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-white text-4xl' />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : showType === 'table' ? (
                <BookTable books={filteredBooks} />
            ) : (
                <BookCard books={filteredBooks} />
            )}
        </div>
    );
};

export default Home;
