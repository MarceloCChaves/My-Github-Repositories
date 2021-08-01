import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { RepositoryList } from './pages/RepositoryList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RepositoryList}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
