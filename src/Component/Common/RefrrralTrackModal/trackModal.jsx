import React, { useState } from 'react'
import "./trackModal.scss"
import astronaut from "../../../assets/MyReferral-img/track-astronut.svg";
import { Modal, Button } from 'react-bootstrap';

const TrackModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className=" px-2 py-1 rounded font-size-14 border-0 text-blue" onClick={handleShow}>
                Track
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                centered
                contentClassName="custom-modal-content"
                backdrop="static"
            >
                <Modal.Body className="p-4 modal-body-custom">
                    <div className="text-center">
                        <img src={astronaut} className="astronaut-img" alt="astronaut" />
                        <h5 className="fw-bold mt-2">Track The Progress</h5>
                    </div>

                    <div className="progress-section mt-4">
                        {/* Step 1 */}
                        <div className="step completed">
                            <div className="circle filled-circle"></div>
                            <div className="step-content">
                                <h6 className="text-primary fw-bold mb-1">Invitation Accepted</h6>
                                <p className="mb-0 small">Your friend has accepted your invite and signed up!</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="step">
                            <div className="circle empty-circle"></div>
                            <div className="step-content">
                                <h6 className="text-muted fw-bold mb-1">Reward Unlocked</h6>
                                <p className="mb-0 small text-muted">You've earned XYZ reward for your successful referral</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="step">
                            <div className="circle empty-circle"></div>
                            <div className="step-content">
                                <h6 className="text-muted fw-bold mb-1">Product Purchased</h6>
                                <p className="mb-0 small text-muted">Haven't done any purchase</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default TrackModal;