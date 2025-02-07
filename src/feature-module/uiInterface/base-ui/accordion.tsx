import React from 'react'
import { Link } from "react-router-dom";

const Accordion = () => {
    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div className="page-title">
                        <h4>Accordion</h4> 
                    </div>
                </div>
                <div className="row">
                    {/* Basic Accordion */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Basic Accordion</div>
                            </div>
                            <div className="card-body">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong>{" "}
                                                It is hidden by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It
                                                is hidden by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Basic Accordion */}
                    {/* Always Open Accordion */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">
                                    Always Open Accordion
                                    <p className="text-muted subtitle fs-12 fw-normal">
                                        Omit the <code>data-bs-parent</code>
                                        attribute on each
                                        <code>.accordion-collapse</code>
                                        to make accordion items stay open when another item is opened.
                                    </p>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseOne"
                                                aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="panelsStayOpen-collapseOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="panelsStayOpen-headingOne"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. It's also worth
                                                noting that just about any HTML can go within the{" "}
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="panelsStayOpen-collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="panelsStayOpen-headingTwo"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong>{" "}
                                                It is hidden by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            id="panelsStayOpen-headingThree"
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseThree"
                                                aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="panelsStayOpen-collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="panelsStayOpen-headingThree"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It
                                                is hidden by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Always Open Accordion */}
                </div>
                <div className="row">
                    {/* With Spacing */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">With Spacing</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordions-items-seperate"
                                    id="accordionSpacingExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSpacingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#SpacingOne"
                                                aria-expanded="false"
                                                aria-controls="SpacingOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="SpacingOne"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSpacingOne"
                                            data-bs-parent="#accordionSpacingExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSpacingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#SpacingTwo"
                                                aria-expanded="false"
                                                aria-controls="SpacingTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="SpacingTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSpacingTwo"
                                            data-bs-parent="#accordionSpacingExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSpacingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#SpacingThree"
                                                aria-expanded="false"
                                                aria-controls="SpacingThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="SpacingThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSpacingThree"
                                            data-bs-parent="#accordionSpacingExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /With Spacing */}
                    {/* Flush Accordion */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">
                                    Flush Accordion
                                    <p className="subtitle text-muted fs-12 fw-normal">
                                        Add <code>.accordion-flush</code> to remove the default
                                        <code>background-color</code>, borders, and rounded corners.
                                    </p>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div
                                    className="accordion accordion-flush"
                                    id="accordionFlushExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOne"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseOne"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingOne"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                Placeholder content for this accordion, which is intended to
                                                demonstrate the <code>.accordion-flush</code> class. This is
                                                the first item's accordion body.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingTwo"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                Placeholder content for this accordion, which is intended to
                                                demonstrate the <code>.accordion-flush</code> class. This is
                                                the second item's accordion body. Let's imagine this being
                                                filled with some actual content.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseThree"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingThree"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                Placeholder content for this accordion, which is intended to
                                                demonstrate the <code>.accordion-flush</code> class. This is
                                                the third item's accordion body. Nothing more exciting
                                                happening here in terms of content, but just filling up the
                                                space to make it look, at least at first glance, a bit more
                                                representative of how this would look in a real-world
                                                application.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Flush Accordion */}
                </div>
                {/* Light Colors */}
                <h6 className="mb-3">Light Colors:</h6>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Primary</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-primary"
                                    id="accordionPrimaryExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingPrimaryOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePrimaryOne"
                                                aria-expanded="true"
                                                aria-controls="collapsePrimaryOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="collapsePrimaryOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingPrimaryOne"
                                            data-bs-parent="#accordionPrimaryExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingPrimaryTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePrimaryTwo"
                                                aria-expanded="false"
                                                aria-controls="collapsePrimaryTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="collapsePrimaryTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingPrimaryTwo"
                                            data-bs-parent="#accordionPrimaryExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingPrimaryThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePrimaryThree"
                                                aria-expanded="false"
                                                aria-controls="collapsePrimaryThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="collapsePrimaryThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingPrimaryThree"
                                            data-bs-parent="#accordionPrimaryExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Secondary</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-secondary"
                                    id="accordionSecondaryExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSecondaryOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSecondaryOne"
                                                aria-expanded="true"
                                                aria-controls="collapseSecondaryOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSecondaryOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingSecondaryOne"
                                            data-bs-parent="#accordionSecondaryExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSecondaryTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSecondaryTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseSecondaryTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSecondaryTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSecondaryTwo"
                                            data-bs-parent="#accordionSecondaryExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSecondaryThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSecondaryThree"
                                                aria-expanded="false"
                                                aria-controls="collapseSecondaryThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSecondaryThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSecondaryThree"
                                            data-bs-parent="#accordionSecondaryExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Light Colors */}
                {/* Solid Colors */}
                <h6 className="mb-3">Solid Colors:</h6>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Primary</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-solid-primary"
                                    id="accordionPrimarySolidExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingPrimarySolidOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePrimarySolidOne"
                                                aria-expanded="true"
                                                aria-controls="collapsePrimarySolidOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="collapsePrimarySolidOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingPrimarySolidOne"
                                            data-bs-parent="#accordionPrimarySolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingPrimarySolidTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePrimarySolidTwo"
                                                aria-expanded="false"
                                                aria-controls="collapsePrimarySolidTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="collapsePrimarySolidTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingPrimarySolidTwo"
                                            data-bs-parent="#accordionPrimarySolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingPrimarySolidThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsePrimarySolidThree"
                                                aria-expanded="false"
                                                aria-controls="collapsePrimarySolidThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="collapsePrimarySolidThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingPrimarySolidThree"
                                            data-bs-parent="#accordionPrimarySolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Secondary</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-solid-secondary"
                                    id="accordionSecondarySolidExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSecondarySolidOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSecondarySolidOne"
                                                aria-expanded="true"
                                                aria-controls="collapseSecondarySolidOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSecondarySolidOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingSecondarySolidOne"
                                            data-bs-parent="#accordionSecondarySolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSecondarySolidTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSecondarySolidTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseSecondarySolidTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSecondarySolidTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSecondarySolidTwo"
                                            data-bs-parent="#accordionSecondarySolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            id="headingSecondarySolidThree"
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSecondarySolidThree"
                                                aria-expanded="false"
                                                aria-controls="collapseSecondarySolidThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSecondarySolidThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSecondarySolidThree"
                                            data-bs-parent="#accordionSecondarySolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Warning</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-solid-warning"
                                    id="accordionWarningSolidExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingWarningSolidOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseWarningSolidOne"
                                                aria-expanded="true"
                                                aria-controls="collapseWarningSolidOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseWarningSolidOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingWarningSolidOne"
                                            data-bs-parent="#accordionWarningSolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingWarningSolidTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseWarningSolidTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseWarningSolidTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseWarningSolidTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingWarningSolidTwo"
                                            data-bs-parent="#accordionWarningSolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingWarningSolidThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseWarningSolidThree"
                                                aria-expanded="false"
                                                aria-controls="collapseWarningSolidThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseWarningSolidThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingWarningSolidThree"
                                            data-bs-parent="#accordionWarningSolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Info</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-solid-info"
                                    id="accordionInfoSolidExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingInfoSolidOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseInfoSolidOne"
                                                aria-expanded="true"
                                                aria-controls="collapseInfoSolidOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseInfoSolidOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingInfoSolidOne"
                                            data-bs-parent="#accordionInfoSolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingInfoSolidTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseInfoSolidTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseInfoSolidTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseInfoSolidTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingInfoSolidTwo"
                                            data-bs-parent="#accordionInfoSolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingInfoSolidThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseInfoSolidThree"
                                                aria-expanded="false"
                                                aria-controls="collapseInfoSolidThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseInfoSolidThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingInfoSolidThree"
                                            data-bs-parent="#accordionInfoSolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Success</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-solid-success"
                                    id="accordionSuccessSolidExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSuccessSolidOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSuccessSolidOne"
                                                aria-expanded="true"
                                                aria-controls="collapseSuccessSolidOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSuccessSolidOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingSuccessSolidOne"
                                            data-bs-parent="#accordionSuccessSolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSuccessSolidTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSuccessSolidTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseSuccessSolidTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSuccessSolidTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSuccessSolidTwo"
                                            data-bs-parent="#accordionSuccessSolidTwo"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSuccessSolidThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSuccessSolidThree"
                                                aria-expanded="false"
                                                aria-controls="collapseSuccessSolidThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSuccessSolidThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSuccessSolidThree"
                                            data-bs-parent="#accordionSuccessSolidThree"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Danger</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-solid-danger"
                                    id="accordionDangerSolidExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingDangerSolidOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseDangerSolidOne"
                                                aria-expanded="true"
                                                aria-controls="collapseDangerSolidOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseDangerSolidOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingDangerSolidOne"
                                            data-bs-parent="#accordionDangerSolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingDangerSolidTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseDangerSolidTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseDangerSolidTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseDangerSolidTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingDangerSolidTwo"
                                            data-bs-parent="#accordionDangerSolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingDangerSolidThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseDangerSolidThree"
                                                aria-expanded="false"
                                                aria-controls="collapseDangerSolidThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseDangerSolidThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingDangerSolidThree"
                                            data-bs-parent="#accordionDangerSolidExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Solid Colors */}
                {/* Colored Borders */}
                <h6 className="mb-3">Colored Borders:</h6>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Primary</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-border-primary accordions-items-seperate"
                                    id="accordionprimaryborderExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderprimaryOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#primaryBorderOne"
                                                aria-expanded="true"
                                                aria-controls="primaryBorderOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="primaryBorderOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingborderprimaryOne"
                                            data-bs-parent="#accordionprimaryborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderprimaryTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#primaryBorderTwo"
                                                aria-expanded="false"
                                                aria-controls="primaryBorderTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="primaryBorderTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingborderprimaryTwo"
                                            data-bs-parent="#accordionprimaryborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderprimaryThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#primaryBorderThree"
                                                aria-expanded="false"
                                                aria-controls="primaryBorderThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="primaryBorderThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingborderprimaryThree"
                                            data-bs-parent="#accordionprimaryborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Secondary</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-border-secondary accordions-items-seperate"
                                    id="accordioninfoborderExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderinfoOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#infoBorderOne"
                                                aria-expanded="true"
                                                aria-controls="infoBorderOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="infoBorderOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingborderinfoOne"
                                            data-bs-parent="#accordioninfoborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderinfoTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#infoBorderTwo"
                                                aria-expanded="false"
                                                aria-controls="infoBorderTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="infoBorderTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingborderinfoTwo"
                                            data-bs-parent="#accordioninfoborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderinfoThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#infoBorderThree"
                                                aria-expanded="false"
                                                aria-controls="infoBorderThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="infoBorderThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingborderinfoThree"
                                            data-bs-parent="#accordioninfoborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Success</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-border-success accordions-items-seperate"
                                    id="accordionsuccessborderExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingbordersuccessOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#successBorderOne"
                                                aria-expanded="true"
                                                aria-controls="successBorderOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="successBorderOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingbordersuccessOne"
                                            data-bs-parent="#accordionsuccessborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingbordersuccessTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#successBorderTwo"
                                                aria-expanded="false"
                                                aria-controls="successBorderTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="successBorderTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingbordersuccessTwo"
                                            data-bs-parent="#accordionsuccessborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingbordersuccessThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#successBorderThree"
                                                aria-expanded="false"
                                                aria-controls="successBorderThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="successBorderThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingbordersuccessThree"
                                            data-bs-parent="#accordionsuccessborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Info</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-border-info accordions-items-seperate"
                                    id="accordioninfoborderExampleTwo"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderinfoTwos">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#infoBorderOnes"
                                                aria-expanded="true"
                                                aria-controls="infoBorderOnes"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="infoBorderOnes"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingborderinfoTwos"
                                            data-bs-parent="#accordioninfoborderExampleTwo"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderinfoTwoo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#infoBorderTwos"
                                                aria-expanded="false"
                                                aria-controls="infoBorderTwos"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="infoBorderTwos"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingborderinfoTwoo"
                                            data-bs-parent="#accordioninfoborderExample2"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderinfoThrees">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#infoBorderThrees"
                                                aria-expanded="false"
                                                aria-controls="infoBorderThrees"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="infoBorderThrees"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingborderinfoThrees"
                                            data-bs-parent="#accordioninfoborderExample2"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Warning</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-border-warning accordions-items-seperate"
                                    id="accordionwarningborderExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderwarningOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#warningBorderOne"
                                                aria-expanded="true"
                                                aria-controls="warningBorderOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="warningBorderOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingborderwarningOne"
                                            data-bs-parent="#accordionwarningborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderwarningTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#warningBorderTwo"
                                                aria-expanded="false"
                                                aria-controls="warningBorderTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="warningBorderTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingborderwarningTwo"
                                            data-bs-parent="#accordionwarningborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderwarningThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#warningBorderThree"
                                                aria-expanded="false"
                                                aria-controls="warningBorderThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="warningBorderThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingborderwarningThree"
                                            data-bs-parent="#accordionwarningborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Danger</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-border-danger accordions-items-seperate"
                                    id="accordiondangerborderExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderdangerOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#dangerBorderOne"
                                                aria-expanded="true"
                                                aria-controls="dangerBorderOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="dangerBorderOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingborderdangerOne"
                                            data-bs-parent="#accordiondangerborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderdangerTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#dangerBorderTwo"
                                                aria-expanded="false"
                                                aria-controls="dangerBorderTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="dangerBorderTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingborderdangerTwo"
                                            data-bs-parent="#accordiondangerborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingborderdangerThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#dangerBorderThree"
                                                aria-expanded="false"
                                                aria-controls="dangerBorderThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="dangerBorderThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingborderdangerThree"
                                            data-bs-parent="#accordiondangerborderExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Colored Borders */}
                <div className="row">
                    {/* Left Aligned Icons */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Left Aligned Icons</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordionicon-left accordions-items-seperate"
                                    id="accordioniconLeftExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingleftOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseleftOne"
                                                aria-expanded="true"
                                                aria-controls="collapseleftOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseleftOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingleftOne"
                                            data-bs-parent="#accordioniconLeftExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingleftTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseLeftTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseLeftTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseLeftTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingleftTwo"
                                            data-bs-parent="#accordioniconLeftExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong>{" "}
                                                It is hidden by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingleftThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseLeftThree"
                                                aria-expanded="false"
                                                aria-controls="collapseLeftThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseLeftThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingleftThree"
                                            data-bs-parent="#accordioniconLeftExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It
                                                is hidden by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Left Aligned Icons */}
                    {/* Without Icon */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Without Icon</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordionicon-none accordions-items-seperate"
                                    id="accordioniconnoIconExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingnoIconOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsenoIconOne"
                                                aria-expanded="true"
                                                aria-controls="collapsenoIconOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="collapsenoIconOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingnoIconOne"
                                            data-bs-parent="#accordioniconnoIconExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingnoIconTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsenoIconTwo"
                                                aria-expanded="false"
                                                aria-controls="collapsenoIconTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="collapsenoIconTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingnoIconTwo"
                                            data-bs-parent="#accordioniconnoIconExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong>{" "}
                                                It is hidden by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingnoIconThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsenoIconThree"
                                                aria-expanded="false"
                                                aria-controls="collapsenoIconThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="collapsenoIconThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingnoIconThree"
                                            data-bs-parent="#accordioniconnoIconExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It
                                                is hidden by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Without Icon */}
                </div>
                <div className="row">
                    {/* Custom Icon Accordion */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Custom Icon Accordion</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion accordion-customicon1 accordions-items-seperate"
                                    id="accordioncustomicon1Example"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingcustomicon1One">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsecustomicon1One"
                                                aria-expanded="true"
                                                aria-controls="collapsecustomicon1One"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="collapsecustomicon1One"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingcustomicon1One"
                                            data-bs-parent="#accordioncustomicon1Example"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingcustomicon1Two">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsecustomicon1Two"
                                                aria-expanded="false"
                                                aria-controls="collapsecustomicon1Two"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="collapsecustomicon1Two"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingcustomicon1Two"
                                            data-bs-parent="#accordioncustomicon1Example"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingcustomicon1Three">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapsecustomicon1Three"
                                                aria-expanded="false"
                                                aria-controls="collapsecustomicon1Three"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="collapsecustomicon1Three"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingcustomicon1Three"
                                            data-bs-parent="#accordioncustomicon1Example"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Custom Icon Accordion */}
                    {/* Custom Accordion */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Custom Accordion</div>
                            </div>
                            <div className="card-body">
                                <div
                                    className="accordion customized-accordion accordions-items-seperate"
                                    id="customizedAccordion"
                                >
                                    <div className="accordion-item custom-accordion-primary">
                                        <h2 className="accordion-header" id="customizedAccordionOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#customized-AccordionOne"
                                                aria-expanded="true"
                                                aria-controls="customized-AccordionOne"
                                            >
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div
                                            id="customized-AccordionOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="customizedAccordionOne"
                                            data-bs-parent="#customizedAccordion"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item custom-accordion-secondary">
                                        <h2 className="accordion-header" id="customizedAccordionTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#customized-AccordionTwo"
                                                aria-expanded="false"
                                                aria-controls="customized-AccordionTwo"
                                            >
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div
                                            id="customized-AccordionTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="customizedAccordionTwo"
                                            data-bs-parent="#customizedAccordion"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item custom-accordion-danger">
                                        <h2 className="accordion-header" id="customizedAccordionThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#customized-AccordionThree"
                                                aria-expanded="false"
                                                aria-controls="customized-AccordionThree"
                                            >
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div
                                            id="customized-AccordionThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="customizedAccordionThree"
                                            data-bs-parent="#customizedAccordion"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It
                                                is shown by default, until the collapse plugin adds the
                                                appropriate classes that we use to style each element. These
                                                classes control the overall appearance, as well as the
                                                showing and hiding via CSS transitions. You can modify any
                                                of this with custom CSS or overriding our default variables.
                                                It's also worth noting that just about any HTML can go
                                                within the
                                                <code>.accordion-body</code>, though the transition does
                                                limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Custom Accordion */}
                </div>
                <div className="row">
                    {/* Example */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Example</div>
                            </div>
                            <div className="card-body">
                                <p className="mb-0">
                                    <Link
                                        className="btn btn-primary collapsed mb-2 me-1"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample"
                                    >
                                        Link with href
                                    </Link>
                                    <button
                                        className="btn btn-secondary collapsed mb-2"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseExample"
                                        aria-expanded="false"
                                        aria-controls="collapseExample"
                                    >
                                        Button with data-bs-target
                                    </button>
                                </p>
                                <div className="collapse" id="collapseExample">
                                    <div className="card card-body mb-0">
                                        Some placeholder content for the collapse component. This panel
                                        is hidden by default but revealed when the user activates the
                                        relevant trigger.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Example */}
                    {/* Targets Collapse */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Targets Collapse</div>
                            </div>
                            <div className="card-body">
                                <p className="mb-0">
                                    <Link
                                        className="btn btn-primary mb-2 me-2"
                                        data-bs-toggle="collapse"
                                        to="#multiCollapseExample1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="multiCollapseExample1"
                                    >
                                        Toggle first element
                                    </Link>
                                    <button
                                        className="btn btn-success mb-2"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#multiCollapseExample2"
                                        aria-expanded="false"
                                        aria-controls="multiCollapseExample2"
                                    >
                                        Toggle second element
                                    </button>
                                    <button
                                        className="btn btn-danger mb-2"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".multi-collapse"
                                        aria-expanded="false"
                                        aria-controls="multiCollapseExample1 multiCollapseExample2"
                                    >
                                        Toggle both elements
                                    </button>
                                </p>
                                <div className="row">
                                    <div className="col">
                                        <div
                                            className="collapse multi-collapse"
                                            id="multiCollapseExample1"
                                        >
                                            <div className="card card-body mb-0">
                                                Some placeholder content for the first collapse component of
                                                this multi-collapse example. This panel is hidden by default
                                                but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div
                                            className="collapse multi-collapse"
                                            id="multiCollapseExample2"
                                        >
                                            <div className="card card-body mb-0">
                                                Some placeholder content for the second collapse component
                                                of this multi-collapse example. This panel is hidden by
                                                default but revealed when the user activates the relevant
                                                trigger.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Targets Collapse */}
                </div>
                <div className="row">
                    {/* Horizontal Collapse */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Horizontal Collapse</div>
                            </div>
                            <div className="card-body">
                                <p>
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseWidthExample"
                                        aria-expanded="false"
                                        aria-controls="collapseWidthExample"
                                    >
                                        Toggle width collapse
                                    </button>
                                </p>
                                <div>
                                    <div
                                        className="collapse collapse-horizontal"
                                        id="collapseWidthExample"
                                    >
                                        <div className="card card-body" style={{ width: 230 }}>
                                            This is some placeholder content for a horizontal collapse.
                                            It's hidden by default and shown when triggered.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Horizontal Collapse */}
                </div>
            </div>
        </div>

    )
}

export default Accordion
