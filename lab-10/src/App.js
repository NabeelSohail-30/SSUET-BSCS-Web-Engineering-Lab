let { BrowserRouter, Link, Route, useParams, useRouteMatch, Switch } =
  ReactRouterDOM;

let Router = BrowserRouter;

// Home component
const Home = () => (
  <div>
    <h1>Home</h1>
    <p>This is the Home Page</p>
  </div>
);

// About component
const About = () => (
  <div>
    <h1>About</h1>
    <p>This is about</p>
  </div>
);

// User component
const User = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>User</h1>
      <p>This is about {id}</p>
    </div>
  );
};

// Customer component
const Customer = () => {
  const { url } = useRouteMatch();
  return (
    <>
      <CustomerGrid />
      <Switch>
        <Route exact path={url} component={CustomerGrid} />
        <Route path={`${url}/:id`} component={CustomerDetail} />
      </Switch>
    </>
  );
};

// CustomerGrid component
const CustomerGrid = () => {
  return (
    <div>
      <h1>Customer Grid</h1>
    </div>
  );
};

// CustomerDetail component
const CustomerDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Customer Detail</h1>
      <p>This is about {id}</p>
    </div>
  );
};

// App component with routes
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/2">User 2</Link>
            </li>
            <li>
              <Link to="/user/1">User 1</Link>
            </li>
            <li>
              <Link to="/user/3fdgf">User 3</Link>
            </li>
            <li>
              <Link to="/customer">Customer</Link>
            </li>
            <li>
              <Link to="/customer/1">Customer 1</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user/:id" component={User} />
          <Route path="/customer" component={Customer} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
