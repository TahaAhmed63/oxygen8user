import { useNavigate, Link } from "react-router-dom";

function Card({...item}) {
  const { id, name, image, chapters,pack  } = item;

  const img_link = localStorage.getItem("image_link");

  const navigate = useNavigate();
  function getDetail(id) {
    navigate(`/coursedetail/${id}`);
  }

  return (
    <div
      className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 grid-item cat1 cat2 cat4"
      onClick={() => {
        getDetail(id);
      }}
    >

      <div className="course__item white-bg mb-30 fix">
      <div className="row">
      <div className="col-xxl-4 col-xl-4 col-lg-4">
        <div className="course__thumb w-img p-relative fix">
          <Link>
            <img src={`${img_link}${image}`} alt="" width="300" height="250" />
          </Link>
        </div>
        </div>
        <div className="col-xxl-8 col-xl-8 col-lg-8">
        <div className="course__content" style={{
           
            padding:" 2px 30px",
            height: "100%",
            display: "flex",
gap:"11px",
       flexDirection: "column",
            justifyContent: "space-between"
        
        }}>
          <div className="course__meta d-flex align-items-center justify-content-between" style={{
            paddingTop:"22px"
          }}>
            <div className="course__lesson">
              <span>
                <i className="far fa-book-alt"></i>
                {chapters?.length} Sessions`{" "}
              </span>
            </div>
          </div>
          <h3
            className="course__title text-start pt-5 " style={{
              marginBottom:"5rem"
            }}
          >
            <Link style={{textDecoration:"none",color:"#000"}}>{name}</Link>
          </h3>
            <div className="course__more d-flex justify-content-between align-items-flex-end mb-5" style={{paddingLeft:"0px"}}>
          <div className="course__status">
            <span style={{ color: "#337c75" }}>{pack ? 'Enroll' : 'Paid'}</span>
          </div>
          <div className="course__btn">
            <Link style={{textDecoration:"none"}} href="#" className="link-btn" to="/coursedetail">

Find Out More
              <i className="far fa-arrow-right"></i>
              <i className="far fa-arrow-right"></i>
            </Link>
          </div>
          </div>
        </div>
        </div>

        {/* <div className="course__more d-flex justify-content-between align-items-center">
          <div className="course__status">
            <span style={{ color: "#337c75" }}>{pack ? 'Enroll' : 'Paid'}</span>
          </div>
          <div className="course__btn">
            <Link style={{textDecoration:"none"}} href="#" className="link-btn" to="/coursedetail">

Find Out More
              <i className="far fa-arrow-right"></i>
              <i className="far fa-arrow-right"></i>
            </Link>
          </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Card;
