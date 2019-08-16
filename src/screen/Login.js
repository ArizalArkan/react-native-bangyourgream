import React, {Component} from 'react'
import { Text, View, Image, Button, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import { Thumbnail,Content, Form, Item, Input, Label } from 'native-base'
import { connect } from 'react-redux'
import { getByEmail } from '../public/redux/action/user'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    login = async() => {
        if (this.state.email === '' || this.state.password === '') {
            Alert.alert(
                'Warning',
                'All Filed Must Filled',
            )
        } else {
            await this.props.dispatch(getByEmail({
                email: this.state.email,
                password: this.state.password
            }))
            if (this.props.user.userList === 'Password Salah') {
                Alert.alert(
                    'Warning',
                    'Worng Password'
                )
            } else if (this.props.user.userList === "Email Tidak Terdaftar") {
                Alert.alert(
                    'Warning',
                    'Email Not Found'
                )
            } else {
                await Alert.alert(
                    'Information',
                    'Login Sukses'
                )
                await AsyncStorage.getItem('token').then((result)=>{
                    a = result
                })

                console.warn("Initokenya",a);
                this.props.navigation.navigate('Home')
            }
        }
    }

    render(){
        return(
            <>
         <View>
             <Image source={require('../asset/VectorA.png')} style={{ position: "absolute" }} />
             <Text style={{ fontWeight: "bold", fontSize: 36, color: 'white', marginTop: 50, marginLeft: 40 }}>Sign In</Text>
             <Thumbnail large source={require('../asset/bp.jpg')} style={{ marginTop: 30, marginLeft: 250 }} />
         </View>
         <View style={{ marginTop: 50 }}>
                <Form style={{ marginHorizontal: 30 }}>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input value={this.state.email} onChangeText={(text) => this.setState({ email: text })}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry value={this.state.password} onChangeText={(text) => this.setState({ password: text })}/>
                    </Item>
                </Form>
         </View>
         <View style={{ marginHorizontal: 140, marginTop: 80 }}>
             <Button title='Sign In'
             color='#636DE6'
             accessibilityLabel='Sign In'
             onPress={this.login}
              />
         </View>
         <View style={{ alignItems: "center", marginTop: 120 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={{ fontStyle: 'italic' }}>Sign Up Here!</Text>
            </TouchableOpacity>
         </View>  
            </>   
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}
export default connect(mapStateToProps)(Login)