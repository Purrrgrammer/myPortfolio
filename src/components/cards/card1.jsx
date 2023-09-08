import React from "react";
// import { tuImages, threeddesign, threeddesign2 } from '../../resource/tuwork/index'

function WorkCard({ src, key }) {
  return (
    <img
      alt="Card for Work"
      key={key}
      src={src}
      className="transition ease-in-out duration-700 hover:duration-700 hover:ease-in-out
                        flex-1 h-80 object-cover overflow-hidden object-center cursor-pointer hover:object-center hover:overflow-hidden hover:flex-auto"
    />
  );
}

export default WorkCard;
