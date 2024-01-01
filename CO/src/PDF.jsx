import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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

const PDFfile = ({ patientName }) => {
    const [localPatientName, setLocalPatientName] = useState('');
    console.log(localPatientName + '*')
    useEffect(() => {
        // Update localPatientName when patientName prop changes
        setLocalPatientName(patientName);
    }, [patientName]);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>Patient Name in PDF: {localPatientName} </Text>
                </View>
            </Page>
        </Document>)
};
export default PDFfile;

