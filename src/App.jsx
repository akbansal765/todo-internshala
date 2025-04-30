import Header from "./Components/Header"
import ToDoList from "./Components/ToDoList"


function App() {

  return (
    <div className="app_component">
      <Header />
      <ToDoList />
      <p>*To use edit, first press edit, make the changes in input and press update.</p>
    </div>
    
  )
}

export default App
