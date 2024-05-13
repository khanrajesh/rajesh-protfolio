import {Col} from "react-bootstrap";

export const VentureCard = ({title, description, imgUrl, url}) => {
    return (
        <Col size={12} sm={4} md={6}>
            <div className="vent-imgbx" onClick={() => handleClick(url)}>
                <h4 className="vent-title"><b>{title}</b></h4>
                <img className="vent-imgbx-image" src={imgUrl}/>
                <div className="vent-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

function handleClick(url) {
    // Open a new web page when the element is clicked
    window.open(url, '_blank');
}