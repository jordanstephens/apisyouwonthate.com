import {
  Container,
  Heading,
  Stack,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';

import {
  Layout,
  FeaturedBlogPost,
  BlogPostItem,
  NewsletterCTA,
  PodcastFeed,
} from '../../components';
import { SEO } from '../../components/SEO';

import { getAllPosts } from '../../lib/blogPostLoader';

// load books, podcasts, and posts fro useStaticProps
export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

const BlogPage = ({ posts }) => {
  const [firstPost, ...otherPosts] = posts;

  let feed = otherPosts.map((post) => (
    <BlogPostItem key={post.slug} post={post} />
  ));

  feed.splice(0, 0, <PodcastFeed dark key="pcast-feed" />);

  return (
    <Layout>
      <SEO title="All articles" />
      <Container>
        <Stack spacing={8}>
          <Heading as="h1">All Articles</Heading>
          <FeaturedBlogPost post={firstPost} />
          <SimpleGrid minChildWidth="300px" spacing={8}>
            {feed}
          </SimpleGrid>
          <NewsletterCTA />
        </Stack>
      </Container>
    </Layout>
  );
};

export default BlogPage;
