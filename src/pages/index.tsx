import styles from './index.less';
import { history } from 'umi';

export default function IndexPage() {
  return (
    <div
      onClick={() => {
        // 跳转到指定路由
        history.push('/test');
      }}
    >
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
