import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import styles from '../../scss/entry.scss';


export default class Entry extends Component {
  render() {
    return (
      <Card className="container">
        <CardTitle title="React Application" subtitle="This is the FXPLYR." />
      </Card>
    );
  }
}
