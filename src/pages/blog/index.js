import React from 'react';
import { Link, graphql } from 'gatsby';

// bootstrap
import { Container, Col, Row } from 'react-bootstrap';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { FullWidthFeature } from '../../components/FullWidthFeature';

import './BlogPage.module.css';

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <Container>
      <Row>
        <Col>
          {data.allMdx.nodes.map(node => {
            return (
              <article key={node.id}>
                <Link to={`blog/${node.frontmatter.slug}`}>
                  <FullWidthFeature
                    authorName="Mike Bifulco"
                    date="Apr 4"
                    title={node.frontmatter.title}
                    subtitle={node.frontmatter.subtitle || node.excerpt}
                  />
                </Link>
              </article>
            );
          })}
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default BlogPage;

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { type: { eq: "blog" } } }) {
      nodes {
        id
        code {
          body
          scope
        }
        frontmatter {
          slug
          title
        }
      }
    }
  }
`;
