import axios from "axios";

function AxiosUsers() {
  const fetchData = async () => {
    const res = await axios.get(
      "https://mockapi.io/api/v1/users"
    );
    console.log(res.data);
  };

  return <button onClick={fetchData}>Axios Fetch</button>;
}
