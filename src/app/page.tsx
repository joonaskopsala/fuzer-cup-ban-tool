'use client'

import { Button, Container, Stack, Typography } from '@mui/material'
import * as dota2Heroes from './resources/dota2_heroes.json'
import { Hero } from './components/hero'
import { Bancolumn } from './components/ban_column'

export default function Page() {
  return (
    <Container
      sx={{
        display: 'flex',
        width: '100vw',
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >
      <Stack>
        <Typography variant="h4" textAlign="center" gutterBottom>
          {'Fuzer cup ban tool'}
        </Typography>
        <Stack width={'100vw'} direction="row">
          <Bancolumn src="" />
          <Stack
            direction="row"
            sx={{
              width: '60%',
              flexWrap: 'wrap',
              gap: 1,
              alignItems: 'flex-start'
            }}
          >
            {dota2Heroes.map(hero => (
              <Hero key={hero.name} hero={hero} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
