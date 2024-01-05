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



const PDFfile = ({ patientName, hasPacemaker }) => {
    const [localPatientName, setLocalPatientName] = useState('');
    const [localPace, setLocalPace] = useState('');


    const updateLocalPatientName = (newPatientName) => {
        if (newPatientName !== null && newPatientName !== undefined) {
            setLocalPatientName(newPatientName);
        }
    };

    useEffect(() => {
        // Update localPatientName when patientName prop changes
        updateLocalPatientName(patientName);
    }, [patientName]);

    const updateLocalPace = (newPace) => {
        if (newPace !== null) {
            setLocalPace(newPace);
        }
    };

    useEffect(() => {
        // Update localPatientName when patientName prop changes
        updateLocalPace(hasPacemaker);
    }, [hasPacemaker]);


    const renderPDFContent = () => (
        <PDFViewer width="100%" height="500px">
            <Document>
                <Page size="A4">
                    <View >
                        <Text> Patient name in PDF: {localPatientName} </Text>
                        <Text> Patient pacemaker in PDF: {localPace} </Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );

    return renderPDFContent();
};

export default PDFfile;
