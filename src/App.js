import Header from './Components/Header';
import Mainform from './Components/Mainform';
import React, {useState, useEffect} from 'react';

let searchDelay= null

const api = {
  key:'SGcOSqk-h-AiO2fZsulBerzZi5lG37cdUkZqiZMf8F0'
}

function App() {

      const[photos,setPhotos] =useState([])
      const[loading,setLoading] = useState(false)
      const[page,setPage] =useState(1)
      const[query,setQuery] =useState('')

useEffect(() => {
  
  fetchPhotos('');

}, []);
    



useEffect(() => {

  if (page > 1) {
    fetchPhotos("");
    console.log("Page called...", page);
  }

}, [page]);
  //  const getPhoto = async () => {
  //    const temp = await fetch(`https://api.unsplash.com/search/photos?client_id=SGcOSqk-h-AiO2fZsulBerzZi5lG37cdUkZqiZMf8F0&query=london&per_page=30&orientation=portrait&page=1`)
  //               .then(res => res.json())
  //               console.log(temp)
  //  }



  const handleScroll = (event) => {
		const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

		if ((scrollTop + clientHeight) >= (scrollHeight - 700)) {
			if (!loading) {
				setPage(prev => prev + 1)
        console.log('page is called here')
			}

		}

	}

      const handleChange = e => {
          
        const searchValue = e.target.value
        setQuery(searchValue)
        setPage(1)
        setPhotos([])
        fetchPhotos(searchValue,1)
      }
    
      const handleSubmit = e => {
        e.preventDeafult()
      }


      const fetchPhotos = (searchValue= '', pageNo= 0) => {

        setLoading(true)
        const finalSearch = searchValue || query
        const finalPageNo = pageNo || page

        clearTimeout(searchDelay)

        searchDelay = setTimeout(async () => {
                      fetch(`https://api.unsplash.com/search/photos?client_id=SGcOSqk-h-AiO2fZsulBerzZi5lG37cdUkZqiZMf8F0&query=${finalSearch}&per_page=30&orientation=portrait&page=${finalPageNo}`)
                      .then(res => res.json())
                      .then(result => {
                        if(result.results) {
                          setPhotos((prev)=>[...prev,...result.results])
                        }
                        setLoading(false)
                      })
                     
                      
        },1000)
      }




  return (
    <div className="App">
       <Header />
      <div className='content-wrap' onScroll={handleScroll}>
      <Mainform handleSubmit={handleSubmit} handleChange={handleChange} query={query} loading={loading} photos={photos}/> 
      </div>
    </div>
  );
}

export default App;
