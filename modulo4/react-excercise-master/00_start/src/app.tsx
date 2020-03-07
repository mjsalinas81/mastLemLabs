import * as React from "react";
import { MembersTableComponent } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DetailMemberComponent } from "./components/detailMember/detailMember.component";
/*
export const App: React.FunctionComponent = () => {
  return <MembersTableComponent />;
};
*/

interface Props {}

export class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MembersTableComponent} />
          <Route path="/detailMember/:id" component={DetailMemberComponent} />
        </Switch>
      </Router>
    );
  }
}