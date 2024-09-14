import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import decodeString from '../../utils/decoder';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#115E59',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  left: {
    width: '33%',//<- working alternative
  },

  right: {    
    width: '66%', //<- working alternative
  },
});

const CV = () => {
  const { t } = useTranslation();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.left}>
          <Text>{decodeString(t('personal-details.name'))}</Text>
        </View>
        <View style={styles.right}>
          <Text></Text>
        </View>
      </Page>
    </Document>
  );
};

export default CV;