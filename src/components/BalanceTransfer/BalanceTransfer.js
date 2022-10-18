import "./BalanceTransfer.css";
function BalanceTransfer(props) {
  return (
    <div className="balance-transfer-container">
      <div className="balance-transfer">
        <p>$DUO Balance</p>
        <p>{props.balance}</p>
        <input
          value={props.transferAmount}
          onChange={(e) => props.onTransferAmountChange(e.target.value)}
          placeholder="Amount to Transfer"
          className="transfer-input"
        />
        <div
          className="tranfer-btn-container"
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <button onClick={props.onClick} className="transfer-btn">
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
}

export default BalanceTransfer;
