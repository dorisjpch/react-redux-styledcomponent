import React from 'react';
import classNames from 'classnames';
import { Container, Input, Button } from './styles/SearchForm';

export function SearchForm({ classes, children, ...restProps }) {
  return (
    <Container className={classNames('search', classes)} {...restProps}>
      {children}
    </Container>
  );
}

SearchForm.Input = function SearchFormInput({ classes, children, ...restProps }) {
  return (
    <Input className={classNames('search__input', classes)} {...restProps}>
      {children}
    </Input>
  );
};


SearchForm.Button = function SearchFormButton({ classes, children, ...restProps }) {
  return (
    <Button
      type="button"
      className={classNames('search__button', classes)}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default SearchForm;