import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { LineChart, BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from 'react-native-chart-kit';
// import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import axios from 'axios'; // Import Axios
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import  {Text} as BtnText from 'react-native-gesture-handler';
const Result = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch data from URL using Axios
    axios.get('http://192.168.43.136:5000/api/GetUserdata')
      .then(response => {
        // Update component state with fetched data
        setUserData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []); // Empty dependency array to run only once on component mount

  // Sample data for the line chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [60, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 105, 244, ${opacity})`,
        // color:"#64c4c4",
        strokeWidth: 2
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        {userData && (
          <>
            <Text style={styles.subHeading}>Basic Information</Text>
            <Text style={styles.text}>Name: {userData.BasicInfo.Name || 'NULL'}</Text>
            <Text style={styles.text}>Age: {userData.BasicInfo.Age ? `${userData.BasicInfo.Age} years` : 'NULL'}</Text>
            <Text style={styles.text}>Height: {userData.BasicInfo.Height ? `${userData.BasicInfo.Height} cm` : 'NULL'}</Text>
            <Text style={styles.text}>Weight: {userData.BasicInfo.Weight ? `${userData.BasicInfo.Weight} kg` : 'NULL'}</Text>
            <Text style={styles.text}>Gender: {userData.BasicInfo.Gender || 'NULL'}</Text>
            <Text style={styles.text}>Smoker Status: {userData.BasicInfo.smokingStatus || 'NULL'}</Text>
            <Text style={styles.subHeading}>Selected Symptoms:</Text>
            <Text style={styles.text}>Breathlessness: {userData.Symptoms.breathlessness || 'NULL'}</Text>
            <Text style={styles.text}>Chest Tightness: {userData.Symptoms.chestTightness || 'NULL'}</Text>
            <Text style={styles.text}>Cough Frequency: {userData.Symptoms.coughFrequency || 'NULL'}</Text>
            <Text style={styles.text}>Difficulty Sleeping: {userData.Symptoms.difficultySleeping || 'NULL'}</Text>
          </>
        )}
      </View>

      <Button title='MEASURE' style={styles.btn} />
     

      <View style={styles.chartContainer}>
        <BarChart
          data={data}
          width={350}
          height={220}
          yAxisLabel={'$'}
          xAxisLabel={'$'}
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            // labelColor:"#64c4c4",
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  infoContainer: {
    marginLeft: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  btn:{
    // flex: 1,
    width:"80%",
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#64c4c4',

  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default Result;
