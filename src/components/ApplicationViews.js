import React from "react"
import { Redirect, Route } from "react-router-dom"
import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"
import { ProjectProvider } from "./projects/ProjectProvider"
import { ProjectList } from "./projects/ProjectList"
import { TypeProvider } from "./type/TypeProvider"

export const ApplicationViews = () => {
    // If user will be able to decide default view as either
    // project or dashboard, then another if statement
    // will need to go on the route exact path "/"
    return (
    <> 
        <Header />
        
        <Route exact path="/">
            <Redirect to="/projects" />
        </Route>

        <Route exact path="/projects">
            <ProjectProvider>
                <TypeProvider>
                    <ProjectList />
                </TypeProvider>
            </ProjectProvider>
        </Route>
        
        <Footer />
    </>
    )
}