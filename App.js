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
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height

class App extends Component {
  DATA = [{id: '1'}];
  render() {
    return (
      <View style={{flex: 1, }}>
        <ScrollView contentContainerStyle = {{width : 660, height : screenHeight}}  horizontal>
          <ImageBackground
            style={{width : '100%', height : '95%' }}
            source={require('./images/map.jpg')}>
            <View style={{marginTop: 10}}>
              <TouchableOpacity
                style={{top: 132, left: 41, position: 'absolute'}}>
               <View style = {{padding  : 10, backgroundColor : 'red'}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{top: 189, left: 155.1, position: 'absolute'}}>
               <View style = {{padding  : 10, backgroundColor : 'red'}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{top: 518, left: 555.1, position: 'absolute'}}>
                 <View style = {{padding  : 10, backgroundColor : 'red'}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{top: 611, left: 85.1, position: 'absolute'}}>
                <View style = {{padding  : 10, backgroundColor : 'red'}} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
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
