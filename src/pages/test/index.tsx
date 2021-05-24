import styles from './index.less';
import { Component } from 'react';
import TestView from './views/TestView';
import { Button } from 'antd';

const dates = [{ name: 'join', age: 24 }];

export interface Item {
  name: string;
  age: number;
}

class Test extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      test: 1,
    };
  }
  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('componentDidMount===第一次render之后触发');
  }
  componentDidUpdate(prevProps: Readonly<{}>) {
    // eslint-disable-next-line no-console
    console.log('componentDidUpdate===更新', prevProps, this.props);
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-console
    console.log('componentWillUnmount===卸载');
  }
  renderTest = (type: string) => {
    return type;
  };

  render() {
    return (
      <div>
        <div>
          {dates.map((item: Item, index: number) => (
            <div key={index.toString()}>
              <div>{item?.name}</div>
              <div>{item?.age}</div>
            </div>
          ))}
        </div>
        <div />
        <h1 className={styles.title}>test</h1>
        <TestView />
        <Button>1</Button>
      </div>
    );
  }
}

export default Test;
