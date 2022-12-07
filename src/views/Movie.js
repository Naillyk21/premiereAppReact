import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LoginStyle } from '../assets/style/LoginStyle'
import React, { useEffect, useState } from 'react'
import { checkEmail, checkPassword } from '../utils/regex'
import { getData, storeData } from '../utils/localStorage'
import { Card } from '../components/Card'
import { CardStyle } from '../assets/style/Card'
import picture1 from '../assets/images/user1.jpg'

//clef API 9058ca7
//https://www.omdbapi.com/?i=tt3896198&apikey=9058ca7

const Movie = ({ navigation }) => {
    const [recherche, setRecherche] = useState('')
    const [moviedata,setMovieData] = useState([])

    function searchMovie() 
    {
        let requete ="https://www.omdbapi.com/?s="+recherche+"&?i=tt3896198&apikey=9058ca7"
        setMovieData("")
        fetch(requete).then((response)=>
        {
            response = response.json()
            response.then((result)=> 
            {
                setMovieData(result.Search)
            })
        })
    }

    return (
        <View style={LoginStyle.container}>
            <Text style={LoginStyle.text}>Rechercher un film</Text>
            <TextInput
                    style={LoginStyle.inputEmail}
                    onChangeText={setRecherche}
                    value={recherche}
                    placeholder="Recherche..."
                />
            <View style={LoginStyle.inputContainer}>
                
                <TouchableOpacity
                    style={LoginStyle.registerButton}
                    onPress={searchMovie}
                >
                    <Text style={LoginStyle.registerButtonText}>Rechercher</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
            {moviedata &&
                    moviedata.length > 0 &&
                    moviedata.map((movie) => {
                        return (
                            <Card
                                title={movie.Title}
                                image={movie.Poster}
                                key={movie.imdbID}
                            />
                        )
                    })}
            </ScrollView>
        </View>
        
    )
}
export default Movie
