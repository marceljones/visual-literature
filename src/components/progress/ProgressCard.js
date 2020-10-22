import React, { useRef } from "react"
import { Modal } from "../modal/Modal"
import "./ProgressCard.css"

export const ProgressCard = (props) => {
    
    console.log(props.projectId)

    const progressModal = useRef()

    return (
    <section className="card card__color--orange card__progress">
        
        <div className="progress__content">
            <h3 className="progress_h3">Goal</h3>
            <p className="progress_p">XX words, XX days a XX OR daily</p>
            <h3 className="progress_h3">Progress</h3>
            <p className="progress_p">PROGRESS BAR</p>
            <p className="progress_p">XX / XX words written</p>
            <p className="progress_p">XX days left OR none if daily</p>
        </div>

        <button className="btn btn--purple"
        onClick={e => progressModal.current.className = "background__modal modal__active"}>Add Progress</button>
        
        <Modal ref={progressModal} contentFunction={"NONE"} width="modal__width--wide" />

    </section>
    )
}