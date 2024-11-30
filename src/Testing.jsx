import{ useEffect, useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // useEffect hook
  useEffect(() => {
    // This effect runs after every render
    document.title = `You clicked ${count} times`;

    // Optional cleanup function, runs when the component unmounts or before the effect is re-run
    return () => {
      console.log("Cleanup when component unmounts or before the next effect");
    };
  }, [count]); // The dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ExampleComponent;
