import { useState } from "react";

export default function App() {
    const [fullImgObj, setFullImgObj] = useState({
        src: "images/pic1.jpg",
        alt: "Closeup of a human eye"
    });

    const [isDark, setIsDark] = useState(false);

    const images = [
        {
            src: "images/pic1.jpg",
            alt: "Closeup of a human eye"
        },
        {
            src: "images/pic2.jpg",
            alt: "Rock that looks like a wave"
        },
        {
            src: "images/pic3.jpg",
            alt: "Purple and white pansies"
        },
        {
            src: "images/pic4.jpg",
            alt: "Section of wall from a pharoah's tomb"
        },
        {
            src: "images/pic5.jpg",
            alt: "Large moth on a leaf"
        }
    ]
    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
            className="displayed-img"
            src={fullImgObj.src}
            alt={fullImgObj.alt}
          />
          <div style={{backgroundColor: isDark ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"}} className="overlay"></div>
          <button onClick={() => {
            if(isDark){
                setIsDark(false);
            } else {
                setIsDark(true);
            }
          }} className="dark">{isDark ? "Lighten" : "Darken"} </button>
        </div>
        <div className="thumb-bar">
            {images.map((pic) => {
                return(
                    <img onClick={() => {
                        setFullImgObj(pic);
                    }}
                    key={pic.src}
                    src={pic.src}
                    alt={pic.alt} />
                )
            })}
        </div>
      </>
    );
  }