import React from "react";

const Carousel1 = ({ data, id }) => {
  return (
    <div className="mx-10" id={id}>
      <h1 className="text-3xl my-4">{id}</h1>
      <div className="container w-full flex justify-center items-center m-auto">
        <div className="gallery flex justify-center items-center">
          {data.map((el, index) => {
            return (
              <div
                className={`img-class m-[10px] bg-cover bg-center h-[400px] w-[100px]`}
                style={{ backgroundImage: `url(${el.src})` }}
              >
                <div>{index + 1}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
