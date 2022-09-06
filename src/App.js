import { useState } from "react";
import "./App.css";
import DescriptionContainer from "./components/DescriptionContainer";
import Header from "./components/Header";
import ImageContainer from "./components/ImageContainer";

function App() {
  let content = [
    {
      image:
        "https://www.buildyouraquarium.com/wp-content/uploads/2020/04/blue-betta-fish.jpg",
      title: "blue Bettas",
      text1:
        "While blue is not a common color in nature it turns out that blue Bettas are some of the most popular aquarium fish in the trade. ",
      text2:
        "In the wild Bettas tend to be a murky brown with red and blue mixed into their fins.",
      text3:
        "Thanks to centuries of selective breeding by Thai specialists, many captive male Bettas not only have flag-like fins but a brilliant cobalt blue color that’s nothing like their wild ancestors.",
    },
    {
      image:
        "https://www.buildyouraquarium.com/wp-content/uploads/2020/04/blue-peacock-cichlid.jpg",
      title: "Blue Peacock Cichlid",
      text1:
        "Lake Malawi is home to dozens of Cichlids with varying amounts of blue but the Blue Peacock Cichlid may be the most intensely colored of them all.",
      text2:
        "While they are a true blue aquarium fish, Peacocks also come in marble, yellow, and even albino color morphs!",
      text3:
        "Territorial but only semi-aggressive, Blue Peacocks work nicely for African Cichlid community tanks where individuals dart constantly between rocks and face off in brief aggressive displays. ",
    },
    {
      image:
        "https://www.buildyouraquarium.com/wp-content/uploads/2020/04/blue-rainbowfish.jpg",
      title: "Lake Kutubu Rainbowfish",
      text1:
        "Lake Kutubu Rainbowfish are found only in a single remote river and lake in Papua New Guinea, one of the least developed and inaccessible regions on Earth. ",
      text2:
        "Despite that they are relatively common in the aquarium trade as they are hardy, beautiful, and easy to breed.",
      text3:
        "Their iridescent blue flanks are mesmerizing when they school together and their moderate size (4 inches) makes them perfect dither fish for Cichlids and other semi-aggressive fish.",
    },
    {
      image:
        "https://www.buildyouraquarium.com/wp-content/uploads/2020/04/blue-guppy.jpg",
      title: "Blue Delta Guppy",
      text1:
        "Guppies are famously easy to breed, feed, and keep. They also come in hundreds of stunning color morphs, from Reticulated and Fire Red to one of my favorites: the Blue Delta Guppy. ",
      text2:
        "Unlike some blue aquarium fish Blue Delta Guppies are highly variable. Some males have blue coloring mostly in the rear half of their body as well as their wide, triangular",
      text3:
        "delta tail fin. Others, considered higher quality, have blue extending all the way to the head.",
    },
    {
      image:
        "https://www.buildyouraquarium.com/wp-content/uploads/2020/04/blue-gourami.jpg",
      title: "Blue Gourami",
      text1:
        "Blue Gourami have been a part of the aquarium fish trade for decades. Moderately sized and very tolerant of a wide range of water conditions,",
      text2:
        "they are excellent choices for medium to large community aquariums.",
      text3:
        "As far as blue aquarium fish go, they can be on the aggressive side, despite their small mouths.",
    },
    {
      image:
        "https://www.buildyouraquarium.com/wp-content/uploads/2020/04/Paracanthurus-hepatus.jpg",
      title: "Royal Blue Tang",
      text1:
        "Also known as the Hippo Tang, this fish has found everlasting fame through Finding Nemo’s Dory! ",
      text2:
        "Unfortunately, unlike Common Clownfish, they aren’t exactly beginner-friendly fish.",
      text3:
        "Royal Blue Tangs aren’t as sensitive as some of their cousins. However they do need a stable, ",
    },
  ];

  const [randomImageNumber, setrandomImageNumber] = useState(0);

  const setrandomImageNumberHandler = () => {
    setrandomImageNumber(Math.floor(Math.random() * content.length));
    console.log(randomImageNumber);
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="row mt-5">
          <div className="col-xs-12 col-md-6">
            <ImageContainer
              content={content}
              randomImageNumber={randomImageNumber}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <DescriptionContainer
              setrandomImageNumberHandler={setrandomImageNumberHandler}
              content={content}
              randomImageNumber={randomImageNumber}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
