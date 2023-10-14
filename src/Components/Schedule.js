import React from 'react'
import '../CSS/Schedule.css'

function Schedule() {
  return (
    <div className='schedule'>
      <div className="schedule__container">
        <div className="schedule__header">
            <h1>SCHEDULE</h1>
        </div>

        <div className="schedule__date__and__name">
            <div className="schedule__date">
                <p>25 Nov 2016</p>
            </div>

            <div className="schedule__name">
                <p>Vestivellum Viverra</p>
            </div>

            <div className="schedule__date">
                <p>28 Nov 2016</p>
            </div>

            <div className="schedule__name">
                <p>Vestivellum Viverra</p>
            </div>

            <div className="schedule__date">
                <p>18 Dec 2016</p>
            </div>

            <div className="schedule__name">
                <p>Vestivellum Viverra</p>
            </div>

            <div className="schedule__date">
                <p>7 Jan 2016</p>
            </div>

            <div className="schedule__name">
                <p>Vestivellum Viverra</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
