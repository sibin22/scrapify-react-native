import { TouchableOpacity,View,Text,StyleSheet } from "react-native";


export const PrevNxtButton=({titlePrev,titleNxt,onPressPrev,onPressNxt})=>{
  return ( 
      <View style={{width:'100%',flexDirection:"row",gap:10,justifyContent:"center"}}>
      
        <TouchableOpacity onPress={onPressPrev}
          style={[styles.btnStyle,{
              flex:1,
              backgroundColor: 'white',
              borderColor: '#005A7B',
              borderWidth: 2,  
          }]}>

          <View>
              <Text style={{
                  fontWeight: 'bold',
                  color: '#005A7B', fontSize: 20
              }}>{titlePrev}</Text>

          </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={onPressNxt}
          style={[styles.btnStyle,
              {backgroundColor: '#005A7B',flex:1,}]}>
              <View>
                  <Text style={{
                      fontWeight: 'bold',
                      color: 'white', fontSize: 20
                  }}>{titleNxt}</Text>

              </View>
          </TouchableOpacity>
          </View> 
    )
}

export const SingleBtn=({singleBtnTitle,onPress})=>{
    return(
        <View style={{width:'100%',flexDirection:"row",justifyContent:"center"}}>

        <TouchableOpacity onPress={onPress}
        style={[styles.btnStyle,{flex:1,backgroundColor: '#005A7B'}]}>
       
            <View>
            <Text style={{fontWeight:'bold',
             color:'white',fontSize:20}}>{singleBtnTitle}</Text>
            </View>
        </TouchableOpacity>
        </View>
        )}




const styles=StyleSheet.create({
    btnStyle:{
        padding:15,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

