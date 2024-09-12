import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tab from './screens/tabs'

export default function App() {
  return (
    <>
    <Tab />
    <StatusBar style='light'/>
    </>
  );
}
