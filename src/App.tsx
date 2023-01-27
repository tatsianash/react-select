import { useState } from 'react';
import Select from './components/Select';

function App() {
  const options = [
    { label: 'First', value: 'First' },
    { label: 'Second', value: 'Second' },
    { label: 'Third', value: 3 },
    { label: 'Forth', value: 4 },
    { label: '5th', value: 5 },
    { label: '6th', value: 6 },
    { label: '7th', value: 7 },
    { label: '8th', value: 8 },
    // { label: 'First', value: 'First' },
    // { label: 'Second', value: 'Second' },
    // { label: 'Third', value: 3 },
    // { label: 'Forth', value: 4 },
    // { label: '5th', value: 5 },
    // { label: '6th', value: 6 },
    // { label: '7th', value: 7 },
    // { label: '8th', value: 8 },
    // { label: 'First', value: 'First' },
    // { label: 'Second', value: 'Second' },
    // { label: 'Third', value: 3 },
    // { label: 'Forth', value: 4 },
    // { label: '5th', value: 5 },
    // { label: '6th', value: 6 },
    // { label: '7th', value: 7 },
    // { label: '8th', value: 8 },
  ];
  const [value, setValue] = useState<typeof options[0] | undefined>(options[1]);
  return (
    <>
      <Select options={options} value={value} onChange={(o) => setValue(o)} />
    </>
  );
}

export default App;
