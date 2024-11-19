import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../app/actions/userAction";

const UserListUpdated = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store.updatedReducer);
  console.log(state);

  useEffect(() => {
    dispatch(getUsers()); // aksiyonu çağırdık
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

export default UserListUpdated;
