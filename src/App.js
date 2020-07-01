import './index.css'
import React, { Component } from 'react'
import Homepage from './components/Homepage'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FaHome from 'react-icons/lib/fa/home'
import FaUser from 'react-icons/lib/fa/user'
import FaConnectdevelop from 'react-icons/lib/fa/connectdevelop'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'
import * as text from './text'

class Tabs extends Component {
  state = {
    activeIndex: 0,
  }

  selectTabIndex = (activeIndex) => {
    this.setState({ activeIndex })
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        activeIndex: this.state.activeIndex,
        onSelectTab: this.selectTabIndex,
      })
    })
    return <div className='Tabs'>{children}</div>
  }
}

class TabList extends Component {
  render() {
    const { activeIndex } = this.props
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        onSelect: () => this.props.onSelectTab(index),
      })
    })
    return <div className='tabs'>{children}</div>
  }
}

class Tab extends Component {
  render() {
    const { isActive, isDisabled, onSelect } = this.props
    return (
      <div
        className={
          isDisabled ? 'tab disabled' : isActive ? 'tab active' : 'tab'
        }
        onClick={isDisabled ? null : onSelect}>
        {this.props.children}
      </div>
    )
  }
}

class TabPanels extends Component {
  render() {
    const { activeIndex, children } = this.props
    return <div className='panels'>{children[activeIndex]}</div>
  }
}

class TabPanel extends Component {
  render() {
    return this.props.children
  }
}

class DataTabs extends Component {
  render() {
    const { data } = this.props
    return (
      <Tabs>
        <TabList>
          {data.map((tab, i) => (
            <Tab key={i}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, i) => (
            <TabPanel key={i}>{tab.content}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    )
  }
}

class App extends Component {
  render() {
    const tabData = [
      {
        label: <FaHome className='navIcon' />,
        content: <Homepage />,
      },
      {
        label: <FaUser className='navIcon' />,
        content: <AboutMe />,
      },
      {
        label: <FaConnectdevelop className='navIcon' />,
        content: <Projects />,
      },
      {
        label: <FaEnvelopeO className='navIcon' />,
        content: <Contact />,
      },
    ]
    return (
      <div className='App'>
        <DataTabs data={tabData} />
      </div>
    )
  }
}

export default App
