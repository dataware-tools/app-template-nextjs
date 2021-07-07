import { homepage } from "../../package.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { APP_ROUTE } from "utils/index";
import { IndexPage } from "components/pages/IndexPage";

const Page = (): JSX.Element | null => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Router basename={homepage}>
      <Switch>
        <Route exact path={APP_ROUTE.HOME}>
          <IndexPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Page;
