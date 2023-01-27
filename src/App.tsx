import { useState } from 'react';
import Select, { SelectOption } from './components/Select';
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
const multiOptions = [
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
function App() {
  const [value, setValue] = useState<SelectOption | undefined>(options[1]);

  const [multiValue, setMultiValue] = useState<SelectOption[]>([]);

  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <Select options={options} value={value} onChange={(o) => setValue(o)} />
      <Select
        multi={true}
        options={multiOptions}
        value={multiValue}
        onChange={(o) => setMultiValue(o)}
      />
    </div>
  );
}

export default App;
