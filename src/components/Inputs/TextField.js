import { BiEnvelope, BiLock } from "react-icons/bi";

function TextInput(props) {
  const iconType = () => {
    switch (props.type) {
      case "email":
        return <BiEnvelope className="icon" />;
      case "password":
        return <BiLock className="icon" />;
      default:
        return;
    }
  };
  return (
    <div className="text-field">
      <input
        className={props.forgetLink ? "postfix" : ""}
        type={props.type}
        placeholder={props.placeholder}
        onInput={(e) => {
          props.value.current = e.target.value;
        }}
        {...props.validate}
      />
      <span className="label primary pa-4 mr-4">{props.label}</span>
      {iconType()}
      <div className={props.forgetLink ? "postfixLink" : "hidden"}>
        <a href="#">forget</a> ?
      </div>
    </div>
  );
}

export default TextInput;
