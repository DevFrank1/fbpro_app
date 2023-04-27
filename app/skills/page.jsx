"use client"

import {
    createStyles,
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Anchor,
    Group,
    rem,
} from '@mantine/core';
import {
    IconCreditCard,
    IconBuildingBank,
    IconRepeat,
    IconReceiptRefund,
    IconReceipt,
    IconReceiptTax,
    IconReport,
    IconCashBanknote,
    IconCoin,
} from '@tabler/icons-react';

import HTML_Logo from '../../public/html_.svg';
import CSS_Logo from '../../public/css_.svg';
import JS_Logo from '../../public/javascript_.svg';
import React_Logo from '../../public/react_.svg';
import Firebase_Logo from '../../public/firebase_.svg';
import Node_Logo from '../../public/nodejs_.svg';
import Express_Logo from '../../public/express_.svg';
import MongoDB_Logo from '../../public/mongodb_.svg';
import Next_Logo from '../../public/next-js_.svg';
import Python_Logo from '../../public/python_.svg';
import Figma_Logo from '../../public/figma_.svg';
import AdobeXD_Logo from '../../public/adobe-xd_.svg';
import Git_Logo from '../../public/git_.svg';
import Github_Logo from '../../public/github_.svg';
import Image from 'next/image';

const mockdata = [
    { title: 'Html', icon: HTML_Logo, color: 'violet' },
    { title: 'Css', icon: CSS_Logo, color: 'indigo' },
    { title: 'Javascript', icon: JS_Logo, color: 'blue' },
    { title: 'React', icon: React_Logo, color: 'green' },
    { title: 'Firebase', icon: Firebase_Logo, color: 'orange' },
    { title: 'Next.js', icon: Next_Logo, color: 'teal' },
    { title: 'Node.js', icon: Node_Logo, color: 'cyan' },
    { title: 'Express.js', icon: Express_Logo, color: 'pink' },
    { title: 'Mango db', icon: MongoDB_Logo, color: 'red' },
    { title: 'Python', icon: Python_Logo, color: 'red' },
];

const tooldata = [
    { title: 'Figma', icon: Figma_Logo, color: 'violet' },
    { title: 'Adobe XD', icon: AdobeXD_Logo, color: 'indigo' },
    { title: 'Git', icon: Git_Logo, color: 'blue' },
    { title: 'Github', icon: Github_Logo, color: 'green' },
];

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        minHeight: '75vh',
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
    },

    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: theme.radius.md,
        height: rem(90),
        maxWidth: '200px',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease, transform 100ms ease',

        '&:hover': {
            boxShadow: theme.shadows.md,
            transform: 'scale(1.05)',
        },
    },
}));

export default function Skills() {
    const { classes, theme } = useStyles();

    const items = mockdata.map((item) => (
        <UnstyledButton key={item.title} className={classes.item}>
            <Image src={item.icon} height={36} width={36} />
            {/* <item.icon color={theme.colors[item.color][6]} size="2rem" /> */}
            <Text size="xs" mt={7}>
                {item.title}
            </Text>
        </UnstyledButton>
    ));
    const tools = tooldata.map((item) => (
        <UnstyledButton key={item.title} className={classes.item}>
            <Image src={item.icon} height={36} width={36} />
            {/* <item.icon color={theme.colors[item.color][6]} size="2rem" /> */}
            <Text size="xs" mt={7}>
                {item.title}
            </Text>
        </UnstyledButton>
    ));
    return (
        <Card className={classes.card}>
            <Group position="apart" my='2rem'>
                <Text className={classes.title}>Tech Stack that have ability to use</Text>
                <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
                    {/* + 21 other services */}
                </Anchor>
            </Group>
            <SimpleGrid cols={6} mt="md"
                breakpoints={[
                    { maxWidth: 'md', cols: 4, spacing: 'md' },
                    { maxWidth: 'sm', cols: 3, spacing: 'sm' },
                    { maxWidth: 'xs', cols: 2, spacing: 'sm' },
                ]}>
                {items}
            </SimpleGrid>
            <Group position="apart" my='2rem'>
                <Text className={classes.title}>Tools</Text>
                <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
                    {/* + 21 other services */}
                </Anchor>
            </Group>
            <SimpleGrid cols={6} mt="md"
                breakpoints={[
                    { maxWidth: 'md', cols: 4, spacing: 'md' },
                    { maxWidth: 'sm', cols: 3, spacing: 'sm' },
                    { maxWidth: 'xs', cols: 2, spacing: 'sm' },
                ]}>
                {tools}
            </SimpleGrid>
        </Card>
    )
}
