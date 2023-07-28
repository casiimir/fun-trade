import { useParams } from "next/navigation";

export default function () {
  const params = useParams;

  console.log(params);
  return (
    <div>
      <h1>ciaao</h1>
    </div>
  );
}
