import Main from "./components/Main";
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Nav></Nav>

        <Main></Main>
      </div>
    </Provider>
  );
}

export default App;
