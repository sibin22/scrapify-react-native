import {View,Image,StyleSheet, TextInput,Text, ScrollView} from 'react-native'
import{PrevNxtButton,SingleBtn} from './Pages/Reuseable/Buttons'


export default Profile=()=>{
   const log=()=>{
    console.log("worked")
   }

   const log1=()=>{
    console.log("worked")
   }
    return(
        <><ScrollView>
            <View style={{ flex: 1, padding: 20 }}>
                <View style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                    <View style={{ width: 150, height: 150, backgroundColor: 'pink', justifyContent: 'Center' }}>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 18, paddingTop: 30, paddingBottom: 10 }}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value=""
                        placeholder='Name' /></View>

                <View>
                    <Text style={{ fontSize: 18, paddingTop: 30, paddingBottom: 10 }}>Business Type</Text>
                    <TextInput
                        style={styles.input}
                        value=""
                        placeholder='Business Type' /></View>

                <View>
                    <Text style={{ fontSize: 18, paddingTop: 30, paddingBottom: 10 }}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value=""
                        placeholder='Email' /></View>

                <View>
                    <Text style={{ fontSize: 18, paddingTop: 30, paddingBottom: 10 }}>Phone</Text>
                    <TextInput
                        style={styles.input}
                        value=""
                        placeholder='Phone' /></View>

                <View>
                    <Text style={{ fontSize: 18, paddingTop: 30, paddingBottom: 10 }}>Pickup Location</Text>
                    <View style={{ backgroundColor: 'gray', height: 170, width: '100%' }}>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '75%' }}><Text style={{ fontSize: 18, color: 'black' }}>120, Avenue Lane,
                            Subramaniapuram Street, Kolathur,
                            Chennai - 600 032</Text></View>
                        <View>
                            <Text style={{ fontSize: 18, color: 'black' }}>Edit</Text>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
        <View >
                {/* <PrevNxtButton titlePrev="Prev" titleNxt="Next" onPressPrev={log} onPressNxt={log1} /> */}
               <SingleBtn singleBtnTitle="Edit" onPress={log1}/>
            </View></>
        
    )
}

const styles=StyleSheet.create({
image:{
    width:'100%',height:'100%'
},
input: {
    fontSize:20,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:8,
    paddingHorizontal: 10,
  },
   
} )