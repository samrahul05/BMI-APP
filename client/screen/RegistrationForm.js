// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
// import axios from 'axios';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/native';


// const RegistrationForm = () => {
//   const navigation = useNavigation();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegistration = async () => {
   
//     try {
//       const userData = {
//         name,
//         email,
//         phoneNumber,
//         password
//       };
//       console.log(userData)
//       const res = await axios.post('http://192.168.2.5:5000/api/signup', userData);
//       console.log(res.data);
      
                
//       if (res.data.status === 'ok') {
//         Alert.alert('Registered Successfully!!');
//         navigation.navigate('Login');
        
//       } else {
//         Alert.alert(JSON.stringify(res.data));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.registerInput}
//         placeholder="Name"
//         value={name}
//         onChangeText={text => setName(text)}
//       />
//       <TextInput
//         style={styles.registerInput}
//         placeholder="Email" 
      
//         value={email}
//         onChangeText={text => setEmail(text)}
//       />
//       <TextInput
//         style={styles.registerInput}
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChangeText={text => setPhoneNumber(text)}
//         keyboardType="phone-pad"
//       />
//       <TextInput
//         style={styles.registerInput}
//         placeholder="Password"
//         value={password}
//         onChangeText={text => setPassword(text)}
//         secureTextEntry={true}
//       />
//       {/* <Button style={styles.registerButton} title="Register" onPress={handleRegistration} />
//        */}
//        <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
//         <Text style={styles.buttonText}>Register</Text>
//        </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
    
//   },
//   registerButton:{
//     width: '100%',
//     backgroundColor: '#64c4c4', 
//     textAlign:"center",
//     alignItems: 'center',
//     // marginLeft:50,
//     marginTop:30,
//     paddingHorizontal: 15,
//     paddingVertical: 15,
//     borderRadius: 20,
//   },
//   buttonText: {
//     color: '#fff', // Text color
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   registerInput: {
//     width: '100%',
//     marginBottom: 20,
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: '#64c4c4',
//     fontWeight:"bold",
//     color:"black",
//     fontSize:15,
//     borderRadius:10 ,
//   },
// });

// export default RegistrationForm;


import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const RegistrationForm = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleRegistration = async () => {
    if (!email.trim()) {
      setEmailError('Email is required.');
      return;
    }

    try {
      const userData = {
        name,
        email,
        phoneNumber,
        password
      };
      console.log(userData)

      const res = await axios.post('http://192.168.43.136:5000/api/signup', userData);

      if (res.data.status === 'ok') {
        Alert.alert('Registered Successfully!!');
        navigation.navigate('Login');
      } else {
        Alert.alert(JSON.stringify(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
       <Text style={styles.text_header}>Signup</Text>
      <TextInput
        style={styles.registerInput}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={[styles.registerInput, emailError ? styles.errorInput : null]}
        placeholder="Email"
        value={email}
        onChangeText={text => {
          setEmail(text);
          setEmailError('');
        }}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        style={styles.registerInput}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.registerInput}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text_header: {
    color: '#64c4c4',
    fontWeight: 'bold',
    textAlign:"center",
    fontSize: 40,
    marginBottom:20,
    
    
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#64c4c4',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerInput: {
    width: '100%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#64c4c4',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    borderRadius: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default RegistrationForm;
