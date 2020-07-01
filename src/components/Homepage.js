import React, { Component } from 'react'
// import { render } from 'react-dom'

class Homepage extends Component {
  componentDidMount() {
    this.updateTitle()
  }

  updateTitle() {
    const TITLES = [
      'Software Engineer',
      'Thinkful Graduate',
      'Copywriter',
      'Content Creator',
      'Graphic Designer',
      'Product Developer',
      'Photographer',
    ]
    const INIT_DELAY_SECONDS = 1
    const CHANGE_DELAY_SECONDS = 5
    const $TITLE = document.getElementById('dev')

    function updateDynamicTitle(currentTitle = 0) {
      animateNewTitle(TITLES[currentTitle])
      const nextTitle = currentTitle < TITLES.length - 1 ? currentTitle + 1 : 0
      setTimeout(() => {
        updateDynamicTitle(nextTitle)
      }, CHANGE_DELAY_SECONDS * 1000)
    }

    function animateNewTitle(newTitle, letter = 1) {
      requestAnimationFrame(() => {
        $TITLE.dangerouslySetInnerHTML = newTitle.substr(0, letter)
        letter++
        if (letter <= newTitle.length) {
          animateNewTitle(newTitle, letter)
        }
      })
    }

    setTimeout(updateDynamicTitle, INIT_DELAY_SECONDS * 1000)
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-4 animate'>
            I'm <b>Levi Bernard</b>, and I'm a{' '}
            <b id='dev'>Software Developer</b>
          </h1>
        </div>
      </div>
    )
  }
}
export default Homepage
