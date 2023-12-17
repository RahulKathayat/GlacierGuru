import { SafeAreaView, StyleSheet, Text, View ,StatusBar} from 'react-native';
import AppNavigation from './src/navigation';
import { useEffect } from 'react';
import { apiCall } from './src/api/openAI';
export default function App() {
  return (
    <>
    <StatusBar backgroundColor="transparent" translucent={true} barStyle={"dark-content"}/>
    <AppNavigation/>
    </>
  );
}

const styles = StyleSheet.create({});
