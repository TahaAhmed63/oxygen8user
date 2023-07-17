import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Lesson from "../Lesson/Lesson";

const Chapter = ({ item,buy,chapterLength }) => {
 
  const { id, lectures } = item;


// const chapterLength2=chapterLength

  return (
    <div className="accordion" id="course__accordion">
      <Accordion>
        <Accordion.Item eventKey={id}>
          <Accordion.Header>Chapter {id
}</Accordion.Header>
          <Accordion.Body>
            {lectures?.map((item) => (
              <Lesson item={item} buy={buy} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Chapter;
