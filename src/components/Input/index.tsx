import React from 'react';

function Input(props: { onAdd: (value: string) => void }) {
  const { onAdd } = props;
  const inputRef = React.createRef<HTMLInputElement>();
  const onPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const value = e.clipboardData.getData('text');
    if (!value) return;
    const values = value.split('\n');
    values.forEach((v) => {
      onAdd(v);
    });
    e.preventDefault()
  };
  return (
    <div className=' flex gap-1 rounded-lg ring ring-slate-300 shadow-lg font-medium px-2 py-1 text-lg'>
      <input
        className='w-full'
        ref={inputRef}
        type='number'
        placeholder='请输入号码'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onAdd(inputRef.current!.value);
          }
        }}
        onPaste={onPaste}
      />
      <button
        className='bg-slate-300 px-2 py-1 rounded-lg w-16'
        onClick={() => onAdd(inputRef.current!.value)}
      >
        添加
      </button>
    </div>
  );
}

export default Input;
