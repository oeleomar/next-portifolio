import P from 'prop-types';
import * as Styled from './styles';

export const InputComponent = ({
  labelText,
  id,
  placeholder,
  type,
  isRequired = false,
}) => {
  return (
    <Styled.Container>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={isRequired}
        id={id}
        name={type}
      />
    </Styled.Container>
  );
};

InputComponent.propTypes = {
  labelText: P.string.isRequired,
  id: P.string.isRequired,
  placeholder: P.string.isRequired,
  type: P.string.isRequired,
  isRequired: P.bool,
};
