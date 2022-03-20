import { useEffect, useState } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap justify-center items-start gap-4">
        {images.map((image) => (
          <ImageCard className="basis-1/3" key={image.id} image={image} />
        )
        )
        }
      </div>
    </div>
  );
}

export default App;
