/**
 * Navigation
 *
 * @package components
 */
import { FC } from 'react';
import { NavigationLink } from '@/components/atoms/NavigationLink';
import { NAVIGATION_PATH } from '@/constants/navigation';
import styles from './styles.module.css';

/**
 * Navigation
 * @constructor
 */
export const Navigation: FC = () => (
  <nav>
    <ul className={styles.ul}>
      <NavigationLink title={'トップ'} linkPath={NAVIGATION_PATH.TOP} />
      <NavigationLink title={'新規作成'} linkPath={NAVIGATION_PATH.CREATE} />
    </ul>
  </nav>
);
