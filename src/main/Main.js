import React, { Component } from 'react'
import RecentSearches from '../search/RecentSearches'
import Search from '../search/Search'
import SearchResults from '../search/SearchResults'

class Main extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="column column-75">
            <div className="container">
              <div className="row">
                <div className="column">
                  <Search/>
                </div>
              </div>

              <div className="row">
                <div className="column">
                  <SearchResults/>
                </div>
              </div>
            </div>
          </div>

          <div className="column column-25">
            <RecentSearches/>
          </div>
        </div>
      </div>
    )
  }
}

export default Main