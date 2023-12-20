import { View, Text } from 'react-native'
import React ,{useState,useEffect}from 'react'
import socketIOClient from 'socket.io-client';
import axios from 'axios';

export default function LatLongScreen() {
    const [submissions, setSubmissions] = useState([]);
    useEffect(() => {
        const socket = socketIOClient();

        // Listen for new submissions
        socket.on('newSubmission', (submission) => {
        setSubmissions((prevSubmissions) => [...prevSubmissions, submission]);
        });
        // Connect to Socket.IO server
        const fetchSubmissions = async () => {
          try {
            const {data} = await axios.get('https://tsukimibackend.onrender.com/submissions');
            setSubmissions(data);
            console.log(data);
          } catch (error) {
            console.error('Error fetching submissions', error);
          }
        };
    
        fetchSubmissions();
        return () => {
            // Disconnect from Socket.IO server when component unmounts
            socket.disconnect();
        };
        
      }, []);

  return (
    <View>
      <Text className="text-center py-12">Latitude and Longitude of Victims</Text>
      <View>
        {
            submissions.length !== 0 ?(
            submissions.map((submission) => {
                return(
                    <View key={submission._id}>
                        <Text className="text-center mb-3">• Co-Ordinates : {submission.coords} </Text>
                    </View>);
                })
            ):(<Text>no data</Text>)
        }
      </View>
    </View>
  )
}