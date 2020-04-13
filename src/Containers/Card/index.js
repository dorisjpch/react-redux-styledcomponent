import React from 'react';
import classNames from 'classnames';
import { Container, Body, Title, Text, Button } from './styles/Card';

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classNames('card', classes)} {...restProps}>
      {children}
    </Container>
  );
}

Card.Body = function CardBody({ classes, children, ...restProps }) {
  return (
    <Body className={classNames('card__body', classes)} {...restProps}>
      {children}
    </Body>
  );
};

Card.Title = function CardTitle({ classes, children, ...restProps }) {
  return (
    <Title className={classNames('card__title', classes)} {...restProps}>
      {children}
    </Title>
  );
};

Card.Text = function CardText({ classes, children, ...restProps }) {
  return (
    <Text className={classNames('card__text', classes)} {...restProps}>
      {children}
    </Text>
  );
};

Card.Button = function CardButton({ classes, children, deletedCard, ...restProps }) {
 return (
    <Button
      type="button"
      className={classNames('card__button', classes)}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default Card;