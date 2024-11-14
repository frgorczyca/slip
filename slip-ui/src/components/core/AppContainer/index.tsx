import { Container } from '@mantine/core';
import { ReactNode } from 'react';

import styles from './styles.module.css';

type AppContainerProps = {
  children: ReactNode;
};

export const AppContainer = ({ children }: AppContainerProps) => {
  return <Container className={styles.container}>{children}</Container>;
};
