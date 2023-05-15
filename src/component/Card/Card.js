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
      className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat2 cat4"
      onClick={() => {
        getDetail(id);
      }}
    >
      <div className="course__item white-bg mb-30 fix">
        <div className="course__thumb w-img p-relative fix">
          <Link>
            <img src={`${img_link}${image}`} alt="" width="300" height="250" />
          </Link>
        </div>
        <div className="course__content">
          <div className="course__meta d-flex align-items-center justify-content-between">
            <div className="course__lesson">
              <span>
                <i className="far fa-book-alt"></i>
                {chapters?.length} chapters`{" "}
              </span>
            </div>
          </div>
          <h3
            className="course__title text-start pt-5"
          >
            <Link style={{textDecoration:"none",color:"#000"}}>{name}</Link>
          </h3>
        </div>
        <div className="course__more d-flex justify-content-between align-items-center">
          <div className="course__status">
            <span style={{ color: "#337c75" }}>{pack ? 'Enroll' : 'Paid'}</span>
          </div>
          <div className="course__btn">
            <Link style={{textDecoration:"none"}} href="#" className="link-btn" to="/coursedetail">
              Know Details
              <i className="far fa-arrow-right"></i>
              <i className="far fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
