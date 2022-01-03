import axios from "axios";
import Card from "../components/Card";

export default function Home({movies}) {

  console.log(movies);

  return (
    <div>
      {movies.map(movie => (
        <Card key={movie.id} movie={movie.attributes}/>
      ))}
    </div>
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
