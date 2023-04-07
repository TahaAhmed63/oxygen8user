import React from 'react'
import Lesson from '../Lesson/Lesson'

const Video = ({...item}) => {

    const arr= [1,3,4]
  return (
    <div class="accordion" id="course__accordion">
    <div class="accordion-item mb-50">
      <h2 class="accordion-header" id="week-01">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#week-01-content"
          aria-expanded="true"
          aria-controls="week-01-content"
        >
          Video 01
        </button>
      </h2>
      <div
        id="week-01-content"
        class="accordion-collapse collapse show"
        aria-labelledby="week-01"
        data-bs-parent="#course__accordion"
      >
        <div class="accordion-body">
          {arr.map(item => <Lesson/>)}
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Video