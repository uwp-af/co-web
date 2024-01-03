import React, { useState } from 'react';
import './App.css';
import PDFfile from './PDF';
import { PDFDownloadLink } from "@react-pdf/renderer";

export const MedicalForm = () => {
    const [patientName, setPatientName] = useState('Noah');
    const [patientDOB, setPatientDOB] = useState('');
    const [pregnancyIUD, setPregnancyIUD] = useState('');
    const [hasPacemaker, setHasPacemaker] = useState(null);
    const [hasCochlearImplants, setHasCochlearImplants] = useState(null);
    const [hasAneurysmClips, setHasAneurysmClips] = useState(null);
    const [hasStimulator, setHasStimulator] = useState(null);
    const [hasCataractSurgery, setHasCataractSurgery] = useState(null);
    const [retainedWires, setRetainedWires] = useState(null);
    const [before1985, setBefore1985] = useState(null);
    const [hasStent, setHasStent] = useState(null);
    const [stentLocation, setStentLocation] = useState('');
    const [bodyPartScanned, setBodyPartScanned] = useState('');
    const [hadMRISinceStent, setHadMRISinceStent] = useState(null);
    const [mriLocation, setMriLocation] = useState('');
    const [hasStentCard, setHasStentCard] = useState(null);
    const [hasMetalInEyes, setHasMetalInEyes] = useState(null);
    const [hasForeignBodies, setHasForeignBodies] = useState(null);
    const [formFiller, setFormFiller] = useState('');
    const [date, setDate] = useState('');
    const [orderingDoctor, setOrderingDoctor] = useState('');
    const [bodyPart, setBodyPart] = useState('');
    const [patientPhoneNum, setPatientPhoneNum] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            patientName, patientDOB, pregnancyIUD,
            hasPacemaker, hasCochlearImplants, hasAneurysmClips, hasStimulator,
            hasCataractSurgery, retainedWires, before1985, hasStent, stentLocation, bodyPartScanned,
            hadMRISinceStent, mriLocation, hasStentCard,
            hasMetalInEyes, hasForeignBodies, formFiller, date, orderingDoctor, bodyPart, patientPhoneNum
        });
    };

    const shouldContinue = (questionState) => questionState !== true;

    return (
        <div onSubmit={handleSubmit}>
            {/* Top of form */}
            <div>
                <label>PT NAME: </label>
                <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                />
            </div>
            <PDFfile patientName={patientName} />
            <div>
                <label>PT DOB: </label>
                <input
                    type="date"
                    value={patientDOB}
                    onChange={(e) => setPatientDOB(e.target.value)}
                />
            </div>
            <div>
                <label>If the patient is pregnant, it will only be approved by her OBGYN. If the patient has an IUD, which one? </label>
                <input
                    type="text"
                    value={pregnancyIUD}
                    onChange={(e) => setPregnancyIUD(e.target.value)}
                />
            </div>

            {/* Yes/No questions */}
            <div>
                <label>Do they have a pacemaker or other heart implanted device such as a defibrillator?</label>
                <input type="radio" name="pacemaker" value="yes" onChange={() => setHasPacemaker(true)} /> Yes
                <input type="radio" name="pacemaker" value="no" onChange={() => setHasPacemaker(false)} /> No
                {hasPacemaker === true && <p>Patient cannot be scanned.</p>}
            </div>

            {shouldContinue(hasPacemaker) && (
                <>
                    <div>
                        <label>Do they have cochlear implants, or implanted hearing aids?</label>
                        <input type="radio" name="cochlearImplants" value="yes" onChange={() => setHasCochlearImplants(true)} /> Yes
                        <input type="radio" name="cochlearImplants" value="no" onChange={() => setHasCochlearImplants(false)} /> No
                        {hasCochlearImplants === true && <p>Patient cannot be scanned.</p>}
                    </div>

                    {shouldContinue(hasCochlearImplants) && (
                        <>
                            <div>
                                <label>Do they have Aneurysm clips?</label>
                                <input type="radio" name="aneurysmClips" value="yes" onChange={() => setHasAneurysmClips(true)} /> Yes
                                <input type="radio" name="aneurysmClips" value="no" onChange={() => setHasAneurysmClips(false)} /> No
                                {hasAneurysmClips === true && <p>Patient cannot be scanned.</p>}
                            </div>

                            {shouldContinue(hasAneurysmClips) && (
                                <>
                                    <div>
                                        <label>Do they have a spinal cord stimulator/or surgically implanted electronic implants?</label>
                                        <input type="radio" name="stimulator" value="yes" onChange={() => setHasStimulator(true)} /> Yes
                                        <input type="radio" name="stimulator" value="no" onChange={() => setHasStimulator(false)} /> No
                                        {hasStimulator === true && <p>Schedule at MH Imaging.</p>}
                                    </div>

                                    {shouldContinue(hasStimulator) && (
                                        <>
                                            <div>
                                                <label>Cataract surgery/intraocular lens implanted before 1985?</label>
                                                <input type="radio" name="cataractSurgery" value="yes" onChange={() => setHasCataractSurgery(true)} /> Yes
                                                <input type="radio" name="cataractSurgery" value="no" onChange={() => setHasCataractSurgery(false)} /> No
                                                {hasCataractSurgery === true && (
                                                    <>
                                                        {/* Bug. Patient cannot be scanned if yes, so form should end. */}
                                                        <div>
                                                            <label>Was the cataract surgery/intraocular lens implanted before 1985?</label>
                                                            <input type="radio" name="before1985" value="yes" onChange={() => setBefore1985(true)} /> Yes
                                                            <input type="radio" name="before1985" value="no" onChange={() => setBefore1985(false)} /> No
                                                            {before1985 === true && <p>Patient cannot be scanned.</p>}
                                                            {before1985 === false && <p>Must be approved by Proscan prior and scheduled at least 3 days out.</p>}
                                                        </div>
                                                    </>
                                                )}
                                            </div>

                                            <div>
                                                <label>Do they have any retained wires/leads, endoscopic clips or metallic surgical clips?</label>
                                                <input type="radio" name="retainedWires" value="yes" onChange={() => setRetainedWires(true)} /> Yes
                                                <input type="radio" name="retainedWires" value="no" onChange={() => setRetainedWires(false)} /> No
                                                {retainedWires === true && <p>Patients need an AP and Lateral X-Ray of the area including getting device cards or info about it. Needs to be cleared by Proscan and scheduled at least 3 days out.</p>}
                                            </div>

                                            <div>
                                                <label>Do they have a stent of any kind?</label>
                                                <input type="radio" name="stent" value="yes" onChange={() => setHasStent(true)} /> Yes
                                                <input type="radio" name="stent" value="no" onChange={() => setHasStent(false)} /> No
                                            </div>

                                            {hasStent === true && (
                                                <>
                                                    <div>
                                                        <label>Where is it placed? </label>
                                                        <input
                                                            type="text"
                                                            value={stentLocation}
                                                            onChange={(e) => setStentLocation(e.target.value)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label>What body part is being scanned? </label>
                                                        <input
                                                            type="text"
                                                            value={bodyPartScanned}
                                                            onChange={(e) => setBodyPartScanned(e.target.value)}
                                                        />
                                                    </div>

                                                    <div>
                                                        <label>Have they had an MRI since the stent was placed?</label>
                                                        <input type="radio" name="hadMRISinceStent" value="yes" onChange={() => setHadMRISinceStent(true)} /> Yes
                                                        <input type="radio" name="hadMRISinceStent" value="no" onChange={() => setHadMRISinceStent(false)} /> No
                                                    </div>

                                                    {hadMRISinceStent === true && (
                                                        <div>
                                                            <label>Where was the MRI performed? </label>
                                                            <input
                                                                type="text"
                                                                value={mriLocation}
                                                                onChange={(e) => setMriLocation(e.target.value)}
                                                            />
                                                        </div>
                                                    )}

                                                    {hadMRISinceStent === false && (
                                                        <div>
                                                            <label>Do they have a stent card?</label>
                                                            <input type="radio" name="hasStentCard" value="yes" onChange={() => setHasStentCard(true)} /> Yes
                                                            <input type="radio" name="hasStentCard" value="no" onChange={() => setHasStentCard(false)} /> No
                                                            {hasStentCard === true && <p>Review the stent card. 1.5 Tesla is safe.</p>}
                                                            {hasStentCard === false && <p>They must get a medical card to show us, or have their physician office fax us the details. Schedule 3 days out.</p>}
                                                        </div>
                                                    )}
                                                </>
                                            )}

                                            <div>
                                                <label>Have they ever had metal in their eyes, worked with metal/grinding/welding?</label>
                                                <input type="radio" name="metalEyes" value="yes" onChange={() => setHasMetalInEyes(true)} /> Yes
                                                <input type="radio" name="metalEyes" value="no" onChange={() => setHasMetalInEyes(false)} /> No
                                                {hasMetalInEyes === true && <p>Go to Foreign Metal Report.</p>}
                                            </div>

                                            <div>
                                                <label>Do they have any foreign bodies such as BB's, bullets, or shrapnel?</label>
                                                <input type="radio" name="foreignBodies" value="yes" onChange={() => setHasForeignBodies(true)} /> Yes
                                                <input type="radio" name="foreignBodies" value="no" onChange={() => setHasForeignBodies(false)} /> No
                                                {hasForeignBodies === true && <p>Go to Foreign Metal Report.</p>}
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </>
            )}

            {/* Bottom of form */}
            <div>
                <label>PERSON COMPLETING FORM: </label>
                <input
                    type="text"
                    value={formFiller}
                    onChange={(e) => setFormFiller(e.target.value)}
                />
            </div>
            <div>
                <label>DATE: </label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div>
                <label>ORDERING DOCTOR: </label>
                <input
                    type="text"
                    value={orderingDoctor}
                    onChange={(e) => setOrderingDoctor(e.target.value)}
                />
            </div>
            <div>
                <label>BODY PART: </label>
                <input
                    type="text"
                    value={bodyPart}
                    onChange={(e) => setBodyPart(e.target.value)}
                />
            </div>
            <div>
                <label>PT PHONE #: </label>
                <input
                    type="text"
                    value={patientPhoneNum}
                    onChange={(e) => setPatientPhoneNum(e.target.value)}
                />
            </div>
            <div>
                <PDFDownloadLink document={<PDFfile />}>
                    {<button>Download</button>}
                </PDFDownloadLink>
            </div>
        </div>
    );
};

export default MedicalForm;
