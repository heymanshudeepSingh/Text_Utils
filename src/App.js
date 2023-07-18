import './App.css';
let name = "Simar";
function App() {
  return (
   <>
   <nav>
   <li>Home</li>
   <li>About</li>
   <li>References</li>
   </nav>
   <div className="container">
    <h1>Hello {name}</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Reprehenderit facere harum facilis mollitia unde ratione error perferendis, 
     laudantium obcaecati tempore, ut impedit praesentium voluptates asperiores quasi debitis? Eligendi, facilis excepturi.
   </p>
   </div>
   </>
  );
}

export default App;
