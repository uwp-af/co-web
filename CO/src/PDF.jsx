import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});



const PDFfile = ({
    patientName,
    patientDOB,
    pregnancyIUD,
    hasPacemaker,
    hasCochlearImplants,
    hasAneurysmClips,
    hasStimulator,
    hasCataractSurgery,
    hasRetainedWires,
    hasStent,
    hasMetalInEyes,
    hasForeignBodies,
    formFiller,
    date,
    orderingDoctor,
    bodyPart,
    patientPhoneNum,
}) => {
    const [localPatientName, setLocalPatientName] = useState('');
    const [localDOB, setLocalDOB] = useState('');
    const [iudLocal, setLocalIUD] = useState('');
    const [localPace, setLocalPace] = useState('');
    const [cochLocal, setLocalCoch] = useState('');
    const [clipsLocal, setLocalClips] = useState('');
    const [stimLocal, setLocalStim] = useState('');
    const [catLocal, setLocalCat] = useState('');
    const [retLocal, setLocalRet] = useState('');
    const [stentLocal, setLocalStent] = useState('');
    const [metalLocal, setLocalMetal] = useState('');
    const [forLocal, setLocalFor] = useState('');
    const [fillLocal, setLocalFill] = useState('');
    const [dateLocal, setLocalDate] = useState('');
    const [docLocal, setLocalDoc] = useState('');
    const [bodyLocal, setLocalBody] = useState('');
    const [numLocal, setLocalNum] = useState('');



    const updateLocalIUD = (iud) => {
        if (iud !== null) {
            setLocalIUD(iud);
        }
    };
    useEffect(() => {
        updateLocalIUD(pregnancyIUD);
    }, [pregnancyIUD]);

    const updateLocalCoch = (coch) => {
        if (coch !== null) {
            setLocalCoch(coch);
        }
    };
    useEffect(() => {
        updateLocalCoch(hasCochlearImplants);
    }, [hasCochlearImplants]);

    const updateLocalClips = (clips) => {
        if (clips !== null) {
            setLocalClips(clips);
        }
    };
    useEffect(() => {
        updateLocalClips(hasAneurysmClips);
    }, [hasAneurysmClips]);

    const updateLocalStim = (stim) => {
        if (stim !== null) {
            setLocalStim(stim);
        }
    };
    useEffect(() => {
        updateLocalStim(hasStimulator);
    }, [hasStimulator]);

    const updateLocalCat = (cat) => {
        if (cat !== null) {
            setLocalCat(cat);
        }
    };
    useEffect(() => {
        updateLocalCat(hasCataractSurgery);
    }, [hasCataractSurgery]);

    const updateLocalRet = (ret) => {
        if (ret !== null) {
            setLocalRet(ret);
        }
    };
    useEffect(() => {
        updateLocalRet(hasRetainedWires);
    }, [hasRetainedWires]);

    const updateLocalStent = (stent) => {
        if (stent !== null) {
            setLocalStent(stent);
        }
    };
    useEffect(() => {
        updateLocalStent(hasStent);
    }, [hasStent]);

    const updateLocalMetal = (metal) => {
        if (metal !== null) {
            setLocalMetal(metal);
        }
    };
    useEffect(() => {
        updateLocalMetal(hasMetalInEyes);
    }, [hasMetalInEyes]);

    const updateLocalForeign = (foreign) => {
        if (foreign !== null) {
            setLocalFor(foreign);
        }
    };
    useEffect(() => {
        updateLocalForeign(hasForeignBodies);
    }, [hasForeignBodies]);

    const updateLocalFiller = (fill) => {
        if (fill !== null) {
            setLocalFill(fill);
        }
    };
    useEffect(() => {
        updateLocalFiller(formFiller);
    }, [formFiller]);

    const updateLocalDate = (date) => {
        if (date !== null) {
            setLocalDate(date);
        }
    };
    useEffect(() => {
        updateLocalDate(date);
    }, [date]);

    const updateLocalDoctor = (doc) => {
        if (doc !== null) {
            setLocalDoc(doc);
        }
    };
    useEffect(() => {
        updateLocalDoctor(orderingDoctor);
    }, [orderingDoctor]);

    const updateLocalBodyPart = (body) => {
        if (body !== null) {
            setLocalBody(body);
        }
    };
    useEffect(() => {
        updateLocalBodyPart(bodyPart);
    }, [bodyPart]);

    const updateLocalNum = (num) => {
        if (num !== null) {
            setLocalNum(num);
        }
    };
    useEffect(() => {
        updateLocalNum(patientPhoneNum);
    }, [patientPhoneNum]);


    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const updateLocalPatientName = (newPatientName) => {
        if (newPatientName !== null && newPatientName !== undefined) {
            setLocalPatientName(newPatientName);
        }
    };
    useEffect(() => {
        updateLocalPatientName(patientName);
    }, [patientName]);

    const updateLocalDOB = (newDOB) => {
        if (newDOB !== null) {
            setLocalDOB(newDOB);
        }
    };
    useEffect(() => {
        updateLocalDOB(patientDOB);
    }, [patientDOB]);

    const updateLocalPace = (newPace) => {
        if (newPace !== null) {
            setLocalPace(newPace);
        }
    };
    useEffect(() => {
        updateLocalPace(hasPacemaker);
    }, [hasPacemaker]);


    const renderPDFContent = () => (
        <PDFViewer width="100%" height="500px">
            <Document>
                <Page size="A4">
                    <View >
                        <Text> Patient name in PDF: {localPatientName} </Text>
                        <Text> Patient DOB in PDF: {localDOB} </Text>
                        <Text> Patient pacemaker in PDF: {localPace} </Text>
                        <Text> Patient IUD in PDF: {iudLocal} </Text>
                        <Text> Patient Coch in PDF: {cochLocal} </Text>
                        <Text> Patient Clips in PDF: {clipsLocal} </Text>
                        <Text> Patient Stim in PDF: {stimLocal} </Text>
                        <Text> Patient Cataracts in PDF: {catLocal} </Text>
                        <Text> Patient Ret in PDF: {retLocal} </Text>
                        <Text> Patient Stent in PDF: {stentLocal} </Text>
                        <Text> Patient Metal in PDF: {metalLocal} </Text>
                        <Text> Patient foreign in PDF: {forLocal} </Text>
                        <Text> Patient filler in PDF: {fillLocal} </Text>
                        <Text> Patient date in PDF: {dateLocal} </Text>
                        <Text> Patient Doctor in PDF: {docLocal} </Text>
                        <Text> Patient bodypart in PDF: {bodyLocal} </Text>
                        <Text> Patient phone-number in PDF: {numLocal} </Text>

                        localDOB
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );

    return renderPDFContent();
};

export default PDFfile;