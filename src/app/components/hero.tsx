import Image from 'next/image'
import type { Hero } from '../util/entity'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const Hero = ({ hero }: { hero: Hero }) => {
  return (
    <Button>
      <Box sx={{ boxShadow: 3 }} height={50}>
        <Image width={90} height={50} src={hero.image} alt={hero.name} />
      </Box>
    </Button>
  )
}

export { Hero }
