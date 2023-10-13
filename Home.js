import { Image, View,StyleSheet ,Text, ScrollView} from "react-native"

const Home=()=>{
    return(
    
         <ScrollView>
        <View style={styles.home}>

            <View style={styles.imageView}>
                <Image source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/880e/e197/4e58fceafbf4683b1a044169f14ce741?Expires=1696809600&Signature=cJ16WQVfU8Lc2GDoxx0XXSNo68dzImdIYxQNK2ZABS0l36z-td9UtJ4JRhxePb3fJojWiVLNY3CyXDEsTrjic2xarAFb9Sk7csN4GU5cGHw1U~bB2kird74rA0a-nZHufwT3ERHX5B2YCquTMjwcjJ4178LBP8p-e-GOA-X65d7J6kHcq5L~vBMSEtztpadCiYZCBNJQ-~fSzYldBOVG7v4of67HoyWxhHjCcNwDB-SPK6qZlcE-CV45ll89MY~32eLf-i5kZp0-VbSu3ORhNQe6xmNVzsqtMeva0ZTFgTpdhL2Sxfjem0OyKGH2tFy7zRjxR0SP1iQ9BywzVwIJbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                }}
                    style={styles.image} />
            </View>
            <View style={styles.textView}>
                <Text style={{
                    fontSize: 30,
                    textAlign: 'center',
                    color: '#005A7B', fontSize: 28, fontWeight: 900,
                }}>Building a circular economy</Text>
                <Text style={{ lineHeight: 25, }}>Scrapify Marketplace is a platform that brings together buyers and sellers of scrap materials from all over the world. </Text>
            </View>
            <View style={styles.textView}>
                <Text style={{ color: '#005A7B', fontSize: 25, fontWeight: 900, paddingVertical: 2 }}>Vision</Text>
                <Text style={{ lineHeight: 25, }}>A global leader in managing scraps across multiple countries.</Text>
            </View>
            <View style={styles.textView}>
                <Text style={{ color: '#005A7B', fontSize: 25, fontWeight: 900, paddingVertical: 2 }}>Mission</Text>
                <Text style={{ lineHeight: 25, }}>Collaborative growth partnering with local and international scrap buyers and sellers.</Text>
            </View></View></ScrollView> 
       
       
); };

const styles=StyleSheet.create({
 
    home:{
       backgroundColor:'white',
        alignItems:'center',
        padding:25,
        rowGap:10,
        height:'auto'
    },
    textView:{
            width:'100%',
            justifyContent:'center'
                },
    
    imageView:{
        width: 150, 
        height: 150, 
        backgroundColor: '#F2F6F8',
        borderRadius: 100, 
        overflow: 'hidden',
        padding:25
    },
    image:{
        width: '100%', 
        height: '100%',

    }
})
export default Home;