import { useState } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Carousel = ({images}) => {
  const [idx, setIdx] = useState(0);

  return (
    <Row style={{height: "95%", overflowY: "hidden"}}>
      <Col xs={1} className="d-flex justify-content-center align-items-center" onClick={() => idx > 0 ? setIdx(idx - 1) : setIdx(idx)}>
        <ArrowLeftCircle size={96} className={idx > 0 ? "visible" : "invisible"}></ArrowLeftCircle>
      </Col>
      <Col style={{
              backgroundImage: `url("/img/${images[idx].image}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",          
            }}
            className="d-flex justify-content-center align-items-end text-center"
      >
        {images[idx].text ? <h1 style={{width: "100%", backgroundColor: "rgba(255, 255, 255, 0.6)"}}>{images[idx].text}</h1> : <></>}
      </Col>
      <Col xs={1} className="d-flex justify-content-center align-items-center" onClick={() => idx < images.length - 1 ? setIdx(idx + 1) : setIdx(idx)}>
        <ArrowRightCircle size={96} className={idx < images.length - 1 ? "visible" : "invisible"}></ArrowRightCircle>
      </Col>
    </Row>
  );
}

export default Carousel;