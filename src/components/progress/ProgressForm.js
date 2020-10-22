import React, { useContext, useState, useEffect} from "react"
// IMPORT PROGRESS PROVIDER
import "./ProgressForm.css"

    // Storing projectId to pass into the provider for getting
    // progress for current project, on current date
    // IF there is progress in the database for this date,
    // then you edit

// WRONG, the check needs to happen the second the progress section renders
// THAT WAY, the progress button will say edit/add based on the current date
// It can say Edit Today's Progress
// Or Add Today's Progress
// But that might be too restrictive sounding, so we'll have to see

// OR SAY GOAL COMPLETED FOR TODAY when you click show more.

// IF you've already added progress for today, could pop up modal saying,
// You've entered progress for today. Would you like to edit progress?


export const ProgressForm = project => {

    // const [ progress, setProgress ] = useContext(ProgressContext)

    const projectId = project.id
    console.log(project)

    // Populates date picker with current date
    const currentDate = new Date()
    const convertedDate = currentDate.toISOString().slice(0,10)

    // useEffect(() => {
    //     // getProgress(projectId)
    // })

//     const handleControlledInputChange = e => {
//         const newProgress = { ...progress }
//         newProgress[e.target.name] = e.target.value
//         setProgress(newProgress)
// }

    const createProject = (e) => {
        e.preventDefault()
        // constructNewProgress()
    }

    return (
        <form className="form__progress" onSubmit={createProject}>

            <h3 className="form__h3">
                Add Progress    
            </h3>        
            TODAY'S DATE

            WORDS WRITTEN

            Checkboxes
            REVISED
            EDITED
            PROOFREAD

            BEFORE WE SUBMIT, we do the check if goal met for today

        </form>
    )

}