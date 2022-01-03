import axios from "axios";
import Card from "../components/Card";
import { Flex, Box } from "reflexbox";

export default function Home({movies}) {


  return (
    <Box variant="container">
      <Box my={10} as="h2">Latest Movies</Box>
      <Flex justifyContent="space-between" flexWrap='wrap'>
      {movies.map(movie => (
        <Box key={movie.id} width={1/3} px="1">
        <Card  movie={movie.attributes}/>
        </Box>
      ))}
      </Flex>
    </Box>
  );
}

export async function getServerSideProps() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await axios.get(`${API_URL}/movies?populate=*

  `);
  return {
    props: {
      movies: res.data.data,
    }
  }
}
