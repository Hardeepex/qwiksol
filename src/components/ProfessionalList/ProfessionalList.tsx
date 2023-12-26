import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PROFESSIONALS = gql`
  query getProfessional {
    professionals {
      nodes {
        title
        uri
        link
        content
        categories {
          nodes {
            name
            slug
            taxonomyName
            uri
          }
        }
        slug
      }
    }
  }
`;

const ProfessionalList = () => {
  const { loading, error, data } = useQuery(GET_PROFESSIONALS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.professionals.nodes.map((professional: any) => (
    <div key={professional.slug}>
      <h2>{professional.title}</h2>
      <p>{professional.uri}</p>
      <a href={professional.link}>Link</a>
      <p>{professional.content}</p>
      <ul>
        {professional.categories.nodes.map((category: any) => (
          <li key={category.slug}>{category.name}</li>
        ))}
      </ul>
    </div>
  ));
};

export default ProfessionalList;
