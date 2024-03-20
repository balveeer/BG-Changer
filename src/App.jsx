import { useState } from "react";
const colors = [
  "bg-red-600",
  "bg-green-600",
  "bg-blue-600",
  "bg-teal-600",
  "bg-lime-600",
  "bg-fuchsia-600",
  "bg-gray-600",
  "bg-yellow-600",
  "random",
];

const randomColor = () => {
  let color = "#";
  const str = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    const ran = Math.floor(Math.random() * 16);
    color += str[ran];
  }
  return color;
};

function App() {
  const [bgColor, setBgColor] = useState("bg-black");
  const changeBG = (e) => {
    if (e.target.id == "random") {
      const color = randomColor();
      console.log(color);
      setBgColor(color);
    } else {
      setBgColor(e.target.id);
    }
  };
  return (
    <div
        style={{ backgroundColor: bgColor[0] == "#" ? bgColor : "" }}
        className={`h-screen ${
          bgColor[0] == "#" ? "" : bgColor
        } flex flex-col justify-start items-center `}>
      <h1 className="p-3 m-3 text-4xl font-bold text-center text-white">
        BackGround Changer
      </h1>
      <div className="h-full p-3 flex flex-col justify-end ">
        <div className="lg:rounded-full rounded-2xl p-4 gap-3 bg-white flex flex-wrap h-fit w-fit justify-center items-center">
          {colors.map((color) => (
            <button
              onClick={(e) => changeBG(e)}
              key={color}
              id={color}
              className={`h-12 min-w-24 p-2 text-white rounded-full ${
                color == "random"
                  ? "bg-gradient-to-br from-pink-500 via-indigo-500 to-teal-500 from-30% via-50% to-70%"
                  : color
              } shadow-lg outline-none font-bold`}
            >
              {color !== "random"
                ? color.slice(3, color.length - 4).toUpperCase()
                : "RANDOM"}{" "}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
