import ArrowLeft from "../../arrow-left.png";
import ArrowRight from "../../arrow-right.png";
function SwitchIcon(props) {
  return (
    <div
      onClick={props.onClick}
      style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
    >
      <img height={50} src={ArrowLeft} />
      <img height={50} src={ArrowRight} />
    </div>
  );
}
export default SwitchIcon;
