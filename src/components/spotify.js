import React, { Component } from 'react'

export default class Spotify extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            spotify_url: "",
            show_playlist: false     
        }
    }
    
    handleSpotifyURL = (event) => {
        this.setState({spotify_url: event.target.value});
        
    }

    handleSubmit = (event) => {
        this.setState({show_playlist: true});
        this.setState({spotify_url: "https://open.spotify.com/embed/playlist/" + this.state.spotify_url.substring(17,)});
    }

    
    render() {
        if(this.state.show_playlist){
            
            return(
                <div>
                    <h1>Spotify Playlist</h1>
                    <iframe src={this.state.spotify_url} height="350" width="250" title="Spotify"></iframe>
                </div>
                
                //<div>{this.state.spotify_url}</div>
            )
        }
        else{
            return (
                <div>
                    <h1>Spotify Instructions</h1>
                    <br></br>
                    <div>Go to a playlist --> Share --> Copy Spotify URI</div>
                    <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Spotify Playlist URL</label>
                        <input type="text" value={this.state.spotify_url} onChange={this.handleSpotifyURL}/>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                </div>
                
            )
        }
        
    }
}
