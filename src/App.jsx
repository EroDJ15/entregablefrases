import './App.css';
import QuoteBox from './components/QuoteBox';
import dbQuotes from './db/quote.json';
import { getRandom } from './utils/random';
import { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes));
  const [randomImage, setRandomImage] = useState('');

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes));
    setRandomImage(getRandomImage());
  };

  const getRandomImage = () => {
    const images = ['space1.jpg', 'space2.jpg', 'space3.jpg', 'space4.jpg', 'space5.jpg', 'space7.jpg', 'space8', 'space9', 'space10'];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  useEffect(() => {
    setRandomImage(getRandomImage());
  }, []);

  return (
    <main className='app' style={{ backgroundImage: `url("images/${randomImage}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
      <section className='app__container'>
        <h1>Space Phrases</h1>
        <QuoteBox handleChangequote={handleChangeQuote} phrase={quote.phrase} />
        <footer>
          <div>
            <h3>Author: {quote.author}</h3>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default App;
