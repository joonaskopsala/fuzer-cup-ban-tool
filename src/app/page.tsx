'use client'

import { Button, Container, Stack, Typography } from '@mui/material'
import dota2Heroes from './resources/dota2_heroes.json'
import { Hero } from './components/hero'
import { Bancolumn } from './components/ban_column'
import { useState } from 'react'

export default function Page() {
  const [game1Bans, setGame1Bans] = useState([] as number[])
  const [game2Bans, setGame2Bans] = useState([] as number[])
  const [activeGame, setActiveGame] = useState<number>(1)

  const clearAll = () => {
    setGame1Bans([])
    setGame2Bans([])
  }

  return (
    <Container
      sx={{
        display: 'flex',
        width: '100vw',
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >
      <Stack alignItems="center">
        <Typography variant="h4" textAlign="center" gutterBottom>
          {'Fuzer cup ban tool'}
        </Typography>
        <Stack
          width={'100vw'}
          direction="row"
          gap={2}
          justifyContent="space-between"
        >
          <Stack direction="row" gap={8} marginLeft={5}>
            <Bancolumn
              game={1}
              bans={game1Bans}
              setActiveGame={setActiveGame}
              activeGame={activeGame}
              setGame1Bans={setGame1Bans}
              game1Bans={game1Bans}
              setGame2Bans={setGame2Bans}
              game2Bans={game2Bans}
            />
            <Bancolumn
              game={2}
              bans={game2Bans}
              setActiveGame={setActiveGame}
              activeGame={activeGame}
              setGame1Bans={setGame1Bans}
              game1Bans={game1Bans}
              setGame2Bans={setGame2Bans}
              game2Bans={game2Bans}
            />
          </Stack>
          <Stack
            direction="row"
            sx={{
              width: '80%',
              flexWrap: 'wrap',
              gap: 1,
              alignItems: 'flex-start'
            }}
          >
            {dota2Heroes.map(hero => (
              <Hero
                key={hero.name}
                hero={hero}
                activeGame={activeGame}
                game1Bans={game1Bans}
                game2Bans={game2Bans}
                setGame1Bans={setGame1Bans}
                setGame2Bans={setGame2Bans}
              />
            ))}
          </Stack>
        </Stack>
        <Button
          variant="contained"
          sx={{ width: '20%', margin: 5 }}
          onClick={clearAll}
        >
          <Typography>{'Clear all'}</Typography>
        </Button>
      </Stack>
    </Container>
  )
}
