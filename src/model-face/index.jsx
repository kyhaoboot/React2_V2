import React from "react";
import DataJson from "../list-glasse/data.json";
export default function index() {
  const [imgPath, setImgPath] = useState(listGlasses[0].url);

  return (
    <div>
      <div class="container max-w-8xl w-full mx-auto p-6 m-6 flex justify-around bg-amber-100">
        <div class="cards-left relative">
          <div class="card-img relative">
            <div class="img-face">
              <img src="public/glassesImage/model.jpg" width="300px" />
            </div>
            <div class="img-glasses absolute top-24 right-18">
              <img src="public/glassesImage/v1.png" width="150px" />
            </div>
          </div>
          <div class="card-content absolute top-60 bg-amber-500 w-full">
            <h1 class="text-2xl text-fuchsia-300">Name: GUCCI G8850U</h1>
            <h2 class="text-xl">Price: 30</h2>
            <p>
              Desc: Light pink square lenses define these sunglasses, ending
              with amother of pearl effect tip.
            </p>
          </div>
        </div>
        <div class="cards-right">
          <div class="card-img">
            <img src="public/glassesImage/model.jpg" width="300px" />
          </div>
        </div>
      </div>
    </div>
  );
}
