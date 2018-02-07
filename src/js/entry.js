import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';


export default class Entry extends Component {
  render() {
    return (
      <Card className="container">
        <CardTitle title="React Application" subtitle="This is the FXPLYR." />
      </Card>
    );
  }
}
