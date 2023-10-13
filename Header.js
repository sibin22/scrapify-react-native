1
import { StyleSheet } from "react-native";
import { View,Image,Text,TouchableOpacity,TextInput ,Modal,Button} from 'react-native';
import OverlayCard from "./LoginCard";
import react,{ useState } from "react";
import Svg,{G,Rect} from "react-native-svg"
import OtpVerify from "./OtpVerify";
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavbar from "./BottomNav";
import RegisterModal from "./RegisterModal";
import LoginCard from "./LoginCard";
import axios from 'axios';



 function Header(onClose) {
   
        const [cardVisible, setCardVisible] = useState(false);
        const [loginCard,setLoginCard] = useState (true);
        const [registerModal,setRegisterModal]= useState(false)
        const [otpVerifyModal,setOtpVerifyModal]= useState(false)
        const [phone, setPhoneNumber] = useState('');
        const [loginMsg,setLoginMsg] = useState('');

const closeCard = () => {setCardVisible(onClose)};
const goToRegister=()=>{
    return (
    setLoginCard(false),
    setRegisterModal(true))
}
const goToOtpVerify = async () => {
    let result;
    const apiUrl = 'http://10.0.2.2:8080/login';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    try {
        const response = await axios.get(apiUrl + '?phone=' + phone, options);
        result = response.status;
    } catch (error) {
        console.log(error);
    }

    if (result === 200) { 
        return (
               setLoginCard(false),
               setOtpVerifyModal(true))}
    else {
        setLoginMsg("Phone Number Not found");
    }  
}
    return (
     
      <View style={styles.container}>

<Svg
    width={26}
    height={24}
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <G id="Mobile/Variant5">
      <Rect
        id="Rectangle 4"
        y={3}
        width={26}
        height={2.54902}
        rx={1.27451}
        fill="white"
      />
      <Rect
        id="Rectangle 5"
        y={10.647}
        width={26}
        height={2.54902}
        rx={1.27451}
        fill="white"
      />
      <Rect
        id="Rectangle 6"
        y={18.2942}
        width={26}
        height={2.54902}
        rx={1.27451}
        fill="white"
      />
    </G>
  </Svg>

      <View  style={styles.logo}>
      <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/2339/ce07/09d46999fb381db0a61516b5155c8bd8?Expires=1696809600&Signature=FeJ4~oE2x9Hr0YcJydWnbzg8tw9zZ~CCvQqLx~LtfBluMGiqz5Ow0OznMbc83e8ZABXogXaQEW-N1Pt9gGeLlzCvxVTrxRqcwhTxDAK6LEpPatKGs1Ez1jOQm7xQvDCJjNDc3Wa4KqXVx5QLVyJ47iK-W4kStqpRIYUSYHv2EbITx96SJs0be5MFO~44DQHH161yTYVrVe-443iyCX4FWAqlcw9fDTeUP~ugtGUUi1aeaIiC8wpzlBlm~-lk6wXm9I0TXSQYTw44FjJG7EgSu3HgkqySiAzMKK-I2FIIbn-TFUF0zXyXLKrn6LnuiHDFM~dZrdlgAMVxnXR0CqPm0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
            style={{width: 39, height:43}}/>
      <Image
           source={require('./assets/white.png')} style={{}}/>
           </View>

          <TouchableOpacity onPress={()=>setCardVisible(true)}>
        <Image style={styles.profileImage}
            source={{
              uri: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695718420~exp=1695719020~hmac=21ae0e9d3f4a46ca3b756f021b9bcc664469b921c09f0e678ef939ed65e5e5e5',
            }}/>
      </TouchableOpacity>
      
      <Modal
      animationType="slide"
      transparent={true}
      visible={cardVisible}
      onRequestClose={onClose}>

    {registerModal && <RegisterModal/>}
    {loginCard &&
    <OverlayCard 
        visible={false}
          onClose={closeCard}
          goToRegister={goToRegister}
          goToOtpVerify={ goToOtpVerify}
          phone={phone}
          setPhoneNumber={setPhoneNumber}
          loginMsg={loginMsg}
       /> }
    {otpVerifyModal && <OtpVerify/>}
     </Modal>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      backgroundColor: '#02C784',
      alignItems: 'center',
      justifyContent:'space-between',
      paddingVertical:20,
      paddingHorizontal:30
    },
    logo:{
     gap:10,
     flexDirection:'row',
     alignItems: 'center',
     justifyContent:'center',
    },
    profileImage: {
        width: 40,
        height: 40, 
        borderRadius: 100, 
      },
  });

export default Header;