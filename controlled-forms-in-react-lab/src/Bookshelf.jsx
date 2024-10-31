import { useState } from 'react';

const VideoGameshelf = () => {

    const [videoGames, setVideoGames] = useState([
        { title: 'Hitman: World of Assassination', author: 'I.O Interactive' },
        { title: 'The Battle Of Polytopia', author: 'Midjiwan Ab' },
      ]);

      const [newVideoGame, setNewVideoGame] = useState({
        title: '',
        author: '',
      })

    return (
        <div className="videoGameshelfDiv">
            <div className="formDiv">
                <h3>Add a Video Game</h3>
                <form onSubmit={handleSubmit}> {/* Prevents default behavior, the page refresh */}
                    <label htmlFor="title">Title: </label>
                        <input
                            id="title"
                            name="title"
                            value={newVideoGame.title} 
                            onChange={handleInputChange}
                            />
                    <label htmlFor="author">Author: </label>
                            <input
                            id="author"
                            name="author"
                            value={newVideoGame.author}
                            onChange={handleInputChange}
                            />
                    <button type='submit'>Submit a Video Game</button>
                </form>
            </div>
            <div className="videoGameCardsDiv">
                {/* VideoGame cards will display here */}
                {videoGames.map((videoGame, index) => (
                    <div className="videoGameCard" key={index}>
                        <h4>{videoGame.title}</h4> 
                        <p>({videoGame.author})</p>
                    </div>
                ))}
            </div>
        </div>
    )

    function handleInputChange(event) {
        // This was incredibly difficult for me to understand, but I know what it does
        // Targets specific key in "New VideoGame" object using the id and name of input fields to update the object in real time
        setNewVideoGame(
            {... newVideoGame, [event.target.name]: event.target.value}
        )
    }

    function handleSubmit(event) {
        // Prevents reload
        event.preventDefault()
        // Updates Array of videoGame objects with new videoGame at the end
        let updatedVideoGames = [... videoGames, newVideoGame]
        setVideoGames(updatedVideoGames)
        // Empty the input fiel  
        setNewVideoGame({
            title: '',
            author: ''
        })
    }
}

export default VideoGameshelf