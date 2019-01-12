import React from 'react'
import Clock from '../Clock'

class App extends React.Component {
    render() {
        return (
            <div>
                <Clock
                  name = "Karol"
                  phrase = "ein"
                />
            </div>
        )
    }
}
export default App