import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const FloatingHeader = () => (
  <Segment clearing id="navbar">
    <Header as='h2' floated='right'>
      KEYSPOTS
    </Header>
    <Header as='h2' floated='left'>
      LOGO
    </Header>
  </Segment>
)

export default FloatingHeader
