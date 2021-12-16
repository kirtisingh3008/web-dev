import react, {useState} from 'react';
import Paginate from 'react-paginate';
import fakedata from "./Fake_data.json"
import './App.css';

// let's make a funtion for diaplaying data
function App() {

  const [data, setData] =useState(fakedata.slice(0,40));
  const [pageNumber, setPageNumber] =useState(0);
  const dataPerPage =6;
  const pageVisited = pageNumber * dataPerPage;

  // making function for fetching data
  const fetchData = data.slice(pageVisited, pageVisited + dataPerPage).map((x)=>{
    return(
      <div className="card">
        <h3>{x.FullName}</h3>
        <h3>{x.CompanyName}</h3>
        <h3>{x.URL}</h3>
        </div>
    );
  })
// we are using ceil function here because if it not proper divisible value then we need an extra page for
// the remainder
const pageCount = Math.ceil(data.length/dataPerPage)

// function for page change set the page we are currently on
const changePage = ({selected}) => {
  setPageNumber(selected);
}
  return (
    <>
     <div className="header"> <h2>WELCOME TO FAKEDATA WORLD</h2></div>
    <div className="App">
      {fetchData}
      <Paginate
      previousLabel ={"Prev"}
      afterLabel ={"After"}
      pageCount ={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}

      />
    </div>
    </>
  );
}

export default App;
