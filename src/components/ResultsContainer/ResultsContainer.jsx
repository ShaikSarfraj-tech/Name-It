import React from "react";
import NameCard from "../NameCard/NameCard";
import './ResultsContainer.css'

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNameJsx = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    })
    return (
        <div className="results-container">
            <p> {suggestedNameJsx}</p>
        </div>
    )
}

export default ResultsContainer