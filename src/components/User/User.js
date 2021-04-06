import { FaCheck } from "react-icons/fa";
import { connect } from "react-redux";
import { currentUser } from "../../actions";

function User({ img, user, activate, dispatch }) {
  return (
    <button
      className={`card ${activate ? "activate" : ""}`}
      autoFocus={activate}
      onClick={() => dispatch(currentUser(user))}
    >
      <img src={img} alt={user} />
      <div className="mt-4">{user}</div>
      <div className="icon">
        <FaCheck />
      </div>
    </button>
  );
}

export default connect()(User);
