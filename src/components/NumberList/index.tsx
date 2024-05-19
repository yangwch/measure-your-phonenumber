
function highlight(text: string, words: string[]) {
  if (!words.length) {
    return text;
  }
  const reg = new RegExp(words.join('|'), 'g');
  return text.replace(
    reg,
    '<mark class="text-red-400 font-semibold">$&</mark>'
  );
}

const badNumbers = [
  '12',
  '69',
  '84',
  '73',
  '18',
  '97',
  '36',
  '42',
  '16',
  '74',
  '38',
  '92',
  '17',
  '89',
  '64',
  '32',
].reduce((acc, cur) => {
  return acc.concat(cur, cur.split('').reverse().join(''));
}, [] as string[]);

const goodNumbers = [
  '14',
  '67',
  '93',
  '82',
  '19',
  '87',
  '43',
  '26',
  '13',
  '68',
  '94',
  '72',
  '11',
  '22',
  '99',
  '88',
  '77',
  '66',
  '44',
  '33',
].reduce((acc, cur) => {
  return acc.concat(cur, cur.split('').reverse().join(''));
}, [] as string[]);

function NumberList(props: { numbers: string[] }) {
  const { numbers } = props;
  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th>凶星号码标记：</th>
          <th>吉星号码标记：</th>
        </tr>
      </thead>
      {
        numbers.map((number) => (
          <tr className=' text-2xl text-blue-500' key={number}>
            <td className='text-center'>
              <span className='text-xl text-slate-600'>
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlight(number, badNumbers),
                  }}
                />
              </span>
            </td>
            <td className='text-center'>
              <span
                dangerouslySetInnerHTML={{
                  __html: highlight(number, goodNumbers),
                }}
              />
            </td>
          </tr>

        ))
      }
    </table>
  );
}

export default NumberList;
