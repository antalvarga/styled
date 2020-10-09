
import React, { Props } from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView, StatusBar, ImageBackground, ImagePropTypes, TouchableOpacity} from 'react-native';


import {AntDesign} from '@expo/vector-icons';

export default function App() {

  const teste : {
    color: 'light'
    , tp: 'small'
  }

  const recipes = [
    {
      name: 'XPTO 14'
      , info: '45 min | 2 servings'
      , image: require('./assets/shaafi-ali-Uck7TR7XYFo-unsplash.jpg')
    },
    {
      name: '123 de oliveira 4'
      , info: '20 min | 4 servings'
      , image: require('./assets/dan-gold-E6HjQaB7UEA-unsplash.jpg')
    },
    {
      name: 'PAD THAI'
      , info: '60 min | 2 servings'
      , image: require('./assets/victoria-shes-Qa29U4Crvn4-unsplash.jpg')
    },

  ]



  return(
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />

      <ImageBackground 
        style={styles.recipeBackground}
        source={require('./assets/main2.jpg')}
      >
        <SafeAreaView>

          <View style={styles.menubar}>

            <View style={styles.back}>
              <AntDesign name= 'arrowleft' size={24} color='#fff'/>
              <Text style={styles.text} >Igredients</Text>
            </View>

            <AntDesign name='heart' size={24} color='#fff'/>

            <View style={styles.mainRecipe}>

            </View>

          </View>

          <View style={styles.mainRecipe}>

            <View>
              <Text style={[styles.text]} >Spicy Shrimp</Text>
              <View style={styles.Divider}> 
            </View>

            <Text style={{color:'#fff'}}>80 calories</Text>
            <Text style={{color:'#fff'}}>3g fat | 10g protein | 8g carbs</Text>

          </View>
            
          <View>
            <Text style={styles2('dark').text2}>TESTES </Text>
            <Text style={styles3({color:'#000', tp:'title'}).text3}>TESTES </Text>
          </View>

          <TouchableOpacity style={styles.Button}>
            <Text style={styles4({color: 'light', tp: 'xpto'}).text4}>
              BOTÃO LEARN MORE
            </Text>
          </TouchableOpacity>          
 
          </View>

          <View style={styles.RecipesContainer}>
            <Text style={styles2('dark').text2}>Recipes </Text>
            <Text style={styles2('dark').text2}>18 recipes available </Text>



            <View style={styles.Recipes}>
              {recipes.map((recipe, index) => {
                return(
                  <View style={styles.Recipe} key={index}>
                    <Image style={styles.RecipeImage} source={recipe.image}/> 
                    {/* <Image source={recipe.image}/> */}


                      <View style={styles.RecipeInfor}>
                        <Text>{recipe.name}</Text>
                        <Text>{recipe.info}</Text>
                      </View>

                      <AntDesign name='hearto' size={18} color='#fff' />
          
                  </View>                        
                )
              })}

            </View>


            




          </View>

        </SafeAreaView>

      </ImageBackground>
    </View>
  );
}

// const styles2: React.FC<StyleSheet> = StyleSheet.create({props}) => {
// const styles2 = StyleSheet.create({ 
const styles2 = (props: string) => StyleSheet.create({
  text2: {
    // color: (props.light ? '#fff' : '#000')
    // color: props
    color: (props === 'light' ? '#fff' : '#000')
  }  
})  

const styles3 = (props) => StyleSheet.create({
  text3: {
    color: props.color
  }
})


const styles4 = ({color, tp}) => StyleSheet.create({
  text4: {
    color: (color == 'dark' ? '#000' : '#fff')
    , fontSize: (tp == 'title' ? 32 : 14)
    , fontWeight: 'bold'
  }
})


const styles5 = (props) => StyleSheet.create({
  text5: {
    color: (props.color == 'dark' ? '#000' : '#fff')
    , fontSize: (props.tp == 'title' ? 32 : 14)
  }
})


const styles = StyleSheet.create({

  container: {
    flex: 1
    , backgroundColor: '#fff'
  }
  , text: {
    // color: ${(props) => (props.dark ? '#000' : '#fff')}
    //color: '#fff'
    // color: (props) => {(props.dark ? '#000' : '#fff')}
    color: '#fff'




    , fontFamily: 'AvenirNext-Regular'
    , marginLeft: 0
    , fontSize: 20
    , fontWeight: 'bold'

    // ${({title, large, small}) => {
    //   switch(true) {
    //     case title: 
    //       return `font-size: 32px`
    //     case large:
    //       return `font-size: 20px`
    //     case small:
    //       return `font-size: 13px`            
    //   }
    // }}

    // ${({bold, heavy}) => {
    //   switch(true) {
    //     case bold:
    //       return `font-weight: 600`
    //     case heavy:
    //       return `font-weight: 700`  
    //   }
    // }}


    //const Xpo: React.SFC = () => {}

    //props = () => {}

  }
  , recipeBackground: {
    width: '100%'
  }
  , menubar: {
    flexDirection: 'row'
    , justifyContent: 'space-between'
    , padding: 10
  }
  , back: {
    flexDirection: 'row'
    , alignItems: 'center'
  }
  , mainRecipe: {
    paddingTop: 0
    //, paddingRight: 32

    //, marginTop: 200
    //, marginRight: 0
    //, marginBottom: 32
    , margin: 0
    , marginLeft: 10
    , marginBottom: 80

  }
  , Divider: {
    borderBottomColor: '#fff'
    , borderBottomWidth: 2
    , width: 250
    , marginTop: 8
    , marginRight: 0

  }
  , Button: {

    marginTop: 0
    , marginRight: 0
    , marginBottom: 48
    , marginLeft: 32 

    //, backgroundColor: rgba(255,255,255,0.3)
    //, backgroundColor: 'transparent'
    , backgroundColor: 'rgba(255,255,255,0.3)'
    , alignSelf: "auto"    //'flex-start'
    , paddingTop: 6
    , paddingRight: 18
    , borderRadius: 100
  }
  , RecipesContainer: {
    marginTop: -24
    , padding: 32
    , backgroundColor: '#fff'
    , borderTopLeftRadius: 24
    , borderTopRightRadius: 24
    , 
  }
  , Recipes: {
    marginTop: 16
    , 
  }
  , Recipe: {
    flexDirection: 'row'
    , alignItems: 'center'
    , marginBottom: 16
    , 
  }
  , RecipeImage: {
    width: 60
    , height: 60
    , borderRadius: 8
  }
  , RecipeInfor: {
    flex: 1
    , marginLeft: 12
    
  }


});