import { RouterProvider } from "react-router-dom";
import routes from "./Routes/router";
import { Provider } from 'react-redux'
import store from './Redux/Store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
