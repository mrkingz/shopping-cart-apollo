import { useQuery, gql } from '@apollo/client';

export const FETCH_PRODUCTS = gql`query {
    products {
      id
      title
      image_url
      price(currency: USD)
    }
  }`;

  export const FETCH_CURRENCIES = gql`query {
    currency
  }`;