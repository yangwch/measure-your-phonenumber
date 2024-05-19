import React from 'react';
import numbers from './assets/numbers.png';
import Input from './components/Input';
import NumberList from './components/NumberList';

function App() {
  const [numbersList, setNumbersList] = React.useState<string[]>([]);
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold underline'>揭晓您的数字密码</h1>
      <img src={numbers} alt='吉星/凶星号码对照表' />
      <div className='mt-4'>
        <Input
          onAdd={(value) =>
            setNumbersList((prev) => {
              if (!value || prev.includes(value)) return prev;
              return [value, ...prev];
            })
          }
        />
        <NumberList numbers={numbersList} />
      </div>
    </div>
  );
}

export default App;
