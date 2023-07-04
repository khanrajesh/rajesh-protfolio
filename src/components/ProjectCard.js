import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx"  onClick={()=>handleClick(url)}>
        <img className="proj-imgbx-image" src={imgUrl} />
        <div className="proj-txtx" >
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