import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import Svg ,{G,Circle,Defs,RadialGradient,Stop,Path,Mask,Rect} from 'react-native-svg'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Reward from './Reward';


const Tab = createBottomTabNavigator();


function SettingsScreen(){
    console.log("settings")
}
function Add(){
    console.log("screen")
}
function A(){
    console.log("screen")
}
function S(){
    console.log("screen")
}

export default function BottomNavbar() {
  return (
    
       
    <Tab.Navigator   screenOptions={({route}) => ({
            tabBarLabelStyle: {
                  fontSize: 12, // Customize the font size
                  fontWeight: 'bold', // Customize the font weight
                  color: '#005A7B',
                  paddingBottom:5
                 // Customize the text color
                },
          tabBarStyle: {
            justifyContent:'flex-end',
            alignItems:'center',
            display:'flex',
           // backgroundColor: '#02C784',
            backgroundColor: 'white',
            height:70,
            marginBottom:0,
                  
          },
          
          
         
        })}>
      <Tab.Screen  name="Home" component={Home} options={{
        headerShown:false,
            tabBarIcon: ({focused}) => (
                <View
                style={styles.tapIcon}>   
                  <Svg
    width={28}
    height={32}
    viewBox="0 0 28 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <G id="Group">
      <G id="Union">
        <Mask
          id="path-1-outside-1_142_5517"
          maskUnits="userSpaceOnUse"
          x={-0.00907898}
          y={0.198486}
          width={28}
          height={31}
          fill="black"
        >
          <Rect
            fill="white"
            x={-0.00907898}
            y={0.198486}
            width={28}
            height={31}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.990921 27.4507C0.990921 29.3232 2.5185 30.8015 4.34174 30.8015H23.6583C25.4815 30.8015 27.0091 29.3232 27.0091 27.4014V12.4706C27.0091 11.485 26.5656 10.5488 25.7772 9.90816L16.1189 1.9746C14.887 0.939783 13.113 0.939783 11.8811 1.9746L2.22284 9.95744C1.43441 10.598 0.990921 11.5343 0.990921 12.5198V27.4507ZM13.113 3.50218C13.3594 3.30507 13.7043 3.20652 14 3.20652C14.2957 3.20652 14.6406 3.30507 14.887 3.50218L24.5452 11.485C24.8409 11.7314 25.038 12.1256 25.038 12.5198V27.4507C25.038 28.2391 24.3974 28.8305 23.6583 28.8305H4.34174C3.55332 28.8305 2.96199 28.1899 2.96199 27.4507V12.5198C2.96199 12.1256 3.1591 11.7314 3.45476 11.485L13.113 3.50218ZM8.08679 24.8712H19.9132C20.4553 24.8712 20.8988 24.4277 20.8988 23.8857C20.8988 23.3436 20.4553 22.9001 19.9132 22.9001H8.08679C7.54475 22.9001 7.10126 23.3436 7.10126 23.8857C7.10126 24.4277 7.54475 24.8712 8.08679 24.8712Z"
          />
        </Mask>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.990921 27.4507C0.990921 29.3232 2.5185 30.8015 4.34174 30.8015H23.6583C25.4815 30.8015 27.0091 29.3232 27.0091 27.4014V12.4706C27.0091 11.485 26.5656 10.5488 25.7772 9.90816L16.1189 1.9746C14.887 0.939783 13.113 0.939783 11.8811 1.9746L2.22284 9.95744C1.43441 10.598 0.990921 11.5343 0.990921 12.5198V27.4507ZM13.113 3.50218C13.3594 3.30507 13.7043 3.20652 14 3.20652C14.2957 3.20652 14.6406 3.30507 14.887 3.50218L24.5452 11.485C24.8409 11.7314 25.038 12.1256 25.038 12.5198V27.4507C25.038 28.2391 24.3974 28.8305 23.6583 28.8305H4.34174C3.55332 28.8305 2.96199 28.1899 2.96199 27.4507V12.5198C2.96199 12.1256 3.1591 11.7314 3.45476 11.485L13.113 3.50218ZM8.08679 24.8712H19.9132C20.4553 24.8712 20.8988 24.4277 20.8988 23.8857C20.8988 23.3436 20.4553 22.9001 19.9132 22.9001H8.08679C7.54475 22.9001 7.10126 23.3436 7.10126 23.8857C7.10126 24.4277 7.54475 24.8712 8.08679 24.8712Z"
          fill="#005A7B"
        />
        <Path
          d="M25.7772 9.90816L25.6185 10.1013L25.6195 10.1022L25.7772 9.90816ZM16.1189 1.9746L15.9581 2.16603L15.9602 2.16778L16.1189 1.9746ZM11.8811 1.9746L12.0404 2.1673L12.0419 2.16602L11.8811 1.9746ZM2.22284 9.95744L2.3805 10.1515L2.38211 10.1501L2.22284 9.95744ZM13.113 3.50218L12.9568 3.30694L12.9537 3.30948L13.113 3.50218ZM14.887 3.50218L15.0463 3.30945L15.0432 3.30696L14.887 3.50218ZM24.5452 11.485L24.7053 11.293L24.7045 11.2923L24.5452 11.485ZM3.45476 11.485L3.29549 11.2923L3.29472 11.293L3.45476 11.485ZM4.34174 30.5515C2.65417 30.5515 1.24092 29.1828 1.24092 27.4507H0.740921C0.740921 29.4637 2.38283 31.0515 4.34174 31.0515V30.5515ZM23.6583 30.5515H4.34174V31.0515H23.6583V30.5515ZM26.7591 27.4014C26.7591 29.1852 25.3434 30.5515 23.6583 30.5515V31.0515C25.6196 31.0515 27.2591 29.4613 27.2591 27.4014H26.7591ZM26.7591 12.4706V27.4014H27.2591V12.4706H26.7591ZM25.6195 10.1022C26.3502 10.6959 26.7591 11.5612 26.7591 12.4706H27.2591C27.2591 11.4089 26.781 10.4017 25.9348 9.71413L25.6195 10.1022ZM15.9602 2.16778L25.6185 10.1013L25.9358 9.71498L16.2776 1.78141L15.9602 2.16778ZM12.0419 2.16602C13.1808 1.20931 14.8192 1.20931 15.9581 2.16602L16.2797 1.78317C14.9548 0.670258 13.0452 0.670259 11.7203 1.78317L12.0419 2.16602ZM2.38211 10.1501L12.0404 2.16729L11.7218 1.7819L2.06357 9.76474L2.38211 10.1501ZM1.24092 12.5198C1.24092 11.6104 1.64981 10.7451 2.38049 10.1515L2.06519 9.76341C1.21902 10.4509 0.740921 11.4581 0.740921 12.5198H1.24092ZM1.24092 27.4507V12.5198H0.740921V27.4507H1.24092ZM14 2.95652C13.6577 2.95652 13.2549 3.06853 12.9568 3.30696L13.2692 3.69739C13.4639 3.54161 13.7509 3.45652 14 3.45652V2.95652ZM15.0432 3.30696C14.7451 3.06853 14.3423 2.95652 14 2.95652V3.45652C14.249 3.45652 14.5361 3.54161 14.7308 3.69739L15.0432 3.30696ZM24.7045 11.2923L15.0463 3.30948L14.7277 3.69488L24.386 11.6777L24.7045 11.2923ZM25.288 12.5198C25.288 12.0472 25.0546 11.584 24.7053 11.293L24.3852 11.6771C24.6272 11.8788 24.788 12.2041 24.788 12.5198H25.288ZM25.288 27.4507V12.5198H24.788V27.4507H25.288ZM23.6583 29.0805C24.5296 29.0805 25.288 28.383 25.288 27.4507H24.788C24.788 28.0953 24.2652 28.5805 23.6583 28.5805V29.0805ZM4.34174 29.0805H23.6583V28.5805H4.34174V29.0805ZM2.71199 27.4507C2.71199 28.3221 3.40946 29.0805 4.34174 29.0805V28.5805C3.69717 28.5805 3.21199 28.0576 3.21199 27.4507H2.71199ZM2.71199 12.5198V27.4507H3.21199V12.5198H2.71199ZM3.29472 11.293C2.94542 11.584 2.71199 12.0472 2.71199 12.5198H3.21199C3.21199 12.2041 3.37279 11.8788 3.61481 11.6771L3.29472 11.293ZM12.9537 3.30948L3.29549 11.2923L3.61403 11.6777L13.2723 3.69488L12.9537 3.30948ZM19.9132 24.6212H8.08679V25.1212H19.9132V24.6212ZM20.6488 23.8857C20.6488 24.2896 20.3172 24.6212 19.9132 24.6212V25.1212C20.5933 25.1212 21.1488 24.5658 21.1488 23.8857H20.6488ZM19.9132 23.1501C20.3172 23.1501 20.6488 23.4817 20.6488 23.8857H21.1488C21.1488 23.2055 20.5933 22.6501 19.9132 22.6501V23.1501ZM8.08679 23.1501H19.9132V22.6501H8.08679V23.1501ZM7.35126 23.8857C7.35126 23.4817 7.68282 23.1501 8.08679 23.1501V22.6501C7.40668 22.6501 6.85126 23.2055 6.85126 23.8857H7.35126ZM8.08679 24.6212C7.68282 24.6212 7.35126 24.2896 7.35126 23.8857H6.85126C6.85126 24.5658 7.40668 25.1212 8.08679 25.1212V24.6212Z"
          fill="#005A7B"
          mask="url(#path-1-outside-1_142_5517)"
        />
      </G>
    </G>
  </Svg>          
              </View>
            ),
          }}/>
      <Tab.Screen name="Inventory" component={Add} options={{
            tabBarIcon: ({focused}) => (
                <View
                style={styles.tapIcon}>   
                <Svg
    width={29}
    height={30}
    viewBox="0 0 29 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <G id="g3125">
      <G id="Clip path group">
        <Mask
          id="mask0_142_5707"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={29}
          height={30}
        >
          <G id="clipPath3131">
            <Path
              id="path3129"
              d="M0.179413 0.67947H28.8206V29.3206H0.179413V0.67947Z"
              fill="white"
            />
          </G>
        </Mask>
        <G mask="url(#mask0_142_5707)">
          <G id="g3127">
            <G id="g3133">
              <Path
                id="path3135"
                d="M25.7439 7.22434L23.6461 8.90253L21.5484 7.22434L19.4507 8.90253L17.3529 7.22434L15.2552 8.90253L13.1574 7.22434L11.0597 8.90253L8.96196 7.22434L6.72437 9.46193L8.40256 11.5597L6.72437 13.6574L8.40256 15.7552L6.72437 17.8529L8.40256 19.9506L6.72437 22.0484L8.40256 24.1461L6.72437 26.2439L8.96196 28.4814L11.0597 26.8033L13.1574 28.4814L15.2552 26.8033L17.3529 28.4814L19.4507 26.8033L21.5484 28.4814L23.6461 26.8033L25.7439 28.4814L27.9815 26.2439L26.3033 24.1461L27.9815 22.0484L26.3033 19.9506L27.9815 17.8529L26.3033 15.7552L27.9815 13.6574L26.3033 11.5597L27.9815 9.46193L25.7439 7.22434Z"
                stroke="#005A7B"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </G>
            <G id="g3137">
              <Path
                id="path3139"
                d="M21.9524 7.54767L20.5974 5.85392L22.2756 3.75618L20.038 1.51859L17.9403 3.19679L15.8425 1.51859L13.7448 3.19679L11.647 1.51859L9.5493 3.19679L7.45156 1.51859L5.35382 3.19679L3.25608 1.51859L1.01849 3.75618L2.69669 5.85392L1.01849 7.95166L2.69669 10.0494L1.01849 12.1471L2.69669 14.2449L1.01849 16.3426L2.69669 18.4404L1.01849 20.5381L3.25608 22.7757L5.35382 21.0975L7.04762 22.4525"
                stroke="#005A7B"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>          
              </View>
            ),
          }}/>

      <Tab.Screen  style={{color:"red",marginTop:20}} name="Market" component={SettingsScreen}   options={{
            tabBarIcon: ({focused}) => (
                <View
                style={{
                    marginBottom:0,
                    width:60,
                    height: 60,
                    borderRadius:30,
                 
                  }}>  
                 <Svg style={{marginTop:-40,zIndex:2,marginLeft:-23}}
    width={116}
    height={116}
    viewBox="0 0 116 116"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <G id="Ellipse 2292" filter="url(#filter0_d_142_5537)">
      <Circle cx={52} cy={45} r={42} fill="url(#paint0_radial_142_5537)" />
    </G>
    <Defs>
      <RadialGradient
        id="paint0_radial_142_5537"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(24.7898 11.5558) rotate(54.6888) scale(86.3416)"
      >
        <Stop stopColor="#00CC87" />
        <Stop offset={0.34375} stopColor="#18C88C" />
        <Stop offset={0.729167} stopColor="#20D597" />
        <Stop offset={1} stopColor="#11E89F" />
      </RadialGradient>
    </Defs>
  </Svg>
                  <Svg style={{marginTop:-110,marginLeft:-66}}
    width={190}
    height={90}
    viewBox="0 0 110 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 0H0C11.0457 0 20 8.95312 20 20V25C20 44.3301 35.67 60 55 60C74.33 60 90 44.3301 90 25V20C90 8.95508 98.9543 0 110 0H90H20Z"
      fill="white"
    />
  </Svg>    
  <Svg style={{ position:'absolute',marginTop:-20,zIndex:3,marginLeft:13}}
    width={30}
    height={40}
    viewBox="0 0 20 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <G id="Group 1171277376">
      <Path
        id="Ellipse 65"
        d="M18.0195 9.47363C18.0195 14.0758 14.3079 17.7973 9.74102 17.7973C5.17409 17.7973 1.4625 14.0758 1.4625 9.47363C1.4625 4.87143 5.17409 1.15 9.74102 1.15C14.3079 1.15 18.0195 4.87143 18.0195 9.47363Z"
        fill="#02C784"
        stroke="white"
        strokeWidth={2.3}
      />
      <Path
        id="Vector 30"
        d="M10.272 4C8.00739 4 4.3125 5.99458 4.3125 10.1728"
        stroke="white"
        strokeWidth={2}
      />
      <Path
        id="Vector 29"
        d="M10.0011 18.9475V30.0001"
        stroke="white"
        strokeWidth={2.3}
      />
    </G>
  </Svg> 
              </View>
              
            ),
          }}/>
          
          <Tab.Screen name="My Bids" component={A} options={{
            tabBarIcon: ({focused}) => (
                <View
                style={styles.tapIcon}>  
                 <Svg
    width={31}
    height={30}
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
 
  >
    <G id="Group">
      <G id="Layer 35">
        <Path
          id="Vector"
          d="M26.1112 27.7348C25.9013 27.7348 25.6961 27.797 25.5216 27.9136C25.3471 28.0302 25.2111 28.196 25.1308 28.3899C25.0504 28.5838 25.0294 28.7972 25.0704 29.003C25.1113 29.2089 25.2124 29.398 25.3608 29.5464C25.5092 29.6948 25.6983 29.7959 25.9042 29.8368C26.11 29.8778 26.3234 29.8567 26.5173 29.7764C26.7112 29.6961 26.877 29.5601 26.9936 29.3856C27.1102 29.211 27.1724 29.0059 27.1724 28.796C27.1724 28.5145 27.0606 28.2446 26.8616 28.0456C26.6626 27.8466 26.3927 27.7348 26.1112 27.7348ZM21.8663 27.7348C21.6564 27.7348 21.4512 27.797 21.2767 27.9136C21.1022 28.0302 20.9662 28.196 20.8859 28.3899C20.8055 28.5838 20.7845 28.7972 20.8255 29.003C20.8664 29.2089 20.9675 29.398 21.1159 29.5464C21.2643 29.6948 21.4534 29.7959 21.6593 29.8368C21.8651 29.8778 22.0785 29.8567 22.2724 29.7764C22.4663 29.6961 22.6321 29.5601 22.7487 29.3856C22.8653 29.211 22.9275 29.0059 22.9275 28.796C22.9275 28.5145 22.8157 28.2446 22.6167 28.0456C22.4177 27.8466 22.1478 27.7348 21.8663 27.7348ZM30.1757 19.7119C30.0784 19.5679 29.9471 19.45 29.7935 19.3686C29.6399 19.2871 29.4687 19.2447 29.2949 19.245H21.081L20.8051 16.9952C20.7738 16.7363 20.6483 16.498 20.4526 16.3258C20.2569 16.1536 20.0046 16.0594 19.7439 16.0613H17.6214C17.34 16.0613 17.07 16.1731 16.871 16.3721C16.672 16.5711 16.5602 16.8411 16.5602 17.1225C16.5602 17.404 16.672 17.6739 16.871 17.8729C17.07 18.0719 17.34 18.1837 17.6214 18.1837H18.81L19.7439 25.7397C19.7751 25.9985 19.9006 26.2368 20.0963 26.409C20.2921 26.5813 20.5444 26.6754 20.8051 26.6735H27.1724C27.385 26.6737 27.5927 26.6101 27.7686 26.4909C27.9446 26.3717 28.0807 26.2024 28.1594 26.005L30.2818 20.6988C30.3459 20.5381 30.3698 20.3642 30.3513 20.1922C30.3328 20.0202 30.2725 19.8553 30.1757 19.7119ZM26.4508 24.5511H21.739L21.3463 21.3674H27.7137L26.4508 24.5511ZM11.2541 4.38782C9.99473 4.38782 8.76366 4.76126 7.71656 5.46091C6.66946 6.16056 5.85334 7.15501 5.37141 8.31849C4.88948 9.48197 4.76338 10.7622 5.00907 11.9974C5.25475 13.2325 5.86119 14.3671 6.75167 15.2576C7.64216 16.148 8.77672 16.7545 10.0119 17.0002C11.247 17.2458 12.5273 17.1198 13.6907 16.6378C14.8542 16.1559 15.8487 15.3398 16.5483 14.2927C17.248 13.2456 17.6214 12.0145 17.6214 10.7552C17.6214 9.06644 16.9506 7.44688 15.7565 6.25277C14.5624 5.05866 12.9428 4.38782 11.2541 4.38782ZM11.2541 15.0001C10.4145 15.0001 9.5938 14.7511 8.89573 14.2847C8.19766 13.8182 7.65358 13.1553 7.33229 12.3796C7.01101 11.604 6.92694 10.7505 7.09073 9.92703C7.25453 9.1036 7.65881 8.34723 8.25247 7.75357C8.84613 7.15991 9.6025 6.75562 10.4259 6.59183C11.2494 6.42804 12.1029 6.5121 12.8785 6.83339C13.6542 7.15468 14.3171 7.69876 14.7836 8.39683C15.25 9.09489 15.499 9.9156 15.499 10.7552C15.499 11.881 15.0517 12.9607 14.2557 13.7568C13.4596 14.5528 12.3799 15.0001 11.2541 15.0001Z"
          fill="#005A7B"
        />
        <Path
          id="Vector_2"
          d="M15.691 22.4286C14.4057 24.2503 12.9175 25.9201 11.2551 27.4057C9.13266 25.538 2.76531 19.1282 2.76531 10.7551C2.76531 8.5035 3.65977 6.34408 5.25191 4.75194C6.84406 3.15979 9.00347 2.26533 11.2551 2.26533C13.5067 2.26533 15.6662 3.15979 17.2583 4.75194C18.8504 6.34408 19.7449 8.5035 19.7449 10.7551C19.7475 11.4152 19.705 12.0747 19.6176 12.729C19.598 12.8684 19.6062 13.0102 19.6415 13.1464C19.6768 13.2826 19.7386 13.4106 19.8233 13.5229C19.9081 13.6353 20.0141 13.7298 20.1354 13.8012C20.2567 13.8725 20.3908 13.9193 20.5302 13.9388C20.8117 13.9782 21.0972 13.9042 21.3241 13.733C21.4365 13.6483 21.531 13.5422 21.6024 13.421C21.6737 13.2997 21.7205 13.1655 21.74 13.0261C21.8327 12.2728 21.8753 11.5141 21.8674 10.7551C21.8674 7.94059 20.7493 5.24132 18.7591 3.25114C16.7689 1.26096 14.0696 0.142883 11.2551 0.142883C8.44056 0.142883 5.7413 1.26096 3.75112 3.25114C1.76093 5.24132 0.64286 7.94059 0.64286 10.7551C0.64286 21.76 10.1939 29.3159 10.6078 29.6343C10.7933 29.7772 11.0209 29.8546 11.2551 29.8546C11.4893 29.8546 11.7169 29.7772 11.9025 29.6343C14.0097 27.8926 15.8698 25.8718 17.4314 23.6278C17.561 23.397 17.5997 23.1262 17.5399 22.8684C17.4801 22.6106 17.3262 22.3844 17.1082 22.2343C16.8903 22.0841 16.6242 22.0208 16.362 22.0568C16.0998 22.0927 15.8605 22.2253 15.691 22.4286Z"
          fill="#005A7B"
        />
      </G>
    </G>
  </Svg>          
              </View>
            ),
          }}/>
          <Tab.Screen name="Rewards" component={Reward} options={{
            headerShown:false,
            tabBarIcon: ({focused}) => (
                <View
                style={styles.tapIcon}> 
                 <Svg
    width={25}
    height={32}
    viewBox="0 0 25 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  
  >
    <G id="Group 1171277000">
      <G id="Group">
        <G id="Group_2">
          <G id="Vector">
            <Mask
              id="path-1-outside-1_142_5751"
              maskUnits="userSpaceOnUse"
              x={-0.551422}
              y={-0.284607}
              width={26}
              height={32}
              fill="black"
            >
              <Rect
                fill="white"
                x={-0.551422}
                y={-0.284607}
                width={26}
                height={32}
              />
              <Path d="M12.5 0.715393C5.85484 0.715393 0.448578 6.12159 0.448578 12.7668C0.448578 16.9082 2.54856 20.5681 5.73943 22.7384V30.403C5.73943 30.7023 5.89114 30.9811 6.14244 31.1435C6.39363 31.306 6.71019 31.3298 6.9831 31.2071L12.5 28.7246L18.0169 31.2072C18.1324 31.2591 18.2557 31.2849 18.3787 31.2849C18.5461 31.2849 18.7127 31.2372 18.8576 31.1436C19.1088 30.9811 19.2606 30.7023 19.2606 30.4031V22.7384C22.4514 20.5682 24.5514 16.9083 24.5514 12.7669C24.5514 6.12159 19.1452 0.715393 12.5 0.715393ZM17.4969 29.0393L12.8618 26.9536C12.7468 26.9017 12.6234 26.8758 12.5 26.8758C12.3766 26.8758 12.2532 26.9017 12.1382 26.9535L7.50308 29.0393V23.7353C7.94628 23.9373 8.40118 24.111 8.86468 24.2574C8.89095 24.2658 8.91716 24.2743 8.94355 24.2824C9.00272 24.3006 9.06207 24.3182 9.12148 24.3355C9.16548 24.3484 9.20948 24.3611 9.2536 24.3735C9.30155 24.3869 9.34967 24.3999 9.3978 24.4127C9.45392 24.4276 9.51016 24.4423 9.56658 24.4565C9.60647 24.4665 9.64641 24.4762 9.68642 24.4857C9.75132 24.5013 9.8164 24.5164 9.88171 24.5309C9.91557 24.5384 9.94948 24.5459 9.98339 24.5531C10.0549 24.5684 10.1267 24.5828 10.1988 24.5969C10.2281 24.6025 10.2574 24.6083 10.2868 24.6138C10.3631 24.628 10.4397 24.6413 10.5164 24.6541C10.5428 24.6585 10.5691 24.6631 10.5955 24.6672C10.6747 24.6799 10.7543 24.6915 10.8341 24.7026C10.8589 24.706 10.8835 24.7097 10.9082 24.713C10.989 24.7237 11.0702 24.7333 11.1514 24.7424C11.1756 24.745 11.1997 24.7481 11.224 24.7507C11.305 24.7593 11.3863 24.7667 11.4678 24.7736C11.4925 24.7757 11.5171 24.7782 11.5419 24.7801C11.6222 24.7865 11.7029 24.7916 11.7836 24.7963C11.8096 24.7979 11.8354 24.7999 11.8614 24.8013C11.943 24.8056 12.0249 24.8085 12.107 24.8111C12.1317 24.812 12.1562 24.8133 12.1809 24.8139C12.287 24.8167 12.3934 24.8182 12.5001 24.8182C12.6068 24.8182 12.7132 24.8167 12.8192 24.8139C12.844 24.8133 12.8685 24.812 12.8932 24.8111C12.9753 24.8085 13.0572 24.8055 13.1388 24.8013C13.1647 24.7999 13.1906 24.7979 13.2165 24.7963C13.2973 24.7916 13.378 24.7865 13.4583 24.7801C13.4831 24.7782 13.5077 24.7757 13.5324 24.7736C13.6139 24.7667 13.6952 24.7593 13.7762 24.7507C13.8005 24.7481 13.8246 24.7451 13.8488 24.7424C13.9301 24.7332 14.0112 24.7237 14.0919 24.713C14.1167 24.7097 14.1413 24.7061 14.166 24.7026C14.2458 24.6915 14.3254 24.6799 14.4047 24.6672C14.4311 24.663 14.4573 24.6585 14.4837 24.6541C14.5605 24.6413 14.6371 24.628 14.7134 24.6138C14.7428 24.6083 14.7721 24.6026 14.8014 24.5969C14.8734 24.5829 14.9452 24.5683 15.0168 24.5531C15.0508 24.5459 15.0846 24.5384 15.1185 24.5309C15.1838 24.5164 15.2489 24.5013 15.3138 24.4857C15.3537 24.4762 15.3937 24.4664 15.4336 24.4565C15.49 24.4423 15.5462 24.4277 15.6024 24.4127C15.6505 24.3998 15.6986 24.387 15.7466 24.3735C15.7907 24.3611 15.8348 24.3484 15.8787 24.3355C15.9381 24.3181 15.9975 24.3006 16.0566 24.2824C16.083 24.2743 16.1092 24.2657 16.1355 24.2574C16.599 24.111 17.0539 23.9374 17.4971 23.7354V29.0393H17.4969ZM15.8572 22.4916C15.822 22.5037 15.7869 22.5159 15.7516 22.5277C15.698 22.5456 15.6441 22.5632 15.5901 22.5802C15.5272 22.6 15.4642 22.619 15.4009 22.6375C15.3563 22.6507 15.3117 22.6637 15.2668 22.6763C15.1832 22.6996 15.0992 22.722 15.015 22.7432C14.9836 22.7511 14.9521 22.7586 14.9206 22.7663C14.8382 22.7862 14.7553 22.8052 14.6723 22.8231C14.6514 22.8276 14.6307 22.8324 14.6098 22.8367C14.5027 22.8591 14.3953 22.8799 14.2874 22.8989C14.2764 22.9008 14.2653 22.9025 14.2543 22.9044C14.1571 22.9212 14.0596 22.9364 13.9619 22.9503C13.9399 22.9535 13.9178 22.9566 13.8957 22.9597C13.7915 22.9738 13.6871 22.9868 13.5824 22.9978C13.5785 22.9982 13.5745 22.9988 13.5706 22.9992C13.461 23.0106 13.3509 23.02 13.2408 23.0278C13.2169 23.0295 13.1929 23.0308 13.1689 23.0324C13.0833 23.0379 12.9976 23.0423 12.9117 23.0457C12.8825 23.0469 12.8533 23.0481 12.8241 23.0491C12.7162 23.0524 12.6082 23.0546 12.5 23.0546C12.3918 23.0546 12.2838 23.0524 12.1759 23.049C12.1467 23.0481 12.1175 23.0468 12.0883 23.0456C12.0024 23.0422 11.9167 23.0378 11.8311 23.0323C11.8071 23.0307 11.7832 23.0294 11.7592 23.0277C11.6491 23.0198 11.5391 23.0104 11.4294 22.9991C11.4255 22.9986 11.4215 22.9981 11.4176 22.9977C11.3129 22.9867 11.2085 22.9737 11.1043 22.9595C11.0823 22.9565 11.0603 22.9534 11.0382 22.9502C10.9404 22.9362 10.8429 22.9211 10.7457 22.9043C10.7347 22.9025 10.7237 22.9007 10.7126 22.8988C10.6048 22.8798 10.4972 22.8589 10.3902 22.8366C10.3693 22.8322 10.3486 22.8274 10.3277 22.823C10.2447 22.8051 10.1619 22.7861 10.0794 22.7661C10.0479 22.7585 10.0163 22.751 9.985 22.743C9.90076 22.7219 9.81681 22.6995 9.73316 22.6762C9.68833 22.6636 9.64367 22.6506 9.59906 22.6374C9.5359 22.6188 9.47279 22.5999 9.40986 22.5801C9.35582 22.563 9.30203 22.5455 9.24835 22.5276C9.21301 22.5158 9.17784 22.5036 9.14273 22.4915C5.11353 21.0967 2.21217 17.2644 2.21217 12.7668C2.21217 7.09415 6.82727 2.47899 12.5 2.47899C18.1727 2.47899 22.7878 7.09409 22.7878 12.7668C22.7878 17.2644 19.8864 21.0967 15.8572 22.4916Z" />
            </Mask>
            <Path
              d="M12.5 0.715393C5.85484 0.715393 0.448578 6.12159 0.448578 12.7668C0.448578 16.9082 2.54856 20.5681 5.73943 22.7384V30.403C5.73943 30.7023 5.89114 30.9811 6.14244 31.1435C6.39363 31.306 6.71019 31.3298 6.9831 31.2071L12.5 28.7246L18.0169 31.2072C18.1324 31.2591 18.2557 31.2849 18.3787 31.2849C18.5461 31.2849 18.7127 31.2372 18.8576 31.1436C19.1088 30.9811 19.2606 30.7023 19.2606 30.4031V22.7384C22.4514 20.5682 24.5514 16.9083 24.5514 12.7669C24.5514 6.12159 19.1452 0.715393 12.5 0.715393ZM17.4969 29.0393L12.8618 26.9536C12.7468 26.9017 12.6234 26.8758 12.5 26.8758C12.3766 26.8758 12.2532 26.9017 12.1382 26.9535L7.50308 29.0393V23.7353C7.94628 23.9373 8.40118 24.111 8.86468 24.2574C8.89095 24.2658 8.91716 24.2743 8.94355 24.2824C9.00272 24.3006 9.06207 24.3182 9.12148 24.3355C9.16548 24.3484 9.20948 24.3611 9.2536 24.3735C9.30155 24.3869 9.34967 24.3999 9.3978 24.4127C9.45392 24.4276 9.51016 24.4423 9.56658 24.4565C9.60647 24.4665 9.64641 24.4762 9.68642 24.4857C9.75132 24.5013 9.8164 24.5164 9.88171 24.5309C9.91557 24.5384 9.94948 24.5459 9.98339 24.5531C10.0549 24.5684 10.1267 24.5828 10.1988 24.5969C10.2281 24.6025 10.2574 24.6083 10.2868 24.6138C10.3631 24.628 10.4397 24.6413 10.5164 24.6541C10.5428 24.6585 10.5691 24.6631 10.5955 24.6672C10.6747 24.6799 10.7543 24.6915 10.8341 24.7026C10.8589 24.706 10.8835 24.7097 10.9082 24.713C10.989 24.7237 11.0702 24.7333 11.1514 24.7424C11.1756 24.745 11.1997 24.7481 11.224 24.7507C11.305 24.7593 11.3863 24.7667 11.4678 24.7736C11.4925 24.7757 11.5171 24.7782 11.5419 24.7801C11.6222 24.7865 11.7029 24.7916 11.7836 24.7963C11.8096 24.7979 11.8354 24.7999 11.8614 24.8013C11.943 24.8056 12.0249 24.8085 12.107 24.8111C12.1317 24.812 12.1562 24.8133 12.1809 24.8139C12.287 24.8167 12.3934 24.8182 12.5001 24.8182C12.6068 24.8182 12.7132 24.8167 12.8192 24.8139C12.844 24.8133 12.8685 24.812 12.8932 24.8111C12.9753 24.8085 13.0572 24.8055 13.1388 24.8013C13.1647 24.7999 13.1906 24.7979 13.2165 24.7963C13.2973 24.7916 13.378 24.7865 13.4583 24.7801C13.4831 24.7782 13.5077 24.7757 13.5324 24.7736C13.6139 24.7667 13.6952 24.7593 13.7762 24.7507C13.8005 24.7481 13.8246 24.7451 13.8488 24.7424C13.9301 24.7332 14.0112 24.7237 14.0919 24.713C14.1167 24.7097 14.1413 24.7061 14.166 24.7026C14.2458 24.6915 14.3254 24.6799 14.4047 24.6672C14.4311 24.663 14.4573 24.6585 14.4837 24.6541C14.5605 24.6413 14.6371 24.628 14.7134 24.6138C14.7428 24.6083 14.7721 24.6026 14.8014 24.5969C14.8734 24.5829 14.9452 24.5683 15.0168 24.5531C15.0508 24.5459 15.0846 24.5384 15.1185 24.5309C15.1838 24.5164 15.2489 24.5013 15.3138 24.4857C15.3537 24.4762 15.3937 24.4664 15.4336 24.4565C15.49 24.4423 15.5462 24.4277 15.6024 24.4127C15.6505 24.3998 15.6986 24.387 15.7466 24.3735C15.7907 24.3611 15.8348 24.3484 15.8787 24.3355C15.9381 24.3181 15.9975 24.3006 16.0566 24.2824C16.083 24.2743 16.1092 24.2657 16.1355 24.2574C16.599 24.111 17.0539 23.9374 17.4971 23.7354V29.0393H17.4969ZM15.8572 22.4916C15.822 22.5037 15.7869 22.5159 15.7516 22.5277C15.698 22.5456 15.6441 22.5632 15.5901 22.5802C15.5272 22.6 15.4642 22.619 15.4009 22.6375C15.3563 22.6507 15.3117 22.6637 15.2668 22.6763C15.1832 22.6996 15.0992 22.722 15.015 22.7432C14.9836 22.7511 14.9521 22.7586 14.9206 22.7663C14.8382 22.7862 14.7553 22.8052 14.6723 22.8231C14.6514 22.8276 14.6307 22.8324 14.6098 22.8367C14.5027 22.8591 14.3953 22.8799 14.2874 22.8989C14.2764 22.9008 14.2653 22.9025 14.2543 22.9044C14.1571 22.9212 14.0596 22.9364 13.9619 22.9503C13.9399 22.9535 13.9178 22.9566 13.8957 22.9597C13.7915 22.9738 13.6871 22.9868 13.5824 22.9978C13.5785 22.9982 13.5745 22.9988 13.5706 22.9992C13.461 23.0106 13.3509 23.02 13.2408 23.0278C13.2169 23.0295 13.1929 23.0308 13.1689 23.0324C13.0833 23.0379 12.9976 23.0423 12.9117 23.0457C12.8825 23.0469 12.8533 23.0481 12.8241 23.0491C12.7162 23.0524 12.6082 23.0546 12.5 23.0546C12.3918 23.0546 12.2838 23.0524 12.1759 23.049C12.1467 23.0481 12.1175 23.0468 12.0883 23.0456C12.0024 23.0422 11.9167 23.0378 11.8311 23.0323C11.8071 23.0307 11.7832 23.0294 11.7592 23.0277C11.6491 23.0198 11.5391 23.0104 11.4294 22.9991C11.4255 22.9986 11.4215 22.9981 11.4176 22.9977C11.3129 22.9867 11.2085 22.9737 11.1043 22.9595C11.0823 22.9565 11.0603 22.9534 11.0382 22.9502C10.9404 22.9362 10.8429 22.9211 10.7457 22.9043C10.7347 22.9025 10.7237 22.9007 10.7126 22.8988C10.6048 22.8798 10.4972 22.8589 10.3902 22.8366C10.3693 22.8322 10.3486 22.8274 10.3277 22.823C10.2447 22.8051 10.1619 22.7861 10.0794 22.7661C10.0479 22.7585 10.0163 22.751 9.985 22.743C9.90076 22.7219 9.81681 22.6995 9.73316 22.6762C9.68833 22.6636 9.64367 22.6506 9.59906 22.6374C9.5359 22.6188 9.47279 22.5999 9.40986 22.5801C9.35582 22.563 9.30203 22.5455 9.24835 22.5276C9.21301 22.5158 9.17784 22.5036 9.14273 22.4915C5.11353 21.0967 2.21217 17.2644 2.21217 12.7668C2.21217 7.09415 6.82727 2.47899 12.5 2.47899C18.1727 2.47899 22.7878 7.09409 22.7878 12.7668C22.7878 17.2644 19.8864 21.0967 15.8572 22.4916Z"
              fill="#005A7B"
            />
            <Path
              d="M12.5 0.715393C5.85484 0.715393 0.448578 6.12159 0.448578 12.7668C0.448578 16.9082 2.54856 20.5681 5.73943 22.7384V30.403C5.73943 30.7023 5.89114 30.9811 6.14244 31.1435C6.39363 31.306 6.71019 31.3298 6.9831 31.2071L12.5 28.7246L18.0169 31.2072C18.1324 31.2591 18.2557 31.2849 18.3787 31.2849C18.5461 31.2849 18.7127 31.2372 18.8576 31.1436C19.1088 30.9811 19.2606 30.7023 19.2606 30.4031V22.7384C22.4514 20.5682 24.5514 16.9083 24.5514 12.7669C24.5514 6.12159 19.1452 0.715393 12.5 0.715393ZM17.4969 29.0393L12.8618 26.9536C12.7468 26.9017 12.6234 26.8758 12.5 26.8758C12.3766 26.8758 12.2532 26.9017 12.1382 26.9535L7.50308 29.0393V23.7353C7.94628 23.9373 8.40118 24.111 8.86468 24.2574C8.89095 24.2658 8.91716 24.2743 8.94355 24.2824C9.00272 24.3006 9.06207 24.3182 9.12148 24.3355C9.16548 24.3484 9.20948 24.3611 9.2536 24.3735C9.30155 24.3869 9.34967 24.3999 9.3978 24.4127C9.45392 24.4276 9.51016 24.4423 9.56658 24.4565C9.60647 24.4665 9.64641 24.4762 9.68642 24.4857C9.75132 24.5013 9.8164 24.5164 9.88171 24.5309C9.91557 24.5384 9.94948 24.5459 9.98339 24.5531C10.0549 24.5684 10.1267 24.5828 10.1988 24.5969C10.2281 24.6025 10.2574 24.6083 10.2868 24.6138C10.3631 24.628 10.4397 24.6413 10.5164 24.6541C10.5428 24.6585 10.5691 24.6631 10.5955 24.6672C10.6747 24.6799 10.7543 24.6915 10.8341 24.7026C10.8589 24.706 10.8835 24.7097 10.9082 24.713C10.989 24.7237 11.0702 24.7333 11.1514 24.7424C11.1756 24.745 11.1997 24.7481 11.224 24.7507C11.305 24.7593 11.3863 24.7667 11.4678 24.7736C11.4925 24.7757 11.5171 24.7782 11.5419 24.7801C11.6222 24.7865 11.7029 24.7916 11.7836 24.7963C11.8096 24.7979 11.8354 24.7999 11.8614 24.8013C11.943 24.8056 12.0249 24.8085 12.107 24.8111C12.1317 24.812 12.1562 24.8133 12.1809 24.8139C12.287 24.8167 12.3934 24.8182 12.5001 24.8182C12.6068 24.8182 12.7132 24.8167 12.8192 24.8139C12.844 24.8133 12.8685 24.812 12.8932 24.8111C12.9753 24.8085 13.0572 24.8055 13.1388 24.8013C13.1647 24.7999 13.1906 24.7979 13.2165 24.7963C13.2973 24.7916 13.378 24.7865 13.4583 24.7801C13.4831 24.7782 13.5077 24.7757 13.5324 24.7736C13.6139 24.7667 13.6952 24.7593 13.7762 24.7507C13.8005 24.7481 13.8246 24.7451 13.8488 24.7424C13.9301 24.7332 14.0112 24.7237 14.0919 24.713C14.1167 24.7097 14.1413 24.7061 14.166 24.7026C14.2458 24.6915 14.3254 24.6799 14.4047 24.6672C14.4311 24.663 14.4573 24.6585 14.4837 24.6541C14.5605 24.6413 14.6371 24.628 14.7134 24.6138C14.7428 24.6083 14.7721 24.6026 14.8014 24.5969C14.8734 24.5829 14.9452 24.5683 15.0168 24.5531C15.0508 24.5459 15.0846 24.5384 15.1185 24.5309C15.1838 24.5164 15.2489 24.5013 15.3138 24.4857C15.3537 24.4762 15.3937 24.4664 15.4336 24.4565C15.49 24.4423 15.5462 24.4277 15.6024 24.4127C15.6505 24.3998 15.6986 24.387 15.7466 24.3735C15.7907 24.3611 15.8348 24.3484 15.8787 24.3355C15.9381 24.3181 15.9975 24.3006 16.0566 24.2824C16.083 24.2743 16.1092 24.2657 16.1355 24.2574C16.599 24.111 17.0539 23.9374 17.4971 23.7354V29.0393H17.4969ZM15.8572 22.4916C15.822 22.5037 15.7869 22.5159 15.7516 22.5277C15.698 22.5456 15.6441 22.5632 15.5901 22.5802C15.5272 22.6 15.4642 22.619 15.4009 22.6375C15.3563 22.6507 15.3117 22.6637 15.2668 22.6763C15.1832 22.6996 15.0992 22.722 15.015 22.7432C14.9836 22.7511 14.9521 22.7586 14.9206 22.7663C14.8382 22.7862 14.7553 22.8052 14.6723 22.8231C14.6514 22.8276 14.6307 22.8324 14.6098 22.8367C14.5027 22.8591 14.3953 22.8799 14.2874 22.8989C14.2764 22.9008 14.2653 22.9025 14.2543 22.9044C14.1571 22.9212 14.0596 22.9364 13.9619 22.9503C13.9399 22.9535 13.9178 22.9566 13.8957 22.9597C13.7915 22.9738 13.6871 22.9868 13.5824 22.9978C13.5785 22.9982 13.5745 22.9988 13.5706 22.9992C13.461 23.0106 13.3509 23.02 13.2408 23.0278C13.2169 23.0295 13.1929 23.0308 13.1689 23.0324C13.0833 23.0379 12.9976 23.0423 12.9117 23.0457C12.8825 23.0469 12.8533 23.0481 12.8241 23.0491C12.7162 23.0524 12.6082 23.0546 12.5 23.0546C12.3918 23.0546 12.2838 23.0524 12.1759 23.049C12.1467 23.0481 12.1175 23.0468 12.0883 23.0456C12.0024 23.0422 11.9167 23.0378 11.8311 23.0323C11.8071 23.0307 11.7832 23.0294 11.7592 23.0277C11.6491 23.0198 11.5391 23.0104 11.4294 22.9991C11.4255 22.9986 11.4215 22.9981 11.4176 22.9977C11.3129 22.9867 11.2085 22.9737 11.1043 22.9595C11.0823 22.9565 11.0603 22.9534 11.0382 22.9502C10.9404 22.9362 10.8429 22.9211 10.7457 22.9043C10.7347 22.9025 10.7237 22.9007 10.7126 22.8988C10.6048 22.8798 10.4972 22.8589 10.3902 22.8366C10.3693 22.8322 10.3486 22.8274 10.3277 22.823C10.2447 22.8051 10.1619 22.7861 10.0794 22.7661C10.0479 22.7585 10.0163 22.751 9.985 22.743C9.90076 22.7219 9.81681 22.6995 9.73316 22.6762C9.68833 22.6636 9.64367 22.6506 9.59906 22.6374C9.5359 22.6188 9.47279 22.5999 9.40986 22.5801C9.35582 22.563 9.30203 22.5455 9.24835 22.5276C9.21301 22.5158 9.17784 22.5036 9.14273 22.4915C5.11353 21.0967 2.21217 17.2644 2.21217 12.7668C2.21217 7.09415 6.82727 2.47899 12.5 2.47899C18.1727 2.47899 22.7878 7.09409 22.7878 12.7668C22.7878 17.2644 19.8864 21.0967 15.8572 22.4916Z"
              stroke="#005A7B"
              strokeWidth={0.5}
              mask="url(#path-1-outside-1_142_5751)"
            />
          </G>
        </G>
      </G>
      <G id="Group_3">
        <G id="Group_4">
          <Path
            id="Vector_2"
            d="M13.3539 5.17905L13.354 5.17907L15.1866 8.11358L18.6442 8.23337C18.9913 8.24537 19.3077 8.4355 19.4813 8.73618C19.6549 9.03687 19.6614 9.40589 19.4982 9.71248L17.8732 12.7668L19.4981 15.8211C19.6614 16.1277 19.6549 16.4968 19.4813 16.7974C19.3076 17.0981 18.9913 17.2883 18.6442 17.3003M13.3539 5.17905L18.6399 17.1753M13.3539 5.17905C13.17 4.88459 12.8473 4.70557 12.5 4.70557C12.1527 4.70557 11.83 4.88459 11.6461 5.17905L11.646 5.17907L9.81348 8.11358L6.35581 8.23337M13.3539 5.17905L6.35581 8.23337M18.6442 17.3003L18.6399 17.1753M18.6442 17.3003L18.6442 17.3003L18.6399 17.1753M18.6442 17.3003L15.1865 17.42M18.6399 17.1753L15.1157 17.2974M15.1865 17.42L15.2217 17.3636L15.1157 17.2974M15.1865 17.42L13.354 20.3546L13.3539 20.3546C13.17 20.649 12.8473 20.8281 12.5 20.8281C12.1527 20.8281 11.83 20.649 11.646 20.3546L11.7521 20.2883M15.1865 17.42L15.12 17.4223L15.1157 17.2974M15.1157 17.2974L11.7521 20.2883M11.7521 20.2883L9.88428 17.2974L6.36013 17.1753M11.7521 20.2883L6.36013 8.3583C6.05617 8.36881 5.77907 8.53533 5.627 8.79869C5.47493 9.06205 5.46926 9.38524 5.61219 9.65374L7.2685 12.7668L5.61219 15.8799C5.46926 16.1484 5.47493 16.4716 5.627 16.7349C5.77907 16.9983 6.05617 17.1648 6.36013 17.1753M11.7521 20.2883L11.646 20.3546L9.81348 17.42L6.35581 17.3003M11.7521 20.2883L7.12691 12.7668M6.36013 17.1753L6.3558 17.3003L6.35581 17.3003M6.36013 17.1753L6.35581 17.3003M6.35581 8.23337C6.35581 8.23337 6.3558 8.23337 6.3558 8.23337C6.00873 8.24537 5.69237 8.43551 5.51875 8.73618C5.34513 9.03687 5.33864 9.40589 5.50185 9.71248L7.12691 12.7668M6.35581 8.23337L7.12691 12.7668M7.12691 12.7668L5.50185 15.8211C5.33864 16.1277 5.34513 16.4968 5.51875 16.7974C5.69237 17.0981 6.00873 17.2883 6.35581 17.3003M10.4186 15.4262H10.4186L8.03679 15.3437L9.15617 13.2397C9.31351 12.9441 9.31351 12.5896 9.15618 12.2939C9.15618 12.2939 9.15618 12.2939 9.15617 12.2939L8.03679 10.19L10.4186 10.1074C10.7532 10.0958 11.0603 9.91851 11.2376 9.63443L12.5 7.61307L13.7624 9.63451C13.9398 9.91858 14.2468 10.0958 14.5814 10.1075L14.5814 10.1075L16.9632 10.19L15.8438 12.294L15.8438 12.294C15.6866 12.5896 15.6865 12.9442 15.8439 13.2398C15.8439 13.2398 15.8439 13.2398 15.8439 13.2398L16.9633 15.3437L14.5815 15.4262C14.2469 15.4377 13.9398 15.615 13.7624 15.8991C13.7624 15.8991 13.7624 15.8991 13.7624 15.8991L12.5 17.9206L11.2376 15.8992C11.0602 15.6151 10.7532 15.4379 10.4186 15.4262Z"
            fill="#005A7B"
            stroke="#005A7B"
            strokeWidth={0.25}
          />
        </G>
      </G>
    </G>
  </Svg>          
              </View>
            ),
          }}/>
    </Tab.Navigator>
   
  );
}

const styles=StyleSheet.create({
tapIcon:{  
    marginTop:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
   
}
});