import Main from "./components/Main";
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Provider store={store}>
      <div>
        <Nav searchValue={searchValue} setSearchValue={setSearchValue}></Nav>

        <Main searchValue={searchValue}></Main>
      </div>
    </Provider>
  );
}

export default App;
