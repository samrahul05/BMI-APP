
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BMICalculator() {
      
    const navigation = useNavigation();
    const [height,setHeight] =useState(0);
    const [weight,setWeight ] =useState(0)
   const [bmi, setBmi] = useState(0);
   console.log("bmi",bmi);
const handleCalculate = () => {
        
       
        
        const roundOff = num => {
            console.log(Math.round(num * 10) / 10)
          return Math.round(num * 10) / 10; 
          
        };
         const heightInMeters = height / 100; // Convert cm to meters
        const result = weight / (heightInMeters ** 2); 
        
        
        console.log("height",height)
        console.log("weight",weight)
        console.log("result",result)
        setBmi(roundOff(result));
       
      }; 
      
    //   const underweightClass = bmi < 18.5 ? 'underweight' : '';
    //     const normalWeightClass = bmi >= 18.5 && bmi <= 24.9 ? 'normal' : '';
    //     const overweightClass = bmi > 24.9 && bmi <= 29.9 ? 'overweight' : '';
    //     const obeseClass = bmi >= 30 ? 'obese' : '';
     

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: '80%' }}>
            <Text style={styles.bmiText}>BMI Calc</Text>
    
            <View>
              <View >
                <TextInput
                style={styles.input}
                value={height}
                onChangeText={value => setHeight(value)}
                placeholder='Height'
                  keyboardType="numeric"
                />    
                
              </View>
    
              <View style={{ marginTop: 10 }}>
                <TextInput
                  value={weight}
                  onChangeText={value => setWeight(value)}
                  style={styles.input}
                  placeholder="Weight"
                  keyboardType="numeric"
                />
    
           
              </View>
            </View>            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          
              <View style={{width:"100%"}}>
                <Text style={styles.bmiText}>BMI Range</Text>
                <Text style={styles.bmiClassText}>{"<"} 18.5 - Underweight</Text>
                <Text style={styles.bmiClassText}>18.5 - 24.9 - Normal</Text>
                <Text style={styles.bmiClassText}>25 - 29.9 - Overweight</Text>
                <Text style={styles.bmiClassText}>{">"} 30 - Obese</Text>
                <Text style={styles.result}>Your BMI: {bmi}</Text>
              </View>
            </View>  

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
      
      bmiText:{
        color: '#64c4c4',
        fontWeight: 'bold',
        textAlign:"center",
        fontSize: 40,
        marginBottom:20,

      },
      bmiClassText: {
        marginBottom: 5,
        fontSize: 15,
        textAlign:"center",
        marginBottom:10,

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
      result: {
        fontSize: 20,
        marginTop: 20,
    },
    });
    
    export default BMICalculator;