import React, { useEffect, useState } from "react";
import BookContainer from "./BookContainer";
import InputForm from "./InputForm";

const Main = ({ searchValue }) => {
  const [clickedButton, setClickedButton] = useState("All");
  const [updateId, setUpdateId] = useState("");

  // const handleButtonClick = (button) => {

  // }

  // useEffect(() => {
  //   console.log(updateId);
  // }, [updateId]);
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button
                className={`filter-btn ${
                  clickedButton === "All" && "active-filter"
                }`}
                id="lws-filterAll"
                onClick={() => setClickedButton("All")}
              >
                All
              </button>
              <button
                className={`filter-btn ${
                  clickedButton === "Featured" && "active-filter"
                }`}
                id="lws-filterFeatured"
                onClick={() => setClickedButton("Featured")}
              >
                Featured
              </button>
            </div>
          </div>
          <BookContainer
            setUpdateId={setUpdateId}
            searchValue={searchValue}
            clickedButton={clickedButton}
          />
        </div>
        <div>
          <InputForm updateId={updateId} setUpdateId={setUpdateId} />
        </div>
      </div>
    </main>
  );
};

export default Main;
