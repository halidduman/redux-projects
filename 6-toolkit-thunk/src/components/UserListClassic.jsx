import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setUsers } from "../app/slices/classicSlice";
import axios from "axios";

const UserListClassic = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store.classicReducer);
  console.log(state);

  useEffect(() => {
    dispatch(setLoading());

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(setUsers(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, []);

  return (
    <div>
      {state.isLoading ? (
        <h1>Yükleniyor...</h1>
      ) : state.isError ? (
        <h1>
          {state.isError}
          <button>Tekrar dene</button>
        </h1>
      ) : (
        state.users.map((user) => <h1 key={user.id}>{user.name}</h1>)
      )}
    </div>
  );
};

export default UserListClassic;
