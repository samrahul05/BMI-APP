import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// import { Picker } from '@react-native-picker/picker';

import { useNavigation } from '@react-navigation/native';

function BMICalculator() {
      
    const navigation = useNavigation();
    const [height,setHeight] =useState(0);
        console.log(height)
    const [weight,setWeight ] =useState(0)
    console.log(weight)
//    const [bmi, setBmi] = useState(0);
      

     

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: '80%' }}>
            <Text>BMI Calculator</Text>
    
            <View>
              <View >
                <TextInput
                style={styles.input}
                value={height}
                onChangeText={value => setHeight(value)}
                placeholder='Height'
                  keyboardType="numeric"
                />    
                {/* <Picker
                  style={[styles.input, { flex: 1 }]}
                  selectedValue={heightUnit}
                  onValueChange={value => setHeightUnit(value)}
                >
                  <Picker.Item label="cm(Centimeter)" value="cm" />
                  <Picker.Item label="m(Meter)" value="m" />
                  
                </Picker> */}
              </View>
    
              <View style={{ marginTop: 10 }}>
                <TextInput
                  value={weight}
                  onChangeText={value => setWeight(value)}
                  style={styles.input}
                  placeholder="Weight"
                  keyboardType="numeric"
                />
    
              {/* <Picker
                    selectedValue={WeightUnit}
                    onValueChange={value => setWeightUnit(value)}
                    style={[styles.input, { marginTop: 10 }]}>
    
                    <Picker.Item label="lbs(Pound)" value="lbs" />
                    <Picker.Item label="kg(Kilogram)" value="kg" />
              </Picker>   */}
              </View>
            </View>
{/*     
            {bmi ? (
              <Text>
                BMI: {bmi} kg/m<sup>2</sup>
              </Text>
            ) : null}
    
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          
              <View>
                <Text>BMI Range</Text>
                <Text style={styles.bmiClassText}>{"<"} 18.5 - Underweight</Text>
                <Text style={styles.bmiClassText}>18.5 - 24.9 - Normal</Text>
                <Text style={styles.bmiClassText}>25 - 29.9 - Overweight</Text>
                <Text style={styles.bmiClassText}>{">"} 30 - Obese</Text>
              </View>
            </View> */}
    
            <TouchableOpacity onPress={handleCalculate} style={styles.calculateButton}>
              <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>
          </View>
    
          
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.BackButton}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10,
      },
      bmiClassText: {
        marginBottom: 5,
      },
      calculateButton: {
        width: '100%',
        backgroundColor: '#64c4c4', 
        textAlign:"center",
        alignItems: 'center',
        marginTop:30,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 20,
      },
      BackButton :{
        width: '50%',
        backgroundColor: '#64c4c4', 
        textAlign:"center",
        alignItems: 'center',
        marginTop:30,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 20,
      },
      buttonText: {
        color: '#fff', // Text color
        fontSize: 18,
        fontWeight: 'bold',
      },
    });
    
    export default BMICalculator;