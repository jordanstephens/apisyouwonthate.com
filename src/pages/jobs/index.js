import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';

import { JobPostItem, Layout, Seo } from '../../components';
import { getAllJobs } from '../../lib/jobLoader';

// load books, podcasts, and posts fro useStaticProps
export const getStaticProps = async () => {
  const jobs = await getAllJobs();

  return {
    props: {
      jobs: jobs.filter((job) => job?.frontmatter.published === true),
    },
  };
};

const JobsPage = ({ jobs }) => {
  return (
    <Layout>
      <Seo title="Jobs for API Developers and Designers" />
      <Container>
        <Stack>
          <Heading as="h1">Jobs for API Developers and Designers</Heading>
          <SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
            {jobs.map((job) => (
              <div key={job.id || job.slug}>
                <JobPostItem job={job} />
              </div>
            ))}
          </SimpleGrid>
          <p>
            To add a job, make a pull request to{' '}
            <a href="https://github.com/apisyouwonthate/apisyouwonthate.com">
              the project repository
            </a>{' '}
            and use{' '}
            <a href="https://github.com/apisyouwonthate/apisyouwonthate.com/blob/master/src/content/jobs/primitive-php-developer.mdx">
              this
            </a>{' '}
            as a template to filling out your posting.
          </p>
          <p>
            {'If you would rather, you can '}
            <a href="mailto:mjtrask@gmail.com, mbifulco@live.com?subject=New API Job!">
              send us an email
            </a>
            , and we&apos;ll take care of the rest.
          </p>
        </Stack>
      </Container>
    </Layout>
  );
};

export default JobsPage;
