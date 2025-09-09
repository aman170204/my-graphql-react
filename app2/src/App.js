
import Employee from './component/Employee';
import Customer from './component/Customer';
function App() {
  const customer1={
    id: 1,
    name: "Mark",
    email:"mark@example.com"
  }
  return (
    <div className="container">
      <Customer data={customer1}/>
      <Customer data={{ id: 0, name: "Ram", email: "ram@example.com" }} />
      <Employee id="2" name="Tark" email="tark@example.com" />
      <Employee id="3" name="Shark" email="shark@example.com" />
    </div>
  );
}

export default App;
