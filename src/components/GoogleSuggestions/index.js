import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchCharacter: '', autoText: ''}

  searchInput = event => {
    this.setState({searchCharacter: event.target.value.toLowerCase()})
  }

  autoFill = suggestion => {
    this.setState({
      searchCharacter: suggestion.toLowerCase(),
      autoText: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchCharacter, autoText} = this.state
    const searchList = suggestionsList.filter(eachitem =>
      eachitem.suggestion.toLowerCase().includes(searchCharacter),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="cover-image"
        />
        <div className="search-card">
          <div className="search-box-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-bar"
              placeholder="Search Google"
              onChange={this.searchInput}
              value={autoText}
            />
          </div>
          <div className="search-list">
            <ul className="unordered-container">
              {searchList.map(eachitem => (
                <SuggestionItem
                  data={eachitem}
                  key={eachitem.id}
                  fill={this.autoFill}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
