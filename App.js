import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function Login() {
   const [username, setUsername,] = useState("");
  const [email, setEmail,] = useState("");
  const [password, setPassword] = useState("");
 const [confirm_password, setComfirm_Password] = useState("");
 const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./public/Blue_Logo.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
      <Image style={styles.lock} source={require("./public/user.png")} />
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="black"
          onChangeText={(username) => setEmail(username)}
        />
      </View>

       <View style={styles.inputView}>
      <Image style={styles.lock} source={require("./public/envelope.png")} />
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
    
        <Image style={styles.lock} source={require("./public/padlock.png")} />
          <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Image style={styles.eiew} source={require("./public/private.png")} />
       </View>
      
        <View style={styles.inputView}>
    
        <Image style={styles.lock} source={require("./public/padlock.png")} />
          <TextInput
          style={styles.TextInput}
          placeholder="Confirm password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(confirm_password) => setPassword(confirm_password)}
        />
        <Image style={styles.eiew1} source={require("./public/private.png")} />
       </View>

       <View style={styles.inputView}>
      <Image style={styles.lock} source={require("./public/telephone.png")} />
        <TextInput
          style={styles.TextInput}
          placeholder="Phone"
          placeholderTextColor="black"
          onChangeText={(phone) => setEmail(phone)}
        />
      </View>
 
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

       <Text style={styles.rem}>Login with</Text>

       <View style={styles.siteinput}>
       <Image style={styles.site} source={require("./public/Instagram.png")} />
       <Image style={styles.site} source={require("./public/Google.png")} />
        <Image style={styles.site} source={require("./public/Facebook.png")} />
     </View>
          <Text style={styles.forgotbutton}>Forgot Password</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
 
  image: {
    marginBottom: 40,
    width: 200,
    height: 120,
  },

  lock:{
    height:20,
    width:20,
    marginTop:8,
    marginLeft:15,
  },

  eiew:{
    height:15,
    width:20,
    marginTop:8,
    marginLeft: 140,
  },

eiew1:{
    height:15,
    width:20,
    marginTop:8,
    marginLeft: 70,
  },

  site: {
    height:25,
    width:25,
    marginTop:13,
    marginLeft:25,
    flexDirection: 'row'

  },

  siteinput: {
  
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 10,
    marginLeft: 120,
    flexDirection: 'row',


  },
  
 
  inputView: {
    backgroundColor: "#ccc",
    borderRadius: 30,
    width: "80%",
    height: 34,
    marginBottom: 20,
    flexDirection: 'row',
    justifiyContent: 'space-between',

  
  },
 
  TextInput: {
    height: 35,
    marginLeft: 5,
  },

  forgotbutton: {
    height: 20,
    marginBottom: 20,
    backgroundColor: "white",
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "green",
  },

  loginText:{
    color: "white"
  },
});