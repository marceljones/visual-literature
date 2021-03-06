import React from "react"

export const DashGoalCard = (props) => {
    
    return (
        <section className="card card__color--white card__dash card__dash--goal">
            <h3 className="dash__h3">Goal</h3>
            <p className="dash__p">
                Write {props.props.wordCountGoal} words {
                    props.props.goalFrequency === "daily" ? "daily" :
                        props.props.goalFrequency === "weekly" ? `${props.props.daysPerFrequency} days per week` : `${props.props.daysPerFrequency} days per month`
                }.
            </p>
        </section>
    )
}