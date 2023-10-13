import {Text,View,Image,StyleSheet,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg,{G,Rect,Path,Defs,ClipPath} from "react-native-svg"
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

 const  OtpSuccess=()=>{
const navigation=useNavigation();
    useEffect(() => {
      const redirectTimeout = setTimeout(() => {
        navigation.navigate('ConfirmPickup'); 
      }, 2000); 
  
      return () => {
        clearTimeout(redirectTimeout);
      };
    }, [navigation]);

    return(
        <SafeAreaView>
        <View style={styles.home}>                    
                    <Svg
                    width={120}
                    height={120}
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                   
                  >
                    <G id="Frame" clipPath="url(#clip0_1_5409)">
                      <G id="Group">
                        <Path
                          id="Vector"
                          d="M60.0008 115.352C90.571 115.352 115.353 90.5701 115.353 59.9998C115.353 29.4295 90.571 4.64746 60.0008 4.64746C29.4305 4.64746 4.64844 29.4295 4.64844 59.9998C4.64844 90.5701 29.4305 115.352 60.0008 115.352Z"
                          fill="#02C784"
                        />
                        <Path
                          id="Vector_2"
                          d="M60 120C26.9187 120 0 93.086 0 60C0 26.9187 26.9187 0 60 0C93.086 0 120 26.9187 120 60C120 93.086 93.086 120 60 120ZM60 9.29508C32.0402 9.29508 9.29508 32.0402 9.29508 60C9.29508 87.9598 32.0402 110.705 60 110.705C87.9598 110.705 110.705 87.9551 110.705 60C110.705 32.0402 87.9598 9.29508 60 9.29508Z"
                          fill="#02C784"
                        />
                        <Path
                          id="Vector_3"
                          d="M52.7498 82.076C52.1328 82.0762 51.522 81.9535 50.953 81.7149C50.384 81.4763 49.8683 81.1266 49.436 80.6864L32.2866 63.2581C30.488 61.4269 30.5112 58.4897 32.3423 56.6864C34.1735 54.8925 37.1154 54.911 38.914 56.7422L52.6151 70.6662L80.9606 39.4486C82.6941 37.5478 85.6315 37.4131 87.5229 39.1327C89.4237 40.857 89.5631 43.7942 87.8388 45.6996L56.1891 80.5561C55.7643 81.0244 55.2485 81.4011 54.6731 81.6632C54.0978 81.9253 53.475 82.0673 52.8429 82.0805C52.8103 82.076 52.7824 82.076 52.7498 82.076Z"
                          fill="white"
                        />
                      </G>
                    </G>
                    <Defs>
                      <ClipPath id="clip0_1_5409">
                        <Rect width={120} height={120} fill="white" />
                      </ClipPath>
                    </Defs>
                  </Svg>
                
    <Text style={{fontSize:24,fontWeight:700,color:'#005A7B'}}>OTP Validation Success</Text>
       
   <Text style={{fontSize:16,lineHeight :22.4,
    fontWeight :500}}>Market page with sellers/buyers is getting ready...</Text>
       
        </View></SafeAreaView>
    )}  
const styles=StyleSheet.create({
 
        home:{
            alignItems:'center',
            padding:25,
            rowGap:10,
            height:'100%',
            justifyContent:'center',
        
    }
        },)
    
export default OtpSuccess;