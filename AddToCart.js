import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,} from 'react-native';



export default function AddToCart({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.pageTitleInfoContainer}>
                    <Text style={styles.heading}>Add To Cart</Text>
                    <Text style={styles.paragraph}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                             It has survived not only five centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.
                    </Text>
                 </View>
                 <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./assets/undraw_add_to_cart_vkjp.png")}
        />
      </View>       
                     
      <TouchableOpacity onPress={()=>{
        navigation.navigate("PaymentSuccessful")
      }}
       style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text
         onPress={()=>{
        navigation.navigate("OnlineShopping")
      }}
          style={styles.footerSkip}
        >
          Previous
        </Text>

        <Text onPress={()=>{
        navigation.navigate("PaymentSuccessful")
      }}
          
          style={styles.footerPrevious}
        >
          Skip
        </Text>
      </View>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        marginHorizontal:10,
    },
    pageTitleInfoContainer:{
        flexDirection:'column',
        marginTop:40,
        
    },
    heading:{
        fontSize:23,
        textTransform:'uppercase',
        fontWeight:'bold',
        marginBottom:10
    },
    paragraph:{
        color:'#707070',
        fontSize:15,
        textAlign:'left',
},
image: {

    height:230,
    width:230,
    
  },
  imageContainer: {
    alignItems: "center",
    marginTop:30,
  },
  button: {
    backgroundColor: "#8132a8",
    height: 50,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
     marginTop: 40,
    justifyContent: "space-between",
  },

  footerSkip: {
    color: "#a3a3a3",
    fontSize: 18,
  },

  footerPrevious: {
    color: "#a3a3a3",
    fontSize: 18,
  },

})
