import { View,Image,Text } from "react-native"

export default Reward=()=>{
    return(
<View style={{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:100
}}>
    <View style={{width:150,height:170}}>
    <Image style={{  width: '100%', 
        height: '100%',}} source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/ebdb/8e64/462feaf83885cb0185f66339c35ec2de?Expires=1696809600&Signature=VvwGXbjzlmoEKbf6YDrnLWm30U-BFf3iB4OIvE69blW-Q7pKpQRtyToe3~-5pOSlUXYbM589rARhcZNlg74JjILuAsIUju8P5TT~A1XJucT2jwB5rHxiyvJL4kgp5RnpqA8PtuNJTG4xgCeDOZM1QyDF8owK9H2InFAqXZ0ymsivmoDu8GRwL8YOT61JER~styUpWjs8lTAkmmmHSo8sQPUuKkdHBb4nMAH1DgyoFwETZnkIumC5fiqzTLzYhlnNF14WdXnKLmZYCqAoZnhGlYuigsIHFO7S53RYlyU9-hZFifmi62~mTivs5QIScgmGlbHVA4-c0DIjbAzArqmWTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                }}/>
    </View>
         <Text style={{fontWeight:'bold',paddingVertical:5,fontSize:20}}>Launching soon</Text>

</View>
    )
}