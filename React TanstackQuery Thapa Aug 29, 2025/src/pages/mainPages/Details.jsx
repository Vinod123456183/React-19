import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchIndPost } from "../../api/Api";
const Details = () => {
  const { id } = useParams();

  const { data, isPending, isError } = useQuery({
    queryKey: ["post"],
    queryFn: () => fetchIndPost(id),
  });
  console.log(data);

  if (isPending) return <p>Loading</p>;
  if (isError) return <p>Loading</p>;

  return (
    <div>
      <h1 className="text-3xl">Hello {id} </h1>
      <h3 className="font-semibold">{data.id}</h3>
      <h3 className="font-semibold">{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default Details;
