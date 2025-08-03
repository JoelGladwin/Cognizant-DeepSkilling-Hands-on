import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: 'book' // Change this to 'blog' or 'course' to test
    };
  }

  renderComponent = () => {
    const { currentView } = this.state;

    if (currentView === 'book') {
      return <BookDetails />;
    } else if (currentView === 'blog') {
      return <BlogDetails />;
    } else if (currentView === 'course') {
      return <CourseDetails />;
    } else {
      return <p>No component selected.</p>;
    }
  }

  render() {
    return (
      <div>
        <h1>Blogger App</h1>

        {/* Buttons to switch views */}
        <button onClick={() => this.setState({ currentView: 'book' })}>Show Book</button>
        <button onClick={() => this.setState({ currentView: 'blog' })}>Show Blog</button>
        <button onClick={() => this.setState({ currentView: 'course' })}>Show Course</button>

        {/* Conditionally render component */}
        {this.renderComponent()}
      </div>
    );
  }
}

export default App;
