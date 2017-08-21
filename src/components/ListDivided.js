import React from 'react'
import { List } from 'semantic-ui-react'

const ListDivided = (props) => {

  const listItems = props.features.map((feature, index) => (
    <List.Item key={index} id={"feature-" + index}>
      <List.Icon name='circle' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' onClick={props.handleClick}>{feature.properties.Name}</List.Header>
        <List.Description as='p'>{feature.properties.Street}</List.Description>
      </List.Content>
    </List.Item>
  ));

  return (
    <List divided relaxed>
      { listItems }
    </List>
  )
}

export default ListDivided
