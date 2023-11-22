import React from "react";

const CarouselSm2 = ({ data, data2, id, id2 }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-full" id={id}>
      <div className="mx-10" id="banner">
        <h1 className="text-3xl my-4">{id}</h1>
        <div className="container w-full flex justify-center items-center m-auto">
          <div className="gallery flex justify-center items-center">
            {data.map((el, index) => {
              return (
                <div
                  className={`img-class-sm m-[10px] bg-cover bg-center h-[400px] w-[100px]`}
                  style={{ backgroundImage: `url(${el.src})` }}
                >
                  <div>{index + 1}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-10">
        <h1 className="text-3xl my-4">{id2}</h1>
        <div className="container w-full flex justify-center items-center m-auto">
          <div className="gallery flex justify-center items-center">
            {data2.map((el, index) => {
              return (
                <div
                  className={`img-class-sm m-[10px] bg-cover bg-center h-[400px] w-[100px]`}
                  style={{ backgroundImage: `url(${el.src})` }}
                >
                  <div>{index + 1}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSm2;
