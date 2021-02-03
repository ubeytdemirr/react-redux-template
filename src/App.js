import {Provider} from "react-redux"
import Color from "./components/color"
import Counter from "./components/counter"
import store from "./store"
function App() {
  return (
    <Provider store={store}>
     
      <>
      <Counter/>
      <Color/>
      </>
      
    </Provider>
  );
}

export default App;
