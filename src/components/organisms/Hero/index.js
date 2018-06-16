import { Avatar, Block, Text as Paragraph } from 'components/atoms'
import { SocialBtns } from 'components/molecules'
import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import Box from 'grommet/components/Box'

const Text = styled(Paragraph)`
  color: ${palette('grayscale', 0)};
  max-width: 800px;
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  letter-spacing: 0.07em;
  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`
const Hero = ({ resolutions }) => (
  <Box
    a11yTitle="Main Header With Avatar and Description"
    align="center"
    direction="column"
    margin={{ top: 'medium' }}
    pad="large"
    size="full"
    textAlign="center"
  >
    <Avatar resolutions={resolutions} />

    {/* <SocialBtns /> */}

    <Text>Filler P</Text>
    <Text>
      <em>Filler 2nd</em>
    </Text>
  </Box>
)

export default Hero
