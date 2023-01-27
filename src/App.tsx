import Select from './components/Select';

function App() {
  const options = [
    { label: 'First', value: 'First' },
    { label: 'Second', value: 'Second' },
    { label: 'Third', value: 3 },
    { label: 'Forth', value: 4 },
  ];
  return (
    <>
      <Select options={options} />
    </>
  );
}

export default App;
