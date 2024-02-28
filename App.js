import { Text, View } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import { styles } from './src/styles/StyleSheet'; 
import Corpo from './src/components/Corpo';
import Rodape from './src/components/Rodape';

// cabeçalho
// corpo
// rodape

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Corpo />
      <Rodape />
    </View>
  );
}


