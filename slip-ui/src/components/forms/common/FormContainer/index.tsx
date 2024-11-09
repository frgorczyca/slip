import { Card, Group, Text, Title } from '@mantine/core';
import { ReactNode } from 'react';

type FormContainerProps = {
  children: ReactNode;
  title: string;
};

export const FormContainer = ({ children, title }: FormContainerProps) => {
  return (
    <Card withBorder radius="md" w={400}>
      <Card.Section p={8} withBorder>
        <Title order={4} ta={'start'}>
          {title}
        </Title>
      </Card.Section>
      <Card.Section p={8} withBorder>
        <Group justify="space-between" display="block">
          {children}
        </Group>
      </Card.Section>
    </Card>
  );
};
