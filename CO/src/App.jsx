import React, { useState } from 'react';
import './App.css'
import PDFfile from './PDF'

export const MedicalForm = () => {
  // top of form
  const [patientName, setPatientName] = useState('');
  const [patientDOB, setPatientDOB] = useState('');
  const [pregnancyIUD, setPregnancyIUD] = useState('');
  // yes/no questions
  const [hasPacemaker, setHasPacemaker] = useState('');
  const [hasCochlearImplants, setHasCochlearImplants] = useState(null);
  const [hasAneurysmClips, setHasAneurysmClips] = useState(null);
  const [hasStimulator, setHasStimulator] = useState(null);
  const [hasCataractSurgery, setHasCataractSurgery] = useState(null);
  const [hasRetainedWires, setHasRetainedWires] = useState(null);
  const [hasStent, setHasStent] = useState(null);
  const [hasMetalInEyes, setHasMetalInEyes] = useState(null);
  const [hasForeignBodies, setHasForeignBodies] = useState(null);

  // bottom of form
  const [formFiller, setFormFiller] = useState('');
  const [date, setDate] = useState('');
  const [orderingDoctor, setOrderingDoctor] = useState('');
  const [bodyPart, setBodyPart] = useState('');
  const [patientPhoneNum, setPatientPhoneNum] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data
    console.log({
      patientName, patientDOB, pregnancyIUD,
      hasPacemaker, hasCochlearImplants, hasAneurysmClips, hasStimulator,
      hasCataractSurgery, hasRetainedWires, hasStent, hasMetalInEyes, hasForeignBodies,
      formFiller, date, orderingDoctor, bodyPart, patientPhoneNum
    });
  };

  return (
    <div onChange={handleSubmit}>
      {/* top of form */}
      <div>
        <label>PT NAME: </label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
      </div>
      <div>
        <label>PT DOB: </label>
        <input
          type="dob"
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
      {/* yes/ no questions */}
      <div>
        <label>Do they have a pacemaker or other heart implanted device such as a defibrillator?</label>
        <input type="radio" name="pacemaker" value="yes" onChange={() => setHasPacemaker('true')} /> Yes
        <input type="radio" name="pacemaker" value="no" onChange={() => setHasPacemaker(false)} /> No
        {/* If yes, they will have to be scheduled at another facility, most likely at a hospital if it is MRI safe. IT WILL NOT BE DONE HERE! */}
      </div>
      <div>
        <label>Do they have cochlear implants, or implanted hearing aids?</label>
        <input type="radio" name="cochlearImplants" value="yes" onChange={() => setHasCochlearImplants(true)} /> Yes
        <input type="radio" name="cochlearImplants" value="no" onChange={() => setHasCochlearImplants(false)} /> No
        {/* If yes, they cannot be scanned. */}
      </div>
      <div>
        <label>Do they have Aneurysm clips?</label>
        <input type="radio" name="aneurysmClips" value="yes" onChange={() => setHasAneurysmClips(true)} /> Yes
        <input type="radio" name="aneurysmClips" value="no" onChange={() => setHasAneurysmClips(false)} /> No
        {/* If yes, they cannot be scanned. */}
      </div>
      <div>
        <label>Do they have a spinal cord stimulator/or surgically implanted electronic implants?</label>
        <input type="radio" name="stimulator" value="yes" onChange={() => setHasStimulator(true)} /> Yes
        <input type="radio" name="stimulator" value="no" onChange={() => setHasStimulator(false)} /> No
        {/* If yes, schedule at MH Imaging. */}
      </div>
      <div>
        <label>Cataract surgery/intraocular lens implanted before 1985?</label>
        <input type="radio" name="cataractSurgery" value="yes" onChange={() => setHasCataractSurgery(true)} /> Yes
        <input type="radio" name="cataractSurgery" value="no" onChange={() => setHasCataractSurgery(false)} /> No
        {/* Before cannot be scanned. After 1985 can be scanned, must be approved by Proscan prior and scheduled at least 3 days out. */}
      </div>
      <div>
        <label>Do they have any retained wires/leads, endoscopic clips or metallic surgical clips?</label>
        <input type="radio" name="retainedWires" value="yes" onChange={() => setHasRetainedWires(true)} /> Yes
        <input type="radio" name="retainedWires" value="no" onChange={() => setHasRetainedWires(false)} /> No

      </div>
      <div>
        <label>Do they have a stent of any kind?</label>
        <input type="radio" name="stent" value="yes" onChange={() => setHasStent(true)} /> Yes
        <input type="radio" name="stent" value="no" onChange={() => setHasStent(false)} /> No
      </div>
      <div>
        <label>Have they ever had metal in their eyes, worked with metal/grinding/welding?</label>
        <input type="radio" name="metalEyes" value="yes" onChange={() => setHasMetalInEyes(true)} /> Yes
        <input type="radio" name="metalEyes" value="no" onChange={() => setHasMetalInEyes(false)} /> No
      </div>
      <div>
        <label>Do they have any foreign bodies such as BB's, bullets, shrapnel?</label>
        <input type="radio" name="foreignBodies" value="yes" onChange={() => setHasForeignBodies(true)} /> Yes
        <input type="radio" name="foreignBodies" value="no" onChange={() => setHasForeignBodies(false)} /> No
      </div>
      <div>
        ** MRI personnel will take all the necessary steps for approval from the
        scanned device cards, and X-Rays taken. Have the pt go in the waiting room to fill
        out the more extensive questionnaire. When completed, they will hand it in to the
        front desk to make sure everything is filled out. Any questions can be answered by a
        tech in the building. They will be given a sheet to take home that will hopefully answer
        any and all questions prior.
      </div>
      {/* bottom of form */}
      <div>
        <label>PERSON COMPLETING FORM: </label>
        <input
          type="formFiller"
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
          type="orderingDoctor"
          value={orderingDoctor}
          onChange={(e) => setOrderingDoctor(e.target.value)}
        />
      </div>
      <div>
        <label>BODY PART: </label>
        <input
          type="bodyPart"
          value={bodyPart}
          onChange={(e) => setBodyPart(e.target.value)}
        />
      </div>
      <div>
        <label>PT PHONE #: </label>
        <input
          type="patientPhoneNum"
          value={patientPhoneNum}
          onChange={(e) => setPatientPhoneNum(e.target.value)}
        />
      </div>
      <PDFfile patientName={patientName} hasPacemaker={hasPacemaker} />
    </div>

  );
};

export default MedicalForm;
