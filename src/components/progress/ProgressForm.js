import React, { useContext, useState, useEffect} from "react"
import { ProgressContext } from "./ProgressProvider"
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
    
    // Populates date picker with current date.
    const currentDate = new Date()
    const convertedDate = currentDate.toISOString().slice(0,10)

    // Get the current project being passed in.
    const passedInProject = project.project.project
    // console.log(passedInProject)
    const projectId = passedInProject.id

    // Set default progress so form can reset when needed.
    const defaultProgress = {
        id: 1,
        projectId: 4,
        dateEntered: convertedDate,
        wordsWritten: 0,
        revised: false,
        edited: false,
        proofread: false
    }

    const { getProgressByProject, addProgress } = useContext(ProgressContext)

    const [ progress, setProgress ] = useState(defaultProgress)
    const [ isLoading, setIsLoading ] = useState(true)

    // If any progress changes, re-render the progress form
    // useEffect(() => {
    //     // CHECK for if there is any PROGRESS on this PROJECT'S
    //     // current date ? show edit : show add
    //     // setIsLoading(false)
    // }, [])

    const constructNewProgress = () => {
        console.log("SUBMITTED PROGRESS")
        // CHECK FOR IF GOAL COMPLETED FOR TODAY
    }

    const handleControlledInputChange = e => {
        const newProgress = { ...progress }
        newProgress[e.target.name] = e.target.value
        setProgress(newProgress)
}

    const createProgress = (e) => {
        e.preventDefault()
        constructNewProgress()
    }

    return (
        <form className="form__progress" onSubmit={createProgress}>

            <h3 className="form__h3">
                Add Progress    
            </h3>        
            
            <fieldset>
                <label htmlFor="progressDate">Progress date:</label>
                <input type="date"
                onChange={handleControlledInputChange}
                id="progressDate"
                name="dateEntered"
                value={progress.dateEntered}
                />
            </fieldset>

            <fieldset>
                <label htmlFor="progressGoal">Words written: </label>
                <input type="number"
                 onChange={handleControlledInputChange}
                 id="progressGoal"
                 name="wordsWritten"
                 value={progress.wordCountGoal}
                 required
                 autoFocus
                 />
            </fieldset>

            <fieldset>
                <label>Writing Processes Completed</label>

                <input type="checkbox" id="revised" name="revised" value="revised"
                defaultChecked={progress.revised}
                onChange={handleControlledInputChange}
                />
                <label htmlFor="revised">Revised</label>

                <input type="checkbox" id="edited" name="edited" value="edited"
                defaultChecked={progress.edited}
                onChange={handleControlledInputChange}/>
                <label htmlFor="edited">Edited</label>

                <input type="checkbox" id="proofread" name="proofread" value="proofread"
                defaultChecked={progress.proofread}
                onChange={handleControlledInputChange}/>
                <label htmlFor="proofread">Proofread</label>

            </fieldset>

            <div className="progress__submit">
                <button 
                className="btn btn--green"
                type="submit"
                disabled={isLoading}>
                    Add
                </button>
            </div>

        </form>
    )

}