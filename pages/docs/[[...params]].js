//https://www.youtube.com/watch?v=ZHn726VDoIY&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=9

import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();

  const { params = [] } = router.query;
  console.log("params", params);
  if (params.length == 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }
  return <h1>Docs homepage</h1>;
}

export default Doc;
