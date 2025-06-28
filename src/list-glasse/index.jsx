import React from "react";
import { useState } from "react";
import DataJson from "./data.json";
export default function index() {
  const [listGlasses] = useState(DataJson);
  const [imgPath, setImgPath] = useState(listGlasses[0].url);
  const [namePath, setnamePath] = useState(listGlasses[0].name);
  const [pricePath, setPricePath] = useState(listGlasses[0].price);
  const [descPath, setDescPath] = useState(listGlasses[0].desc);
  const hanlechangeColor = (img, name, price, desc) => {
    // console.log(img, name, price, desc);
    setImgPath(img);
    setnamePath(name);
    setPricePath(price);
    setDescPath(desc);
  };
  const renderFace = () => {
    return (
      <>
        <div>
          <div className="card-img relative">
            <div className="img-face">
              <img src="public/glassesImage/model.jpg" width="300px" />
            </div>
            <div className="img-glasses absolute top-24 right-18">
              <div>
                <img src="{imgPath}" width="150px" />
              </div>
            </div>
          </div>
          <div className="card-content absolute top-60 bg-amber-500 w-full">
            <h1 className="text-2xl text-fuchsia-300">
              Name: {"{"}namePath{"}"}
            </h1>
            <h2 className="text-xl">
              Price: {"{"}pricePath{"}"}
            </h2>
            <p>
              Desc: {"{"}descPath{"}"}
            </p>
          </div>
        </div>
      </>
    );
  };
  const renderListGlasses = () => {
    const listG = listGlasses.map((glass) => {
      return (
        <div key={glass.id}>
          <button
            onClick={() =>
              hanlechangeColor(glass.url, glass.name, glass.price, glass.desc)
            }
          >
            <img className="mr-2" src={glass.url} />
          </button>
        </div>
      );
    });
    return listG;
  };
  return (
    <div>
      <div class="container max-w-8xl w-full mx-auto p-6 m-6 flex justify-around bg-amber-100">
        <div class="cards-left relative">{renderFace()}</div>
        <div class="cards-right">
          <div class="card-img">
            <img src="public/glassesImage/model.jpg" width="300px" />
          </div>
        </div>
      </div>
      <div class="container max-w-8xl mx-auto p-6 m-6 flex justify-between bg-black">
        <div class="glasses flex mx-auto">{renderListGlasses()}</div>
      </div>
    </div>
  );
}
