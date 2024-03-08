import { useEffect, useRef, useState } from 'react';
import './App.css';
import { getItems } from './service';
import Header from './components/Headers';
import ReactPaginate from 'react-paginate';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const [currentPage, setCurrentPage] = useState(0); 

  const limit = 50;

  useEffect(() => {
    setLoading(true);
  
    fetchItems(1);
  }, []);

  const fetchItems = async (page) => {
    try {
      const response = await getItems({
        action: 'get_ids',
        params: { offset: (page - 1) * limit, limit: limit },
      });
      setData(response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    fetchItems(selectedPage.selected + 1); 
  };

  const handleFilter = () => {
    setLoading(true);
    getItems({
      action: 'filter',
      params: { price: +inputRef.current.value },
    })
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Header />
      <div className='search'>
        <input ref={inputRef} type='number' placeholder='Please enter price ex:1700' />
        <button onClick={handleFilter}>Search</button>
      </div>
      {loading && <h1>Loading...</h1>}
      <div className='cards'>
        {data?.map((item) => (
          <div key={item.id} className='cardsContent'>
            <h4>{item.brand ?? 'No brand name'}</h4>
            <p>{item.product}</p>
            <h6>₽{item.price}</h6>
            <p>id:{item.id}</p>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={10} 
        pageRangeDisplayed={2}
        marginPagesDisplayed={1} 
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        forcePage={currentPage} 
      />
    </div>
  );
}

export default App;
