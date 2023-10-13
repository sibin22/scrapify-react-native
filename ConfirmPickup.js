
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Modal, ScrollView} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import Picker from 'react-native-picker-select';
import Svg,{Path,G} from 'react-native-svg';
import Header from './Header';
import HeaderNav from './HeaderNav';
import { SingleBtn } from './Pages/Reuseable/Buttons';

const ConfirmPickup=()=>{
    const naviagtion=useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [selectedValue, setSelectedValue] = useState('option1');
    const [EditModal,setEditModal] = useState(false)
    const [optionValue, setOptionValue] = useState(false)

const onEdit=()=>{
    return setEditModal(true)
}
const update=()=>{
    return naviagtion.navigate('ProductSelect')
}
const closeModal=()=>{
    return setEditModal(false)
}
const toggleOption=()=>{
    return setOptionValue(!optionValue)
}

    return(
        <View>
            <Header/>
            <View style={{ padding: 15 }}>
            <View style={{paddingBottom:10}} >
                <Text style={{ paddingVertical: 10, fontSize: 18, fontWeight: 'bold', color: 'black' }}>
                    Confirm your pickup location</Text>
                <TextInput
                    style={styles.input}
                    value=""
                    placeholder='Enter your location' />
            </View>
            <View style={{ backgroundColor: 'gray',width: '100%', height: 220, borderRadius: 12 }}>
            </View>
          
            <View style={{  padding: 10,marginTop: 5, borderRadius: 12 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Current Location</Text>
                    <Text onPress={onEdit} style={{ fontSize: 18, fontWeight: 'bold', color: '#005A7B' }}>Edit</Text>
                </View>
                <View><Text style={{ fontSize: 18, color: 'black', lineHeight: 30 ,paddingRight:30}}>120, Avenue Lane,
                    Subramaniapuram Street, Kolathur,
                    Chennai - 600 032</Text></View>
            </View>
            <View style={{marginTop:40}} >
           <SingleBtn singleBtnTitle="Confirm" onPress={update}/>
           </View>
        </View>
       
{EditModal &&  (<View>
         <Modal
       animationType="slide"
       transparent={false}
        // visible={cardVisible}
        // onRequestClose={onClose}
     >
<ScrollView> 
<View>
    <View style={{flexDirection:'row',justifyContent:'flex-start',
    backgroundColor:'#02C784',paddingVertical:20,paddingHorizontal:20}}>
   <Text onPress={closeModal}>back</Text> 
   <Text style={{fontSize:20,fontWeight:'bold',color:'white',marginLeft:'25%'}}>Edit Address</Text>
   </View>

   <View style={{height:220,backgroundColor:'lightgrey'}}></View>
   <View style={{padding:10}}>
    <View style={{flexDirection:'row'}}>

   <CheckBox
       disabled={false}
       value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
    <Text style={{color:'black',lineHeight:30}}>Location Selected on Map </Text>
    </View>


    <View style={{ paddingVertical: 20 }}>
                <Text style={{ paddingVertical: 10, fontSize: 18, }}>
                 Address 1</Text>
                <TextInput
                    style={styles.input}
                     value=""
                     placeholder='Enter your location' />
             </View>
             <View style={{ }}>
                 <Text style={{ paddingVertical: 10, fontSize: 18, }}>
                  Address 2</Text>
                 <TextInput
                     style={styles.input}
                     value=""
                     placeholder='Enter your location' />
             </View>
             <View style={{ paddingVertical: 20 }}>
                 <Text style={{ paddingVertical: 10, fontSize: 18, }}>
                  City</Text>
                 <TextInput
                     style={styles.input}
                     value=""
                     placeholder='Enter your location' />
             </View>
             <View style={{ paddingVertical: 20 }}>
                 <Text style={{ paddingVertical: 10, fontSize: 18, }}>
                  State</Text>
                 <TextInput
                     style={styles.input}
                     value=""
                     placeholder='Enter your location' />
             </View>
             <View style={{ paddingVertical: 20 }}>
                 <Text style={{ paddingVertical: 10, fontSize: 18, }}>
                  Pincode</Text>
                 <TextInput
                     style={styles.input}
                     value=""
                     placeholder='Enter your location' />
             </View>
             <View style={{ paddingVertical: 20 }}>
                 <Text style={{ paddingVertical: 10, fontSize: 18, }}>
                  Land mark</Text>
                 <TextInput
                     style={styles.input}
                     value=""
                     placeholder='Enter your location' />
             </View>
    </View>
 </View>
 </ScrollView>

 <View style={{padding:20}}>
    <SingleBtn singleBtnTitle="Update" onPress={closeModal}/>
             </View>

      </Modal>
     </View>)}
</View>)}


 const styles = StyleSheet.create({
    input: {
       fontSize:20,
       height: 50,
       borderColor: 'gray',
       borderWidth: 1,
       borderRadius:8,
       paddingHorizontal: 10,
     }})

export default ConfirmPickup;