import { Box, Button, Stack } from '@mui/material'
import { useState } from 'react'
import Image from 'next/image'
import { PlaceholderImage } from './Placeholder'

const Bancolumn = ({ src }: { src: string }) => {
  const banSlots = 10
  const [defaultSrc, setDefaultSrc] = useState('/default-image.jpg')
  const hero = { image: '/hero-image.jpg', name: 'Hero' }

  const handleClick = () => {
    setDefaultSrc('/default-image.jpg')
  }

  return (
    <Stack sx={{ backgroundColor: '#141414' }} width={100}>
      {Array.from({ length: banSlots }).map((_, index) => (
        <Button key={index} onClick={handleClick}>
          <Box sx={{ boxShadow: 3 }} height={50}>
            {src ? (
              <Image
                width={90}
                height={50}
                src={src}
                placeholder="blur"
                alt={hero.name}
              />
            ) : (
              <PlaceholderImage />
            )}
          </Box>
        </Button>
      ))}
    </Stack>
  )
}

export { Bancolumn }
