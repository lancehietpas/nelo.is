import React, { PureComponent } from 'react'
import Banner, { Emoji, Title, Description } from '../components/Banner'
import Flex from '../components/Flex'
import Link from 'gatsby-link'

class NotFoundPage extends PureComponent {
  render() {
    return (
      <Flex alignItems="center" flex="1 1 auto" justifyContent="center">
        <Banner>
          <Emoji>4😱4</Emoji>
          <Title>Page not found</Title>
          <Description>
            You seem lost. Go back <Link to="/">home</Link>, maybe?
          </Description>
        </Banner>
      </Flex>
    )
  }
}

export default NotFoundPage
