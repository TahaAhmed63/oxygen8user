import React from 'react'
import Lesson from '../Lesson/Lesson'

const Chapter = ({...item}) => {

    const {course_id,name ,lectures}=item

  return (
    <div className="accordion" id="course__accordion">
    <div className="accordion-item mb-50">
      <h2 className="accordion-header" id="week-01">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#week-01-content"
          aria-expanded="true"
          aria-controls="week-01-content"
        >
          {name}
        </button>
      </h2>
      <div
        id="week-01-content"
        className="accordion-collapse collapse show"
        aria-labelledby="week-01"
        data-bs-parent="#course__accordion"
      >
        <div className="accordion-body">
          {lectures?.map(item => <Lesson {...item}/>)}
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Chapter