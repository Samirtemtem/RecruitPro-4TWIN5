import React from 'react'
import { Link } from 'react-router-dom'

const Typography = () => {
    return (
        <div>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Typography</h4>
                        </div>
                    </div>
                    <div className="row">
                        {/* Headings Tags */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Headings Tags</h5>
                                </div>
                                <div className="card-body">
                                    <h1 className="mb-3">h1. Bootstrap heading</h1>
                                    <h2 className="mb-3">h2. Bootstrap heading</h2>
                                    <h3 className="mb-3">h3. Bootstrap heading</h3>
                                    <h4 className="mb-3">h4. Bootstrap heading</h4>
                                    <h5 className="mb-3">h5. Bootstrap heading</h5>
                                    <h6 className="mb-0">h6. Bootstrap heading</h6>
                                </div>
                            </div>
                        </div>
                        {/* /Headings Tags */}
                        {/* Headings Class Names */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Heading Class Names</h5>
                                </div>
                                <div className="card-body">
                                    <p className="h1 mb-3">h1. Bootstrap heading</p>
                                    <p className="h2 mb-3">h2. Bootstrap heading</p>
                                    <p className="h3 mb-3">h3. Bootstrap heading</p>
                                    <p className="h4 mb-3">h4. Bootstrap heading</p>
                                    <p className="h5 mb-3">h5. Bootstrap heading</p>
                                    <p className="h6 mb-0">h6. Bootstrap heading</p>
                                </div>
                            </div>
                        </div>
                        {/* /Headings Class Names */}
                        {/* Display Headings */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Display Headings</h5>
                                </div>
                                <div className="card-body">
                                    <h1 className="mb-0 display-1">Display 1</h1>
                                    <h1 className="mb-0 display-2">Display 2</h1>
                                    <h1 className="mb-0 display-3">Display 3</h1>
                                    <h1 className="mb-0 display-4">Display 4</h1>
                                    <h1 className="mb-0 display-5">Display 5</h1>
                                    <h1 className="mb-0 display-6">Display 6</h1>
                                </div>
                            </div>
                        </div>
                        {/* /Display Headings */}
                        {/* Text Element */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Text Element</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                        You can use the mark tag to <mark>highlight</mark> text.
                                    </p>
                                    <p>
                                        <del>
                                            This line of text is meant to be treated as deleted text.
                                        </del>
                                    </p>
                                    <p>
                                        <s>
                                            This line of text is meant to be treated as no longer
                                            accurate.
                                        </s>
                                    </p>
                                    <p>
                                        <ins>
                                            This line of text is meant to be treated as an addition to the
                                            document.
                                        </ins>
                                    </p>
                                    <p>
                                        <u>This line of text will render as underlined</u>
                                    </p>
                                    <p>
                                        <small>
                                            This line of text is meant to be treated as fine print.
                                        </small>
                                    </p>
                                    <p>
                                        <strong>This line rendered as bold text.</strong>
                                    </p>
                                    <p>
                                        <em>This line rendered as italicized text.</em>
                                    </p>
                                    <p className="font-monospace mb-0">This is in monospace</p>
                                </div>
                            </div>
                        </div>
                        {/* /Text Element */}
                        {/* Coloured Link */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Coloured Link</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                        <Link to="#" className="text-primary">
                                            Primary link
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="#" className="text-secondary">
                                            Secondary link
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="#" className="text-success">
                                            Success link
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="#" className="text-danger">
                                            Danger link
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="#" className="text-warning">
                                            Warning link
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="#" className="text-info">
                                            Info link
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="#" className="text-light bg-dark">
                                            Light link
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="#" className="text-dark">
                                            Dark link
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="#" className="text-muted">
                                            Muted link
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="#" className="text-white bg-dark mb-0">
                                            White link
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /Coloured Link */}
                        {/* Coloured Text */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Coloured Text</h5>
                                </div>
                                <div className="card-body">
                                    <p className="text-primary">.text-primary</p>
                                    <p className="text-secondary">.text-secondary</p>
                                    <p className="text-success">.text-success</p>
                                    <p className="text-danger">.text-danger</p>
                                    <p className="text-warning">.text-warning</p>
                                    <p className="text-info">.text-info</p>
                                    <p className="text-light bg-dark">.text-light</p>
                                    <p className="text-dark">.text-dark</p>
                                    <p className="text-muted">.text-muted</p>
                                    <p className="text-white bg-dark mb-0">.text-white</p>
                                </div>
                            </div>
                        </div>
                        {/* /Coloured Text */}
                        {/* Bullet Lists */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Bullet Lists</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-disc">
                                        <li>Consectetur adipiscing elit</li>
                                        <li>Integer molestie lorem at massa</li>
                                        <li>Facilisis in pretium nisl aliquet</li>
                                        <li className="mb-2">
                                            <ul>
                                                <li>Phasellus iaculis neque</li>
                                                <li>Purus sodales ultricies</li>
                                                <li>Ac tristique libero volutpat at</li>
                                            </ul>
                                        </li>
                                        <li>Faucibus porta lacus fringilla vel</li>
                                        <li>Aenean sit amet erat nunc</li>
                                        <li>Eget porttitor lorem</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Bullet Lists */}
                        {/* Number Lists */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Number Lists</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-decimal">
                                        <li>Consectetur adipiscing elit</li>
                                        <li>Integer molestie lorem at massa</li>
                                        <li>Facilisis in pretium nisl aliquet</li>
                                        <li className="mb-2">
                                            Facilisis in pretium nisl aliquet
                                            <ol>
                                                <li>Phasellus iaculis neque</li>
                                                <li>Purus sodales ultricies</li>
                                                <li>Ac tristique libero volutpat at</li>
                                            </ol>
                                        </li>
                                        <li>Faucibus porta lacus fringilla vel</li>
                                        <li>Aenean sit amet erat nunc</li>
                                        <li>Eget porttitor lorem</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Number Lists */}
                        {/* Lead Paragraph */}
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Lead Paragraph</h5>
                                </div>
                                <div className="card-body">
                                    <p className="lead mb-0">
                                        <b>
                                            This is a lead paragraph. It stands out from regular
                                            paragraphs
                                        </b>
                                        .There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, by
                                        injected humour, or randomised words which don&apos;t look even
                                        slightly believable. If you are going to use a passage of Lorem
                                        Ipsum, you need to be sure there isn&apos;t anything embarrassing
                                        hidden in the middle of text.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /Lead Paragraph */}
                        {/* Blockquote Left Aligned */}
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Blockquote Left Aligned</h5>
                                </div>
                                <div className="card-body">
                                    <figure className="blockquote-container">
                                        <blockquote className="blockquote mb-2">
                                            <h6>
                                                The greatest glory in living lies not in never falling, but
                                                in rising every time we fall.
                                            </h6>
                                        </blockquote>
                                        <figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7">
                                            <cite title="Source Title">Nelson Mandela</cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* /Blockquote Left Aligned */}
                        {/* Blockquote Right Aligned */}
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Blockquote Right Aligned</h5>
                                </div>
                                <div className="card-body">
                                    <figure className="blockquote-container text-end">
                                        <blockquote className="blockquote mb-2">
                                            <h6>
                                                The greatest glory in living lies not in never falling, but
                                                in rising every time we fall.
                                            </h6>
                                        </blockquote>
                                        <figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7">
                                            <cite title="Source Title">Nelson Mandela</cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* /Blockquote Right Aligned */}
                        {/* Custom Color Blockquote */}
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Custom Color Blockquote</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <blockquote className="blockquote custom-blockquote primary mb-3 text-center">
                                                <h6>
                                                    The future belongs to those who believe in the beauty of
                                                    their dreams..
                                                </h6>
                                                <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">
                                                    Someone famous as{" "}
                                                    <cite title="Source Title">-Eleanor Roosevelt</cite>
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div className="col-xl-4">
                                            <blockquote className="blockquote custom-blockquote secondary mb-3 text-center">
                                                <h6>
                                                    The future belongs to those who believe in the beauty of
                                                    their dreams..
                                                </h6>
                                                <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">
                                                    Someone famous as{" "}
                                                    <cite title="Source Title">-Eleanor Roosevelt</cite>
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div className="col-xl-4">
                                            <blockquote className="blockquote custom-blockquote info mb-3 text-center">
                                                <h6>
                                                    The future belongs to those who believe in the beauty of
                                                    their dreams..
                                                </h6>
                                                <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">
                                                    Someone famous as{" "}
                                                    <cite title="Source Title">-Eleanor Roosevelt</cite>
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div className="col-xl-4">
                                            <blockquote className="blockquote custom-blockquote warning mb-3 text-center">
                                                <h6>
                                                    The future belongs to those who believe in the beauty of
                                                    their dreams..
                                                </h6>
                                                <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">
                                                    Someone famous as{" "}
                                                    <cite title="Source Title">-Eleanor Roosevelt</cite>
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div className="col-xl-4">
                                            <blockquote className="blockquote custom-blockquote success mb-3 text-center">
                                                <h6>
                                                    The future belongs to those who believe in the beauty of
                                                    their dreams..
                                                </h6>
                                                <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">
                                                    Someone famous as{" "}
                                                    <cite title="Source Title">-Eleanor Roosevelt</cite>
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div className="col-xl-4">
                                            <blockquote className="blockquote custom-blockquote danger mb-3 text-center">
                                                <h6>
                                                    The future belongs to those who believe in the beauty of
                                                    their dreams..
                                                </h6>
                                                <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">
                                                    Someone famous as{" "}
                                                    <cite title="Source Title">-Eleanor Roosevelt</cite>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Custom Color Blockquote */}
                        {/* Description List Alignment */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Description List Alignment</div>
                                </div>
                                <div className="card-body">
                                    <dl className="row mb-0">
                                        <dt className="col-sm-3">Description lists</dt>
                                        <dd className="col-sm-9">
                                            A description list is perfect for defining terms.
                                        </dd>
                                        <dt className="col-sm-3">Term</dt>
                                        <dd className="col-sm-9">
                                            <p>Definition for the term.</p>
                                            <p>And some more placeholder definition text.</p>
                                        </dd>
                                        <dt className="col-sm-3">Another term</dt>
                                        <dd className="col-sm-9">
                                            This definition is short, so no extra paragraphs or anything.
                                        </dd>
                                        <dt className="col-sm-3 text-truncate">
                                            Truncated term is truncated
                                        </dt>
                                        <dd className="col-sm-9">
                                            This can be useful when space is tight. Adds an ellipsis at
                                            the end.
                                        </dd>
                                        <dt className="col-sm-3">Nesting</dt>
                                        <dd className="col-sm-9 mb-0">
                                            <dl className="row mb-0">
                                                <dt className="col-sm-4">Nested definition list</dt>
                                                <dd className="col-sm-8 mb-0">
                                                    I heard you like definition lists. Let me put a definition
                                                    list inside your definition list.
                                                </dd>
                                            </dl>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        {/* /Description List Alignment */}
                        {/* List Unstyled */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">List Unstyled</div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        <li>This is a list.</li>
                                        <li>It appears completely unstyled.</li>
                                        <li>Structurally, it&apos;s still a list.</li>
                                        <li>
                                            However, this style only applies to immediate child elements.
                                        </li>
                                        <li className="mb-2">
                                            Nested lists:
                                            <ul className="list-circle">
                                                <li>are unaffected by this style</li>
                                                <li>will still show a bullet</li>
                                                <li>and have appropriate left margin</li>
                                            </ul>
                                        </li>
                                        <li>This may still come in handy in some situations.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">List Inline</div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item">This is a list item.</li>
                                        <li className="list-inline-item">And another one.</li>
                                        <li className="list-inline-item">
                                            But they&apos;re displayed inline.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /List Unstyled */}
                        {/* Abbreviations */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Abbreviations</div>
                                </div>
                                <div className="card-body">
                                    <p>
                                        <abbr title="attribute">attr</abbr>
                                    </p>
                                    <p className="mb-0">
                                        <abbr title="HyperText Markup Language" className="initialism">
                                            HTML
                                        </abbr>
                                    </p>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Customizing headings</div>
                                </div>
                                <div className="card-body">
                                    <h3>
                                        Fancy display heading
                                        <small className="text-muted">With faded secondary text</small>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/* /Abbreviations */}
                        {/* Horizontal Rules */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Horizontal Rules</div>
                                </div>
                                <div className="card-body">
                                    <p className="mb-1">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                                        dolorem fuga iste obcaecati natus eos officiis adipisci
                                        voluptatibus ipsum, architecto veniam delectus vel dolor magni a
                                        vero sunt ut harum.
                                    </p>
                                    <div className="text-success">
                                        <hr />
                                    </div>
                                    <p className=" mb-1">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                        perspiciatis, magni numquam quos perferendis nulla magnam odit
                                        amet excepturi quisquam provident.
                                    </p>
                                    <hr className="border-danger border-2 opacity-50" />
                                    <p className="mb-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Repellendus aliquid consequatur aut doloremque assumenda
                                        voluptatem, id qui vero adipisci! Nostrum ipsam praesentium!
                                    </p>
                                    <hr className="border-primary border-3 opacity-75" />
                                </div>
                            </div>
                        </div>
                        {/* /Horizontal Rules */}
                        {/* Text Transform */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Text Transform</div>
                                </div>
                                <div className="card-body">
                                    <p className="text-lowercase">Lowercased text.</p>
                                    <p className="text-uppercase">Uppercased text.</p>
                                    <p className="text-capitalize mb-0">CapiTaliZed text.</p>
                                </div>
                            </div>
                        </div>
                        {/* /Text Transform */}
                        {/* Text Decoration */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Text Decoration</div>
                                </div>
                                <div className="card-body">
                                    <p className="text-decoration-underline">
                                        This text has a line underneath it.
                                    </p>
                                    <p className="text-decoration-line-through">
                                        This text has a line going through it.
                                    </p>
                                    <Link to="#" className="text-decoration-none">
                                        This link has its text decoration removed
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* /Text Decoration */}
                        {/* Font Weight and Italics */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Font Weight and Italics</div>
                                </div>
                                <div className="card-body">
                                    <p className="fw-bold">Bold text.</p>
                                    <p className="fw-bolder">
                                        Bolder weight text (relative to the parent element).
                                    </p>
                                    <p className="fw-semibold">Semibold weight text.</p>
                                    <p className="fw-normal">Normal weight text.</p>
                                    <p className="fw-light">Light weight text.</p>
                                    <p className="fw-lighter">
                                        Lighter weight text (relative to the parent element).
                                    </p>
                                    <p className="fst-italic">Italic text.</p>
                                    <p className="fst-normal mb-0">Text with normal font style</p>
                                </div>
                            </div>
                        </div>
                        {/* /Font Weight and Italics */}
                        {/* Line Height */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Line Height</div>
                                </div>
                                <div className="card-body">
                                    <p className="lh-1">
                                        This is a long paragraph written to show how the line-height of
                                        an element is affected by our utilities. Classes are applied to
                                        the element itself or sometimes the parent element. These
                                        classes can be customized as needed with our utility API.
                                    </p>
                                    <p className="lh-sm">
                                        This is a long paragraph written to show how the line-height of
                                        an element is affected by our utilities. Classes are applied to
                                        the element itself or sometimes the parent element. These
                                        classes can be customized as needed with our utility API.
                                    </p>
                                    <p className="lh-base">
                                        This is a long paragraph written to show how the line-height of
                                        an element is affected by our utilities. Classes are applied to
                                        the element itself or sometimes the parent element. These
                                        classes can be customized as needed with our utility API.
                                    </p>
                                    <p className="lh-lg mb-0">
                                        This is a long paragraph written to show how the line-height of
                                        an element is affected by our utilities. Classes are applied to
                                        the element itself or sometimes the parent element. These
                                        classes can be customized as needed with our utility API.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /Line Height */}
                        {/* Monospace */}
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Monospace</div>
                                </div>
                                <div className="card-body">
                                    <p className="font-monospace mb-0">This is in monospace</p>
                                </div>
                            </div>
                        </div>
                        {/* /Monospace */}
                        {/* Reset Color */}
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Reset Color</div>
                                </div>
                                <div className="card-body">
                                    <p className="text-muted mb-0">
                                        Muted text with a{" "}
                                        <Link
                                            to="#"
                                            className="text-reset text-decoration-underline text-dark"
                                        >
                                            reset link
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /Reset Color */}
                        {/* Visible Text */}
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Visible Text</div>
                                </div>
                                <div className="card-body">
                                    <p className="visible mb-0">This is visible text</p>
                                </div>
                            </div>
                        </div>
                        {/* /Visible Text */}
                        {/* Invisible Text */}
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Invisible Text</div>
                                </div>
                                <div className="card-body">
                                    <p className="invisible mb-0">This is invisible text</p>
                                </div>
                            </div>
                        </div>
                        {/* /Invisible Text */}
                        {/* Text Alignment */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Text Alignment</div>
                                </div>
                                <div className="card-body">
                                    <p className="text-start">
                                        Start aligned text on all viewport sizes.
                                    </p>
                                    <p className="text-center">
                                        Center aligned text on all viewport sizes.
                                    </p>
                                    <p className="text-end">
                                        End aligned text on all viewport sizes.
                                    </p>
                                    <p className="text-sm-start">
                                        Start aligned text on viewports sized SM (small) or wider.
                                    </p>
                                    <p className="text-md-start">
                                        Start aligned text on viewports sized MD (medium) or wider.
                                    </p>
                                    <p className="text-lg-start">
                                        Start aligned text on viewports sized LG (large) or wider.
                                    </p>
                                    <p className="text-xl-start">
                                        Start aligned text on viewports sized XL (extra-large) or wider.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /Text Alignment */}
                        {/* Text Wrapping and Overflow */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Text Wrapping and Overflow</div>
                                </div>
                                <div className="card-body">
                                    <div
                                        className="badge bg-primary text-wrap mb-3"
                                        style={{ width: "6rem" }}
                                    >
                                        This text should wrap.
                                    </div>
                                    <p className="text-muted mb-2">
                                        {" "}
                                        use class <code>.text-nowrap</code> to prevent text from
                                        wrapping
                                    </p>
                                    <div
                                        className="text-nowrap bg-light border text-dark"
                                        style={{ width: "8rem" }}
                                    >
                                        This text should overflow the parent.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Word break</div>
                                </div>
                                <div className="card-body">
                                    <p className="text-break mb-0">
                                        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /Text Wrapping and Overflow */}
                    </div>
                </div>
            </div>
            {/* /Page Wrapper */}
        </div>
    )
}

export default Typography
