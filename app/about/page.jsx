"use client"
import ProjectCard from '../projects/ProjectCard'
import { createStyles, Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';

import './page.css';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.colors.pink[6], theme.colors.orange[6]),
    },

    margin: '6rem 4rem'
  },
}));

export default function About({ title, description }) {
  const { classes } = useStyles();
  return (
    <div className='about'>
      <Paper withBorder radius="md" className={classes.card}>
        <ThemeIcon
          size="xl"
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: 'pink', to: 'orange' }}
        >
          <IconColorSwatch size={rem(28)} stroke={1.5} />
        </ThemeIcon>
        <Text size="xl" weight={500} mt="md">
          Theming documentation
        </Text>
        <Text size="sm" mt="sm" color="dimmed">
          Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components.
        </Text>
      </Paper>
    </div>
  )
}
