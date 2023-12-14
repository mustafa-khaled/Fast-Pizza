import { useRouteError } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

import LinkButton from "./LinkButton";
import Container from "./Container";

function Error() {
  const error = useRouteError();

  return (
    <Container>
      <div className="flex h-[calc(100vh-70px)] flex-col items-center justify-center gap-[10px] text-center">
        <MdErrorOutline className="text-5xl text-gray" />
        <h1 className="text-gray">Something went wrong.</h1>
        <p>{error.data || error.message}</p>

        <LinkButton to="-1">&larr; Go back</LinkButton>
      </div>
    </Container>
  );
}

export default Error;
