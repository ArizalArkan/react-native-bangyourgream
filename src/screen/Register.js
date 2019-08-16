import React, {Component} from 'react'
import { Text, View, Image, Button, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import { Thumbnail,Content, Form, Item, Input, Label } from 'native-base'
import { connect } from 'react-redux'
import { register } from '../public/redux/action/user'

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            fullname: '',
            email: '',
            username: '',
            password: '',
            confirm_password: ''
        }
    }
    regis = async () => {
        if(this.state.email === '' || this.state.password === '' || this.state.username === '') {
            Alert.alert(
                'Warning',
                'All filed must be filled'
            )
        } else {
            if (this.state.password === this.state.confirm_password) {
                await this.props.dispatch(register({
                    fullname: this.state.fullname,
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                }))
                if (this.props.user.userList && this.props.user.userList.code && this.props.user.userList.code === "ER_DUP_ENTRY") {
                    Alert.alert(
                        'Warning',
                        'Email already exist'
                    )
            } else {
                await AsyncStorage.getItem('token').then((result) => {
                    a = result
                })
                console.warn("Ini tokenya", a);

                Alert.alert(
                    'Warning',
                    'Register Success'
                )
                this.props.navigation.navigate('Login')
            }
        } else {
            Alert.alert(
                'Warning',
                'Password and Confirm Password Must Be Same',
            )
        }
    }
}
    render(){
        return(
            <>
         <View>
             <Image source={require('../asset/VectorA.png')} style={{ position: "absolute" }} />
             <Text style={{ fontWeight: "bold", fontSize: 36, color: 'white', marginTop: 50, marginLeft: 40 }}>Sign Up</Text>
             <Thumbnail large source={require('../asset/bp.jpg')} style={{ marginTop: 30, marginLeft: 250 }} />
         </View>
         <View style={{ marginTop: 5 }}>
                <Form style={{ marginHorizontal: 30 }}>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Full Name</Label>
                        <Input value={this.state.fullname} onChangeText={(text) => this.setState({ fullname: text })}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input value={this.state.username} onChangeText={(text) => this.setState({ username: text })}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry value={this.state.password} onChangeText={(text) => this.setState({ password: text })}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Confirm Password</Label>
                        <Input secureTextEntry value={this.state.confirm_password} onChangeText={(text) => this.setState({ confirm_password: text })}/>
                    </Item>
                </Form>
         </View>
         <View style={{ marginHorizontal: 140, marginTop: 30 }}>
             <Button title='Sign Up'
             color='#636DE6'
             accessibilityLabel='Sign Up'
             onPress={this.regis}
              />
         </View>
         <View style={{ alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{ fontStyle: 'italic' }}>Already Have An Account? Sign In Here</Text>
            </TouchableOpacity>
         </View>  
            </>   
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Register)