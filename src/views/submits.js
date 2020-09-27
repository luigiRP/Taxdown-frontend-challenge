import React, { useContext, Fragment } from 'react'
import { inputContext } from '../context'

export default function Submits() {

    const [contextInputs] = useContext(inputContext)

    return (
        <Fragment>
            <div className="container">
                <div className="row bg-primary rounded text-white justify-content-center my-5">
                    <h2>Submits</h2>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex">
                    {contextInputs.map(function (submission, index) {
                        return (
                            <div className="card col-2 mx-3" key={index}>
                                <div className="card-body">
                                    <h5 className="card-title">Submission {index + 1}</h5>
                                    {Object.keys(submission).map((submissionDetail, detailIndex) => {
                                        return (
                                            <p className="card-text" key={detailIndex}>{submissionDetail}: {submission[submissionDetail]}</p>);
                                    }
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>

    );


}
