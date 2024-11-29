'use client'

import { Button, Container, Stack, Typography } from '@mui/material'
import dota2Heroes from './resources/dota2_heroes.json'
import { Hero } from './components/hero'
import { Bancolumn } from './components/ban_column'
import { useEffect, useState } from 'react'

export default function Page() {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const message =
        'You have unsaved changes. Are you sure you want to leave?'
      event.returnValue = message
      return message
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

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
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Stack alignItems="center" sx={{ flexGrow: 1 }}>
        <Typography
          variant="h4"
          textAlign="center"
          color="whitesmoke"
          sx={{ textShadow: 5 }}
          gutterBottom
        >
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
              height: '100%',
              gap: 1,
              alignItems: 'flex-start',
              marginTop: '2rem'
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
          disabled={game1Bans.length === 0 && game2Bans.length === 0}
          sx={{
            width: '20%',
            margin: 5,
            backgroundColor: 'whitesmoke',
            color: 'black',
            marginTop: 'auto'
          }}
          onClick={clearAll}
        >
          <Typography fontWeight="bold">{'Clear all'}</Typography>
        </Button>
      </Stack>
    </Container>
  )
}
