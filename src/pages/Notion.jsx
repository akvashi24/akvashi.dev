import { useEffect } from "react";
import { fetchAccessToken } from "../api/auth";
import Heading from "../components/typography/Heading";
import { useSearchParams } from "react-router-dom";

const Notion = () => {
  let [searchParams] = useSearchParams();

  const code = searchParams.get("code");
  useEffect(() => {
    fetchAccessToken("notion", code).then((token) => {
      console.log(token);
    });
  }, [code]);

  return (
    <section>
      <div className="mb-16">
        <Heading>Notion Connected!</Heading>
        <span>Your notes are in safe hands. Feel free to close this tab.</span>
      </div>
    </section>
  );
};

// https://akvashi.dev/notion?code=0303f779-0964-4a22-941a-ac3869dba3d6&state=

export default Notion;
