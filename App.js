import { StatusBar, SafeAreaView, View} from 'react-native';
import Cesta from './src/screens/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import mock from './src/mocks/cesta.js'

export default function App() {
  const [fonteCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
  });

  if (!fonteCarregada){
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
