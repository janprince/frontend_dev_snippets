import Btn from './components/Btn';
import './App.css';

function Header() {
  return <h1>Hello World</h1>
}


function App() {
  return <Btn />;
}


// not related to the project

// props and children
// a special prop known as props.children, which is automatically passed to every component.

function Bag(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

function Apples(){
  return <h1>Apples</h1>
}

function Oranges(){
  return <h1>Oranges</h1>
}

<Bag children={<Apples />} />


export default App;
