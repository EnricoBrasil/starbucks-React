import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.areaView}>
      <View>
        <Image 
        source={require('./assets/realLogo.jpg')}
        style={styles.logo}
        />
      </View>

        <ScrollView>
          
      <View>
        <Image 
        source={require('./assets/ca.jpg')}
        style={styles.ca}
        />
      </View>

    <View style={styles.titulo}>
      <Text style={styles.slogan}>It's more than coffee</Text>
    </View>

    <View style={styles.titulo}>
      <Text style={styles.fontText}>NOSSO LEGADO Todos os dias esperamos fazer duas coisas: 
      dividir um ótimo café com nossos amigos e ajudar a tornar o mundo um pouquinho melhor. 
      Já era assim quando a primeira Starbucks abriu em 1971 e continua sendo assim até hoje.</Text>
      <Text style={styles.fontText}>Todos os dias esperamos fazer duas coisas: dividir um ótimo café com nossos amigos e ajudar a tornar o mundo um pouquinho melhor. Já era assim quando a primeira Starbucks abriu em 1971 e continua sendo assim até hoje.</Text>
      <Text style={styles.fontText}>Naquela época, a empresa era uma única loja no histórico Pike Place Market de Seattle. Em sua fachada estreita, a Starbucks oferecia alguns dos melhores cafés em grãos inteiros recém-torrados do mundo. O nome, inspirado em Moby Dick, evocava o romance do alto-mar e a tradição dos navegadores que primeiro comercializaram o café.

Em 1981, Howard Schultz (presidente, CEO e presidente do conselho da Starbucks) entrou pela primeira vez em uma loja Starbucks. Já no primeiro copo de Sumatra, Howard ficou empolgado com a empresa, na qual ingressou um ano mais tarde.

Um ano depois, em 1983, Howard viajou para a Itália e se encantou com as cafeterias italianas e o aspecto romântico da experiência de tomar café. Ele teve a visão de levar a tradição das coffehouses italianas para os Estados Unidos. Um lugar para conversar, com um senso de comunidade. Um lugar intermediário entre trabalho e casa. Howard saiu da Starbucks por um breve período para abrir sua própria cadeia de cafés, Il Giornale, e retornou em agosto de 1987 para comprar a Starbucks com ajuda de investidores locais.

Desde o início, a Starbucks se propunha a ser um tipo de empresa diferente, que não apenas celebrava o café e sua rica tradição, mas também trazia um sentimento de conexão.</Text>
    </View>

  <View style={styles.rodapetodo}>
    <Text style={styles.rodape}>© 2023 Starbucks Coffee Company. Todos os direitos reservados.</Text>
  </View>

    </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  areaView:{
    
  },
  ca:{
    width:415,
    resizeMode:'contain',
  },

  slogan:{
    fontSize:40,
    backgroundColor:'#fff'
  },
  
  logo: {
    width:'100%',
    height:80,
    resizeMode:'contain'
  },
  
  titulo:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#026547',
  },
    
  fontText:{
    fontSize:14,
    textAlign:'justify',
    padding:15,
  },

  rodape:{
    backgroundColor:'#fff',
    height:100,
    display:'flex',
    justifyContent:'center',
    fontSize:13,
    paddingTop:10,
    padding:20
  },

  rodapetodo:{
    display:'flex',
    justifyContent:'center',
  }
  

});
