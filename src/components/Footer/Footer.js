import { Box, SimpleGrid, Stack, Text, useTheme } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

import { GitHubIcon, RssIcon, TwitterIcon } from '../icons';
import { NewsletterForm } from '../NewsletterForm';

import poweredByVercel from '../../../public/img/powered-by-vercel.svg';

const Subtitle = ({ children }) => (
  <Text textTransform={'uppercase'} fontWeight={'bold'}>
    {children}
  </Text>
);

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      as="footer"
      margin="6rem 0 0 0"
      padding="2rem 2rem 6rem 2rem"
      borderTop={`20px solid ${theme.colors.green[400]}`}
      background={theme.colors.green[50]}
    >
      <SimpleGrid minChildWidth={'250px'} gap={8} mb="4rem">
        <Stack>
          <Subtitle>APIs You Won&apos;t Hate</Subtitle>
          <Link href="/books">
            <a>Books</a>
          </Link>

          <Link href="/blog">
            <a>Blog</a>
          </Link>

          <Link href="/videos">
            <a>Videos</a>
          </Link>

          <Link href="/podcast">
            <a>Podcast</a>
          </Link>

          <Link href="/ama">
            <a>Ask us a question</a>
          </Link>
        </Stack>
        <Stack>
          <Subtitle>Community</Subtitle>
          <Link href="/community">Join our Community</Link>
          <Link href="/about">About Us</Link>
          <Link href="/about">Authors</Link>
          <Link href="/conduct">Code of Conduct</Link>
        </Stack>
        <Stack>
          <Subtitle>More help</Subtitle>
          <a href="https://calendly.com/philsturgeon">API Design Consulting</a>
        </Stack>

        <Stack>
          <Subtitle>Online</Subtitle>
          <Stack direction="row" alignItems="center">
            <GitHubIcon />{' '}
            <a
              href="https://github.com/apisyouwonthate"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </Stack>
          <Stack direction="row" alignItems="center">
            <RssIcon />

            <a href="/rss.xml" target="_blank" rel="noreferrer noopener me">
              RSS
            </a>
          </Stack>
          <Stack direction="row" alignItems="center">
            <TwitterIcon />
            <a
              href="https://twitter.com/apisyouwonthate"
              target="_blank"
              rel="noreferrer noopener me"
            >
              Twitter
            </a>
          </Stack>
        </Stack>
        <Stack>
          <Subtitle>Subscribe to our newsletter</Subtitle>
          <NewsletterForm />
        </Stack>
      </SimpleGrid>

      <Stack>
        <p>
          <a
            href="https://vercel.com?utm_source=apis-you-wont-hate&utm_campaign=oss"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image alt="Powered by Vercel" src={poweredByVercel} />
          </a>
        </p>
        <Text as="small">
          {`© ${new Date().getFullYear()} APIs You Won't Hate. All rights reserved.`}
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
