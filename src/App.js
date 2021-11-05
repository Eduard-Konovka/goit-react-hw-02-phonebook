import { Component } from 'react';
// import PropTypes from 'prop-types';
// import shortid from 'shortid';
import Container from './components/Container';
import Section from './components/Section';
import PhoneBook from './components/PhoneBook';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Section title="Телефонная книга">
          <PhoneBook />
        </Section>
      </Container>
    );
  }
}
