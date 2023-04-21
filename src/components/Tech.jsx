import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <div>
        <p className={`${styles.sectionSubText} `}>Technical Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
      </div>

    <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
