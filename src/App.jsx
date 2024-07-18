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
  const [filter, setFilter] = useState("")

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

  const handlePrice = () => {
    setLoading(true);
    let params = {};
  
    if (filter === "price") {
      params = { price: +inputRef.current.value };
    } else if (filter === "brand") {
      params = { brand: inputRef.current.value };
    } else if (filter === "product") {
      params = { product: inputRef.current.value };
    }
  
    getItems({
      action: 'filter',
      params: params
    })
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e)=>{
    console.log(e.target.value);
    setFilter(e.target.value)

  }

  return (
    <div>
      <Header />
      <div className='search'>
        <select className='filter' onChange={handleChange} name='filter'>
          <option value=''>Выберите филтер</option>
          <option value='price'>По цене</option>
          <option value='brand'>По бренду</option>
          <option value='name'>По Названию</option>
        </select>
        <input ref={inputRef} type='text' placeholder='' />
        <button onClick={handlePrice}>Search</button>
      </div>
      {loading && <h1>Loading...</h1>}
      <table>
        <thead className='thead'>
          <tr>
            <th>ID#</th>
            <th>Название Товара</th>
            <th>Цена</th>
            <th>Бренд</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {/* {data?.map((item) => ( */}
          <tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr><tr >
              <td>1111</td>
              <td>Gold Ring</td>
              <td>20$</td>
              <td>Gucci</td>
            </tr>
          {/* // ))} */}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={160} 
        pageRangeDisplayed={3}
        marginPagesDisplayed={2} 
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
        activeClassName={'active danger'}
        forcePage={currentPage} 
      />
    </div>
  );
}

export default App;
