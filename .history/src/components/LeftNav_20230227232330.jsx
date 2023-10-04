import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
    const {selectCategory, setSelectCategory, mobileMenu} = useContext(Context);

      const clickHandler = (name, type) =>{
switch (type) {
    case value:
        
        break;

    default:
        break;
}
      }

    return (
        <div className="md:black w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all">
            <div className="flex px-5 flex-col">
                {categories.map((item) => {
                    return (
                        <React.Fragment>
                            <LeftNavMenuItem
                                text={item.type === "home" ? "Home" :item.name}
                                icon={item.icon}
                                action={()=>{}}
                                className={`${selectCategory === item.name ? "bg-white/[0.15]" :""}`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.2]"/>
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2]"/>
                <div className="text-white/[0.5] text-[12px]">
                clone by : SD BIND
                </div>
            </div>
        </div>
    );
};

export default LeftNav