import logo from './logo.svg';
import './App.css';
import { getPost } from './api/axios';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';

function App() {
   const [posts, setPosts] = useState([]);
   const [searchResults, setSearchResults] = useState([]);
   const [loading, setLoading] = useState(false);
   console.log(searchResults.length)
   useEffect(() => {
      setLoading(true);
      getPost()
         .then((posts) => {
            setPosts(posts);
            setSearchResults(posts);
         })
         .catch((err) => console.log(err.message))
         .finally(() => setLoading(false));
   }, []);

   let content = '';

   return (
      <>
         <SearchBar posts={posts} setSearchResults={setSearchResults} />
         <SearchList posts={searchResults} />
      </>
   );
}

export default App;
