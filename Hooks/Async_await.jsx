function AsyncUsers() {
  const fetchData = async () => {
    try {
      const res = await fetch("https://mockapi.io/api/v1/users");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={fetchData}>Async Fetch</button>;
}