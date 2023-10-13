import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet,TextInput,Button } from "react-native";

const LoginCard = ({onClose,goToRegister,goToOtpVerify,phone,setPhoneNumber,loginMsg}) => {

  const navigation=useNavigation();

 const [toggleSeller, setSeller] = useState(true);
 const [toggleBuyer, setBuyer] = useState(false);

  const selectSeller = () => {
  setSeller(true)
  setBuyer(false)}  

const selectBuyer = () => {
  setSeller(false)
  setBuyer(true)}  
 const handleButtonPress=()=>{
  
 }
return(
      
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.heading}>

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={{fontSize:20}}>X</Text>
          </TouchableOpacity>

          <Text style={{fontSize:20, color:'#004159',fontWeight:900,textAlign:'center',
          marginLeft:'40%'}}>Login</Text>
          </View>  

<View style={styles.toggleView}>
    <TouchableOpacity onPress={selectSeller}>
        <View style={[styles.selection,toggleSeller && styles.selected]}>
        <Text style={[styles.selectionText,toggleSeller && {color:'white'}]}>Seller</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={selectBuyer}>
        <View style={[styles.selection,toggleBuyer && styles.selected]}>
        <Text style={[styles.selectionText,toggleBuyer && {color:'white'}]}>Buyer</Text>  
    </View>
    </TouchableOpacity>
   
   
    </View>
  
    <View style={styles.container}>
        <Text style={{paddingVertical:8}}>Phone number</Text>
      <TextInput
        style={styles.input}
        value={phone}
        placeholder='XXXXX XXXXX'
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        maxLength={10} />
</View>
{loginMsg ? <Text style={{ color: 'red' }}>{loginMsg}</Text> : null}
<View style={styles.buttonContainer}>
      <View>
      <TouchableOpacity onPress={goToOtpVerify}
        style={styles.otpButton}
       >
        <Text style={styles.OtpButtonText}>Get OTP</Text>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity
        style={styles.gLoginButton}
        onPress={handleButtonPress}>
        <Text style={styles.GButtonText}>Login with</Text>
      </TouchableOpacity></View>

    </View>

<View style={{paddingVertical:20}}>
    <Text style={{fontWeight:'bold'}}>Dont have an account? 
    <Text onPress={goToRegister} style={{color: '#005A7B'}}> Register here</Text></Text>
</View>
        </View>
      </View>
   
  );};

const styles = StyleSheet.create({
        heading:{
          display:'flex',
          flexDirection:'row',
          justifyContent:'flex-start',
          width:'100%'
         },
        container: {
          padding: 10,
          width:'100%'
        },
        input: {
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius:8,
          paddingHorizontal: 10,
        },
       
    toggleView:{
        marginBottom:0,
        alignItems:'center',
        alignSelf:'center',
        marginVertical:10,
        borderWidth:1,
        borderRadius:25,
borderColor:'rgb(38, 85, 112)',
width:170,
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
padding:2
 },
    selected:{      
backgroundColor:'#005A7B',
height:38,
width:80,
borderRadius:20,
display:'flex',
justifyContent:'center',
alignItems:'center'
    },
    selection:{
       backgroundColor:'transparent',
        height:38,
        width:80,
        borderRadius:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'   
    },
    selectionText:{
      color:'rgb(38, 85, 112)'
    },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    backgroundColor: "rgba(38, 85, 112, 0.5)", 
  },
  card: {
    width:'100%',
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
    elevation: 5, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    paddingTop:20,
    paddingHorizontal:30,
    display:'flex',
    rowGap:10,
    width:'100%'
  },
otpButton:{
backgroundColor:'#005A7B',
padding:15,
borderRadius:25,
justifyContent: 'center', 
alignItems: 'center',
},
OtpButtonText:{
    fontWeight:'bold',
    color:'white',
},
gLoginButton:{
    borderWidth:2,
    borderColor:'rgb(38, 85, 112)',
    borderColor:20,
    padding:15,
    borderRadius:25,
    justifyContent: 'center', 
    alignItems: 'center',
},
GButtonText:{
    fontWeight:'bold',
    color:'#005A7B',
},

  closeButton: {
    alignSelf: "flex-start",
  },
});


export default LoginCard;