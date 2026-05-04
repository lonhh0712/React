function FetchUsers() {
  const fetchData = () => {
    fetch("https://mockapi.io/api/v1/users")
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return <button onClick={fetchData}>Fetch Users</button>;
}
