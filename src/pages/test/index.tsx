import styles from './index.less';
import { Component } from 'react';
import TestView from './views/TestView';

class Test extends Component {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    console.log('componentDidMount===第一次render之后触发');
  }
  componentDidUpdate(prevProps: Readonly<{}>) {
    console.log('componentDidUpdate===更新', prevProps, this.props);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount===卸载');
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>test</h1>
        <TestView />
      </div>
    );
  }
}

export default Test;
