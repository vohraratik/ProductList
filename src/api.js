import { useState, useEffect } from "react";

export function Api() {
 const [data] = useState(null);
 const [loading] = useState(true);
 const [error] = useState(null);

useEffect(() => {
  fetch(`https://marbleunlimited.a2hosted.com/api/inventory/main.php`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    return response.json();
  })
  .then((actualData) => console.log(actualData))
  .catch((err) => {
    console.log(err.message);
  });
}, []);
return (
  <div className="App">
    <h3>API Posts</h3>
    {loading && <div>A moment please...</div>}
    {error && (
      <div>{`There is a problem fetching the post data - ${error}`}</div>
    )}
    <ul>
      {data &&
        data.map((available_quantity,total_available,available_size) => (
          <li>
            <h3>available_quantity: {available_quantity}</h3>
            <h3>total_available: {total_available}</h3>
            <h3>available_size: {available_size}</h3>
          </li>
        ))}
    </ul>
  </div>
);
}