import React, {Component} from 'react'
import { Text, View, TouchableOpacity, Image, Button, AsyncStorage } from 'react-native'
import { Thumbnail } from 'native-base' 
import { connect } from 'react-redux'
import { logout } from '../public/redux/action/user'

class Drawer extends Component {
    constructor(props){
        super(props)
        this.state= {
            user:[],
            username: '',
            token: ''
        }
        AsyncStorage.getItem('username',(e,res) => {
            console.log(e);
            
            if(res) {
            this.setState({
                username: res
            })
          }
        })

        AsyncStorage.getItem('token',(e,res) => {
            if(res) {
            this.setState({
                token: res
            })
          }
        })
    }
    destroy = async () => {
        await this.props.dispatch(logout(this.state.idUser))
            .then(() => {
                alert('Logout successfully!')
                this.setState({
                    idUser: ''
                })
                AsyncStorage.clear()
                this.props.navigation.navigate('Home')
            })
            .catch(() => {
                AsyncStorage.clear()
                alert('Logout failed!')
            })
    }
    render() {
        console.log('Bagong'+this.state.username)
        console.log('Asu'+this.state.token)
        console.log('Bgst'+this.state.idUser)
        
        
        
        const uri ='https://cdn0-production-images-kly.akamaized.net/ZzmpgzgrRXlh-ByOOVN9U7OjLUA=/0x50:720x456/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2694439/original/045771200_1547184085-hairstyle_1.jpg'
        return (
            <>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
            <Thumbnail large source={{ uri: uri }} />
          </View>
          <View style={{ alignItems: "center", marginTop: 20,  }}>
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>{this.state.username}</Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 10,  }}>
              <Text style={{ fontStyle: 'italic' }}>Gak Ngidol, gak asiq</Text>
          </View>
          <View style={{ marginTop: 70, marginLeft: 20 }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Leaderboard')}>
                  <Image source={require('../asset/pink.png')}/>
              </TouchableOpacity>
          </View>
          <View style={{ marginTop: -30, marginLeft: 80 }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Leaderboard')}>
                  <Text style={{ fontWeight: "bold", fontSize: 19 }}>Leaderboards</Text>
              </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20, marginLeft: 20 }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                  <Image source={require('../asset/login.png')}/>
              </TouchableOpacity>
          </View>
          <View style={{ marginTop: -30, marginLeft: 80 }}>
              {this.state.token ? 
              <TouchableOpacity  onPress={() => this.destroy()}>
              <Text style={{ fontWeight: "bold", fontSize: 19 }}>Logout</Text>
          </TouchableOpacity> : 
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={{ fontWeight: "bold", fontSize: 19 }}>Login</Text>
              </TouchableOpacity>}
          </View>
          <View style={{ marginTop: 200 }}>
              <Image source={require('../asset/Vector.png')} style={{ width: 280 }} />
          </View>

          </>
        );
      }
}
const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}
export default connect(mapStateToProps)(Drawer)       