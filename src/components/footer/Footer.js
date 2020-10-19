import React from "react"
import { WriteLogLogo } from "../branding/WriteLogLogo"
import { WriteLogTitle } from "../branding/WriteLogTitle"
import "./Footer.css"

export const Footer = () => {
    return (
        <footer>
            <div className="footer__row1">

                <section className="footer__branding">
                    <WriteLogLogo location="logo__footer" color="logo__green" line="logo__line--invisible"/>
                    <WriteLogTitle location="title__footer" color="title__green" />
                </section>

                <section className="footer__summary">
                    <h2 className="footer__heading">Summary</h2>
                    <p className="summary__p">
                        Assisting  writers with tracking, visualizing, and analyzing their writing projects.
                    </p>
                </section>

                <section className="footer__about">
                    <h2 className="footer__heading">About</h2>
                    <p className="about__p">
                        Then new column with created by Sam Edwards in TN, w/ linkedIn and github links
                    </p>
                </section>

                <section className="footer__tech">
                    <h2 className="footer__heading">Technologies Used</h2>
                    <ul className="tech__list">
                        <li className="tech__item">React</li>
                        <li className="tech__item">VS Code</li>
                        <li className="tech__item">Ubuntu Linux</li>
                        <li className="tech__item">Inkscape</li>
                        <li className="tech__item">Colour Contrast Analyser</li>
                    </ul>
                </section>
            </div>

            <div className="footer__row2">
                &#169; 2020 Sam Edwards
            </div>
        </footer>
    )
}