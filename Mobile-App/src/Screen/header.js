import * as React from 'react'
import { View, Text, Image, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAsyncStorage } from '../Routes/AsynstorageClass';
import styles from './BottomMoreTab/bottom_styles';

export default class HeaderScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            theamColor: ''
        }
    }
    GoTobackScreen = () => {
        this.props.navigation.goBack()
    }
    async componentDidMount() {
        let theamColor = await getAsyncStorage('theamColor')
        this.setState({ theamColor: theamColor })
    }

    
    render() {
        return (
            <View>

                {
                    Platform.OS === "android" ?
                        <View>
                            {this.state.theamColor =="BLACK" ?
                                <View style={styles.Header_Bg}>
                                    <TouchableOpacity onPress={this.GoTobackScreen} style={{ marginLeft: 30, }}>
                                        <Image style={{ width: 20, height: 20, }} source={require('../Images/back.png')} ></Image>
                                    </TouchableOpacity>
                                    <Text style={styles.headerText}>{this.props.title}</Text>

                                    <Text style={{color:'#fff',margin:10}}>{this.props.locationnew}</Text>
                                </View> :
                                <View style={styles.Header_Bg2}>
                                    <TouchableOpacity onPress={this.GoTobackScreen} style={{ marginLeft: 30, }}>
                                        <Image style={{ width: 20, height: 20, }} source={require('../Images/back_black.png')} ></Image>
                                    </TouchableOpacity>
                                    <Text style={styles.headerText2}>{this.props.title}</Text>
                                    <Text style={{color:'#fff',margin:10}}>{this.props.locationnew}</Text>
                                </View>}

                        </View>

                        :
                        <View>
                          {this.state.theamColor=='BLACK' ?
                            <View style={styles.Header_Bg}>
                            <TouchableOpacity onPress={this.GoTobackScreen} style={{ marginLeft: 30, marginTop: 20 }}>
                                <Image style={{ width: 20, height: 20, }} source={require('../Images/back.png')} ></Image>
                            </TouchableOpacity>
                            <Text style={styles.headerTextIOS}>{this.props.title}</Text>
                            <Text style={{color:'#fff',margin:10}}>{this.props.locationnew}</Text>
                        </View>
                          :
                          <View style={styles.Header_Bg2}>
                          <TouchableOpacity onPress={this.GoTobackScreen} style={{ marginLeft: 30, marginTop: 20 }}>
                              <Image style={{ width: 20, height: 20, }} source={require('../Images/back_black.png')} ></Image>
                          </TouchableOpacity>
                          <Text style={styles.headerTextIOS2}>{this.props.title}</Text>
                          <Text style={{color:'#fff',margin:10}}>{this.props.locationnew}</Text>
                      </View>
                          }
                        </View>
                      
                }


            </View>

        )

    }
}