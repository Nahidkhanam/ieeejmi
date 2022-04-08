import React from "react";
import Ieeecs from "../../../assets/images/home/sub_branches_ieeecs.png";
import Pels from "../../../assets/images/home/sub_branches_pels.png";
import Wie from "../../../assets/images/home/sub_branches_wie.png";
import Pes from "../../../assets/images/home/sub_branches_pes.png";
import ButtonLogo from "../../../assets/images/home/sub_branches_button_logo.png";
import HeadLeft from "../../../assets/images/home/sub_branches_head_logo_left.svg";
import HeadRight from "../../../assets/images/home/sub_branches_head_logo_right.svg";

function SubBranches() {
  return (
    <div className="min-h-screen  flex flex-col font-body justify-between">
      <h3 className="flex justify-center text-4xl font-bold text-center mt-8">
        <img className="mx-2 rotate-12" src={HeadLeft} alt="" /> Sub Branches{" "}
        <img className="mx-2" src={HeadRight} alt="" />
      </h3>
      <div className="shrink m-auto max-w-sm grid grid-cols-2 gap-10">
        <div className="p-2  flex flex-col justify-between">
          <img
            src={Ieeecs}
            alt="ieeecs"
            className="hover:scale-110 transition-all"
          />
          <button className="bg-black max-w-28 mx-auto shrink text-white text-xs rounded-full px-4 py-1">
            <a className="flex justify-center" href="https://cs.ieeejmi.org/">
              cs.ieeejmi.org{" "}
              <img className="mx-1 w-3 mt-0.5 h-3 " src={ButtonLogo} alt="" />
            </a>
          </button>
        </div>
        <div>
          <img
            src={Pels}
            alt="pels"
            className="hover:scale-110 transition-all"
          />
        </div>
        <div>
          <img src={Wie} alt="wie" className="hover:scale-110 transition-all" />
        </div>
        <div>
          <img src={Pes} alt="pes" className="hover:scale-110 transition-all" />
        </div>
      </div>
    </div>
  );
}

export default SubBranches;
