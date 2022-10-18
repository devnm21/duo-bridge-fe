import "./SwitchChain.css";
import Chain1Img from "../../BSC.png";
import Chain2Img from "../../Chain2.png";
import SwitchIcon from "../SwitchIcon/SwitchIcon";
import { useState } from "react";

const chainConfig = {
  BSC: {
    logo: Chain1Img,
  },
  PoL: {
    logo: Chain2Img,
  },
};

function SwitchChain(props) {
  return (
    <div className="switch-container">
      <img src={chainConfig[props.from].logo} height={250} />
      <SwitchIcon onClick={props.toggle} />
      <img src={chainConfig[props.to].logo} height={250} />
    </div>
  );
}

export default SwitchChain;
