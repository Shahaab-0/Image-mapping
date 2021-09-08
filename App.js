// 1. Developer Name(Who created the file) : Shahaab sabraiwala
// 2. Developer Email ID(Who created the file) : shahaab@dotminds.in
// 3. Component Description : This component for Restaunt Details
// 4. Date Created: 11th august 2021
// 5. Date Modified :
// 6. Version number - 1.0.0
// 7. Previous version developer name and Email ID :
// 8. Previous version description :
// 9. Current version developer name and Email ID :
// 10. Current version description :
// */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const width = Dimensions.get('window').width*2;
const aspectRatio = 627/660
const adjustedWidth = width*20/100
const height = width/aspectRatio
const adjustedHeight = height*6.5/100
// const adjustedWidth = screenWidth/aspectRatio
// const adjustedHeight = screenHeight/aspectRatio
const adjustedHeight1 = height*28.63/100
const adjustedWidth1 = width*24.73/100
const adjustedHeight3 = height*78.48/100
const adjustedWidth3 = width*88.5/100
const adjustedHeight4 = height*92.5757/100
const adjustedWidth4 = width*13.55/100

// top : 132(20%), left : 41(6.5%)

class App extends Component {
  DATA = [{id: '1'}];
  render() {
    return (
      <View  >
        <ScrollView showsHorizontalScrollIndicator = {false}>
        <ScrollView showsHorizontalScrollIndicator = {false} contentContainerStyle = {{height : height, width : width}}  horizontal>
          <ImageBackground
            style={{width : '100%'}}
            resizeMode = 'contain'
            source={require('./images/map.jpg')}>
            <View >
              <View style = {{top : adjustedWidth - 10, left: adjustedHeight -10, position: 'absolute'}}>
              <TouchableOpacity>
               <View style = {{padding  : 10, backgroundColor : 'green'}} />
              </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{top: adjustedHeight1 - 10, left: adjustedWidth1 -10, position: 'absolute'}}>
               <View style = {{padding  : 10, backgroundColor : 'red'}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{top: adjustedHeight3 - 10, left: adjustedWidth3 -10, position: 'absolute'}}>
                 <View style = {{padding  : 10 , backgroundColor : 'red'}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{top: adjustedHeight4 - 10, left: adjustedWidth4 -10, position: 'absolute'}}>
                <View style = {{padding  : 10, backgroundColor : 'red'}} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default App;

{
  /* <ScrollView horizontal>
          <ImageBackground
            resizeMode="contain"
            style={{height: '96%', width: 660}}
            source={require('./images/map.jpg')}>
            <TouchableOpacity
              style={{top: 132, left: 42, position: 'absolute'}}>
              <Text>hello</Text>
            </TouchableOpacity>
            <Text style={{position: 'absolute', top: 189, left: 155}}>
              hello
            </Text>
            <Text style={{position: 'absolute', top: 248, left: 101.4}}>
              hello
            </Text>
            <Text
              style={{position: 'absolute', marginTop: 518, marginLeft: 555}}>
              hello
            </Text>
            <Text
              style={{position: 'absolute', marginTop: 611, marginLeft: 85}}>
              hello
            </Text>
          </ImageBackground>
        </ScrollView> */
}

// import React, {useState, useRef, useEffect} from 'react';
// import {View, Image, StyleSheet, Dimensions, Animated} from 'react-native';
// import Colors from '../constants/color';
// import Header from '../components/Header/header';
// import Pdf from 'react-native-pdf';
// import {
//   PinchGestureHandler,
//   State,
//   PanGestureHandler,
// } from 'react-native-gesture-handler';
// import BodySpinner from '../components/BodySpinner';
// const ViewRecord = (props) => {
//   const {data} = props.route.params;
//   const {file_path, file_type} = data;
//   const [loading, setloading] = useState(false);
//   const pinch = useRef();
//   const scale = new Animated.Value(1);

//   const handlePinch = Animated.event([{nativeEvent: {scale: scale}}], {
//     useNativeDriver: true,
//   });
//   return (
//     <View style={{flex: 1, backgroundColor: Colors.primary}}>
//       <Header title="Detail" {...props} />
//       {file_type == 'pdf' ? (
//         <Pdf
//           source={{uri: file_path}}
//           onError={(error) => {}}
//           style={styles.pdf}
//         />
//       ) : (
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginVertical: 40,
//           }}>
//          {loading &&  <BodySpinner />}
//           <PinchGestureHandler
//             ref={pinch}
//             onGestureEvent={handlePinch}
//             onHandlerStateChange={(e) => {
//               if (e.nativeEvent.oldState == State.ACTIVE) {
//                 Animated.timing(scale, {
//                   toValue: 1,
//                   useNativeDriver: true,
//                 }).start();
//               }
//             }}>
//             <Animated.Image
//               source={{uri: file_path}}
//               style={{
//                 height: undefined,
//                 width: undefined,
//                 aspectRatio: 0.8,
//                 flex: 0.7,
//                 transform: [{scale}],
//               }}
//               resizeMode="contain"
//               onLoadStart={() => {
//                 setloading(true);
//               }}
//               onLoadEnd={() => {
//                 setloading(false);
//               }}
//             />
//           </PinchGestureHandler>
//         </View>
//       )}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   pdf: {
//     flex: 1,
//     marginHorizontal: 15,
//     marginVertical: 40,
//   },
// });
// export default ViewRecord;
