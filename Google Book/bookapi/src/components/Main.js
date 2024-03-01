import react, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "./Card";
import axios from "axios";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCl4c6nW_doI8MIRWmbsjC_JHsMXrtS_Ys"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A Room Without A Book Is <br /> A Body Without A Soul
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter The Name Of Book"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <FaSearch />
            </button>
          </div>
          <img src="https://img.freepik.com/free-vector/young-people-reading-relaxing_52683-24988.jpg?size=626&ext=jpg&ga=GA1.1.658417739.1699879919&semt=ais" />
        </div>
      </div>
      <div className="container">
        {}
        <Card book={bookData} />
      </div>
    </>
  );
};
export default Main;
