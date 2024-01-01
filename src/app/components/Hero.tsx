import React from "react";
import { Container, Row, Col } from "reactstrap";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const imageUrls = [
    "./img/image1.png",
    "./img/image2.png",
    "./img/image3.png",
    "./img/image4.png",
    "./img/image5.png",
    "./img/image6.png",
    "./img/image7.png",
    "./img/image8.png",
    "./img/image9.png",
  ];

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="pt-20 pl-20 text-white ">
              <div className="flex-1 pt-36 space-y-5 padding-x">
                <h1 className="text-5xl font-lilita">
                  Generate <br />a
                  <span className="highlight__text"> Hand-writing number </span>
                  image <br /> with an intelligible quality
                </h1>
                <p className="text-base font-lato ">
                  Get to generate the random hand-writing number image <br />
                  using GANs model.
                </p>

                <button
                  type="button"
                  className="text-white bg-blue-600 py-2 px-2 rounded-md font-lato"
                >
                  Generate Images
                </button>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
              }}
            >
              {imageUrls.map((url, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={url}
                    alt={`Image ${index + 1}`}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
