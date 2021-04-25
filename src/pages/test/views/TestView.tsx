import { useState } from 'react';

const TestView = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div>this is hook</div>
      <div>{count}</div>
      <div onClick={() => setCount(count + 1)}>add Count</div>
    </>
  );
};

export default TestView;
