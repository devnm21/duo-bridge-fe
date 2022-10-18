import "./Header.css";
function Header(props) {
  return (
    <div className="header-container">
      <h1>{props.name}</h1>
      <button className="connect-btn">Connect Wallet</button>
    </div>
  );
}

export default Header;
