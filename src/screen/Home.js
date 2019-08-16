import React, {Component} from 'react'
import { Text, View, Image, StatusBar, TouchableOpacity, Alert } from 'react-native'
import { Header, Left, Right, Button, Thumbnail } from 'native-base'
import Sound from 'react-native-sound'
import RNFS from 'react-native-fs'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            comboCount: 0,
            scoreCount:0,
            pattern: [1, 2, 3, 4],
            clicked: [],
            cekCombo: '',
        }
        console.warn(RNFS.ExternalDirectoryPath);
    }
    cek = (param) => {
        this.state.clicked.push(param)
        for (let i = 0; i < this.state.clicked.length; i++) {
            if (this.state.pattern[i] === this.state.clicked[i]) {
                if (i === this.state.pattern.length-1) {
                    this.setState({comboCount:this.state.comboCount+1})
                    this.setState({scoreCount:this.state.scoreCount+20})
                    this.setState({clicked : [],cekCombo:''})
                }
            } else {
                this.setState({clicked : [],comboCount:0,cekCombo:'',scoreCount:0})
                console.log(this.state.clicked)
            }
        }
    }
    sound1 = async () => {
        sound1 = new Sound(require('../asset/music/oni.mp3'), (e) => { if (e) { console.log('Sound Error', e); return; } sound1.play(() => sound1.release()); })
        this.setState({
            cekCombo: () => {
                this.cek(1)
            }
        })
    }

    sound2 = () => {
        sound2 = new Sound(require('../asset/music/oni.mp3'), (e) => { if (e) { console.log('Sound Error', e); return; } sound2.play(() => sound2.release()); })
        this.setState({
            cekCombo: () => {
                this.cek(2)
            }
        })
    }

    sound3 = () => {
        sound3 = new Sound(require('../asset/music/oni.mp3'), (e) => { if (e) { console.log('Sound Error', e); return; } sound3.play(() => sound3.release()); })
        this.setState({
            cekCombo: () => {
                this.cek(3)
            }
        })
    }
    
    sound4 = () => {
        sound4 = new Sound(require('../asset/music/oni.mp3'), (e) => { if (e) { console.log('Sound Error', e); return; } sound4.play(() => sound4.release()); })
        this.setState({
            cekCombo: () => {
                this.cek(4)
            }
        })
    }
    
    render() {
        const uri = 'https://cdn0-production-images-kly.akamaized.net/ZzmpgzgrRXlh-ByOOVN9U7OjLUA=/0x50:720x456/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2694439/original/045771200_1547184085-hairstyle_1.jpg'
        return (
            <>
            <View style={{ backgroundColor: 'white' }}>
            <StatusBar hidden/>
            <Header style={{ backgroundColor: 'white', elevation: 10 }}>
                <Left>
                    <TouchableOpacity transparent onPress={this.props.navigation.openDrawer}>
                        <Thumbnail small source={{ uri: uri }} />
                    </TouchableOpacity>
                </Left>
                <Right>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Leaderboard')}>
                        <Image source={require('../asset/pink.png')}></Image>
                    </TouchableOpacity>
                </Right>
            </Header>
            <View style={{ alignItems: "center", marginTop: 20, }}>
              <Text style={{ fontWeight: "bold", fontStyle: 'italic', fontSize: 15 }}>Score: {this.state.scoreCount} </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
              <Text style={{ fontWeight: "bold", fontStyle: 'italic', lineHeight: 20, fontSize: 15 }}>Combo Hits: {this.state.comboCount} </Text>
          </View>
          <View style={{ alignItems: "center"}}>
            <Image source={require('../asset/bung.png')} />
          </View>
          <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: 'Open Sans', color: '#424242', lineHeight: 15, fontSize: 15 }}>Bang Your Dream!</Text>
          </View>
          <View>
              <Image source={require('../asset/mlaku.png')} style={{ position: "absolute", marginLeft: 170 }} />
              <Image source={require('../asset/musik.png')} style={{ position: "absolute", marginTop: 225  }} />
              <Image source={require('../asset/gitar.jpg')} style={{ position: "absolute", marginTop: 300, marginLeft: 230  }} />
                <TouchableOpacity style={{  width: 90, marginTop:135, marginLeft: 250 }} onPressIn={this.sound1}>
                <Text style={{  width: 50,
        width: 90,
        height: 90,
        borderRadius: 100 / 2,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8}}></Text>
                </TouchableOpacity>
                <TouchableOpacity style={{  width: 90, marginTop:-90, marginLeft: 90 }} onPressIn={this.sound2}>
                <Text style={{  width: 50,
        width: 90,
        height: 90,
        borderRadius: 100 / 2,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8}}></Text>
                </TouchableOpacity> 
                <TouchableOpacity style={{  width: 100, marginTop:70, marginLeft: 280 }} onPressIn={this.sound3}>
                <Text style={{  width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#e36284',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8}}></Text>
                </TouchableOpacity>
                <TouchableOpacity style={{  width: 100, marginTop:-100, marginLeft: 40 }} onPressIn={this.sound4}>
                <Text style={{  width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#e36284',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8}}></Text>
                </TouchableOpacity>
          </View>
          {
              this.state.cekCombo !== '' && this.state.cekCombo()
          }
          </View>
          </>
        );
      }
}

export default Home