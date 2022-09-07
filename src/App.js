import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Images from "./components/Images";
import Randomizer from "./components/Randomizer";

function App() {
  let content = [
    {
      image:
        "https://www.buildyouraquarium.com/wp-content/uploads/2020/04/Pomacanthus-asfur.jpg",
      title: "blue Bettas",
      text: [
        "While blue is not a common color in nature it turns out that blue Bettas are some of the most popular aquarium fish in the trade. ",
        "In the wild Bettas tend to be a murky brown with red and blue mixed into their fins.",
        "Thanks to centuries of selective breeding by Thai specialists, many captive male Bettas not only have flag-like fins but a brilliant cobalt blue color that’s nothing like their wild ancestors.",
      ],
    },
    {
      image:
        "https://www.buildyouraquarium.com/wp-content/uploads/2020/04/blue-peacock-cichlid.jpg",
      title: "Blue Peacock Cichlid",
      text: [
        "Lake Malawi is home to dozens of Cichlids with varying amounts of blue but the Blue Peacock Cichlid may be the most intensely colored of them all.",
        "While they are a true blue aquarium fish, Peacocks also come in marble, yellow, and even albino color morphs!",
        "Territorial but only semi-aggressive, Blue Peacocks work nicely for African Cichlid community tanks where individuals dart constantly between rocks and face off in brief aggressive displays. ",
      ],
    },
    {
      image:
        "https://www.buildyouraquarium.com/wp-content/uploads/2020/04/blue-rainbowfish.jpg",
      title: "Lake Kutubu Rainbowfish",
      text: [
        "Lake Kutubu Rainbowfish are found only in a single remote river and lake in Papua New Guinea, one of the least developed and inaccessible regions on Earth. ",
        "Despite that they are relatively common in the aquarium trade as they are hardy, beautiful, and easy to breed.",
        "Their iridescent blue flanks are mesmerizing when they school together and their moderate size (4 inches) makes them perfect dither fish for Cichlids and other semi-aggressive fish.",
      ],
    },
    {
      image:
        "https://www.buildyouraquarium.com/wp-content/uploads/2020/04/blue-guppy.jpg",
      title: "Blue Delta Guppy",
      text: [
        "Guppies are famously easy to breed, feed, and keep. They also come in hundreds of stunning color morphs, from Reticulated and Fire Red to one of my favorites: the Blue Delta Guppy. ",
        "Unlike some blue aquarium fish Blue Delta Guppies are highly variable. Some males have blue coloring mostly in the rear half of their body as well as their wide, triangular",
        "delta tail fin. Others, considered higher quality, have blue extending all the way to the head.",
      ],
    },
    {
      image:
        "https://www.buildyouraquarium.com/wp-content/uploads/2020/04/blue-gourami.jpg",
      title: "Blue Gourami",
      text: [
        "Blue Gourami have been a part of the aquarium fish trade for decades. Moderately sized and very tolerant of a wide range of water conditions,",
        "they are excellent choices for medium to large community aquariums.",
        "As far as blue aquarium fish go, they can be on the aggressive side, despite their small mouths.",
      ],
    },
    {
      image:
        "https://www.buildyouraquarium.com/wp-content/uploads/2020/04/Paracanthurus-hepatus.jpg",
      title: "Royal Blue Tang",
      text: [
        "Also known as the Hippo Tang, this fish has found everlasting fame through Finding Nemo’s Dory! ",
        "Unfortunately, unlike Common Clownfish, they aren’t exactly beginner-friendly fish.",
        "Royal Blue Tangs aren’t as sensitive as some of their cousins. However they do need a stable, ",
      ],
    },
  ];

  const [randomImageNumber, setrandomImageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const setrandomImageNumberHandler = () => {
    setIsLoading(true);
    console.log(isLoading);
    setrandomImageNumber(Math.floor(Math.random() * content.length));
    setTimeout(setIsLoadingHandler, 500);
  };

  const setIsLoadingHandler = () => {
    setIsLoading(false);
    console.log(isLoading);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Randomizer
            content={content}
            randomImageNumber={randomImageNumber}
            setrandomImageNumberHandler={setrandomImageNumberHandler}
            isLoading={isLoading}
          />
        }
      />
      <Route path="/images" element={<Images content={content} />} />
    </Routes>
  );
}

export default App;
