import React from 'react';

const formatDescription = (description) => {
    console.log("Description to format:", description); // Log the description

    if (!description) {
        return <p>No description available.</p>; // Handle undefined description
    }

    // Split the description into sections based on new lines
    const sections = description.split(/\n/).filter(section => section.trim() !== ""); // Remove empty sections

    return sections.map((section, index) => {
        // Trim whitespace from the section
        const trimmedSection = section.trim();

        // Check for a header followed by a colon
        const headerMatch = trimmedSection.match(/^(.*?):\s*(.*)$/);
        if (headerMatch) {
            const headerText = headerMatch[1].trim(); // Extract header text
            const contentText = headerMatch[2]?.trim(); // Extract content after the header

            return (
                <div key={index} style={{ marginBottom: '1em' }}>
                    <strong style={{ fontWeight: 'bold', color: 'black' }}>{headerText}:</strong> {/* Dark title */}
                    {contentText && (
                        <span style={{ marginLeft: '10px' }}>{contentText}</span> // No extra line break
                    )}
                </div>
            );
        }

        // Handle bullet points or regular text
        return (
            <div key={index} style={{ margin: '0.5em 0' }}>
                {trimmedSection.startsWith('-') ? (
                    <span style={{ display: 'block', marginLeft: '20px' }}>{trimmedSection}</span> // Indent bullet points
                ) : (
                    <span>{trimmedSection}</span>
                )}
            </div>
        );
    });
};

const JobDetailsDescriptions = ({ description }) => {
    return (
        <div className="job-detail">
            <h4>Job Description</h4>
            {/* Use formatDescription to render the formatted description */}
            {formatDescription(description)}
        </div>
    );
};

export default JobDetailsDescriptions;