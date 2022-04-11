const Hello = (props) => {
  return (
    <div>
      <p> Hello {props.name}, you are {props.age} yeras old </p>
    </div>
  );
};

const App = () => {
  const name = "tuan";
  const age = 20;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name="george" age={10} />
    </div>
  );
};

export default App;
