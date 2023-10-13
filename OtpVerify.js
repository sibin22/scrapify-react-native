import { Image, View,StyleSheet,TextInput ,Text, ScrollView,Modal, Button, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native";

const OtpVerify=()=>{
    
    const navigation=useNavigation();
    const navigateToHome=()=>{
        console.log('click')
        return navigation.navigate('header');
    }

    return(
     
      <View style={{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    backgroundColor: "rgba(38, 85, 112, 0.5)",
  }}>
      <View style={{   width:'100%',
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
    elevation: 5, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    justifyContent:'center',
    alignItems:'center',
    height:"auto"
    }}>

                <Text style={{fontSize:20,fontWeight:400,paddingHorizontal:40,textAlign:"center",
                color:'black',lineHeight:30}}>Verification code is sent to Phone Nmber </Text>
                
                <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                /></View>

                <Text style={{fontSize:16,color:'#005A7B',fontWeight:'bold'}}>Resend Code</Text>
                
<TouchableOpacity onPress={navigateToHome} 
     style={{
          backgroundColor:'#005A7B',
          padding:15,
          width:'100%',
          borderRadius:25,
          justifyContent: 'center', 
          alignItems: 'center',
          marginTop:60
}}>
    <View>

<Text style={{fontWeight:'bold',
    color:'white',fontSize:20}}>Verify</Text>

</View>
</TouchableOpacity>
                </View></View>
    )}

const styles=StyleSheet.create({
inputView:{
    display:'flex',
    flexDirection:'row',
    columnGap:10,
    paddingVertical:15},

    input:{
        width:50,
        borderBottomWidth:4,
        borderBottomColor:'lightgrey',
        fontWeight:"bold",
        fontSize:30,
        textAlign:"center"  
    }})


export default OtpVerify;