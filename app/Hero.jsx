import Link from "next/link";
import { createStyles, Container, Text, Button, Group, rem, Avatar } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

import NextImage from '../public/next.svg';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 6rem',
  },

  inner: {
    position: 'relative',
    paddingTop: rem(96),
    paddingBottom: rem(96),

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan('sm')]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={750} className={classes.inner} sx={{margin: 0}}>
        <h1 className={classes.title}>
          Hi<span style={{ color: 'orange' }}>,</span> I<span style={{ color: 'orange' }}>'</span>m
          <br />
          <Text component="span" variant="gradient" gradient={{ from: 'cyan', to: 'black' }} inherit>
            Farid Baylarzade
          </Text>{' '}
          {/* <TypeAnimation
              style={{display: 'block', color: 'black'}}
              cursor={true}
              sequence={['Farid Baylarzade', 2000]} 
              speed={1}
              repeat={Infinity}/> */}
        </h1>

        <Text className={classes.description} color="dimmed">
          Build fully functional accessible web applications with ease – Mantine includes more than
          100 customizable components and hooks to cover you in any situation
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftIcon={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
      <Avatar  radius={70} size={400} src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sam-worthington-avatar-the-way-of-the-water-1670323169.jpg?crop=0.528xw:1.00xh;0.134xw,0&resize=1200:*'/>
    </div>
  );
}