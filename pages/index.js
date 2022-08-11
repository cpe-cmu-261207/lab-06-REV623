import { useState } from "react";
import axios from "axios";
import UserCard from "../components/usercard";

export default function Home() {
  const [NumberUsers, setNumberUsers] = useState(1);
  const [users, setUsers] = useState([]);
  const genUsers = async () => {
    if(NumberUsers<1){
      alert("Invalid number of user");
      return;
    }
    const resp = await axios.get(`https://randomuser.me/api/?results=${NumberUsers}`);

    const newUsers = [];
    for(const user of resp.data.results){
      newUsers.push({
        img : user.picture.large,
        name : user.name.first+" "+user.name.last,
        email : user.email,
        address : `${user.location.city} ${user.location.state} ${user.location.country} ${user.location.postcode}`,
      })
    }
    setUsers(newUsers);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {setNumberUsers(event.target.value);}}
          value={NumberUsers}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {/* UserCards Section */}
      {users.map((user)=>(<UserCard key={user.name} {...user}/>))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Jedsadakorn Kritsadakul 640610623
      </p>
    </div>
  );
}
