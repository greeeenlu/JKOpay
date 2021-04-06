import { useEffect } from "react";
import User from "./User";
import { Accounts } from "../../data";
import { connect } from "react-redux";
import { currentUser } from "../../actions";

const mapStateToProps = (state) => ({
  user: state.user
});

function Users({ user, dispatch }) {
  useEffect(() => {
    if (!user.userType) dispatch(currentUser(Accounts[0].name));
  }, []);

  const users = Accounts.map((account) => {
    return (
      <User
        user={account.name}
        img={account.img}
        key={account.id}
        activate={account.name === user.userType}
      />
    );
  });

  return (
    <>
      <div className="title">Choose Account Type</div>
      <div className="flex">{users}</div>
    </>
  );
}

export default connect(mapStateToProps)(Users);
