import Select, { components, IndicatorsContainerProps } from 'react-select';
import { Controller } from 'react-hook-form';
import { customStyles, StyledIndicatorsContainer, Container } from './styles';
import { ISelectProps } from './interface';

export const SelectComponent = ({
  name,
  control,
  options,
  id,
  defaultValue,
  menuIsOpen,
  justifyContent,
  placeholder
}: ISelectProps) => {
  const IndicatorsContainer = (props: IndicatorsContainerProps) => {
    return (
      <StyledIndicatorsContainer>
        <components.IndicatorsContainer {...props} />
      </StyledIndicatorsContainer>
    );
  };

  return (
    <Container justifyContent={justifyContent}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Select
            id={id}
            styles={customStyles}
            defaultValue={defaultValue}
            placeholder={placeholder}
            defaultMenuIsOpen={menuIsOpen}
            components={{ IndicatorsContainer }}
            options={options}
            onBlur={onBlur}
            onChange={value => onChange(value.value)}
            value={value?.label}
            name={name}
            ref={ref}
          />
        )}
        rules={{ required: true }}
      />
    </Container>
  );
};
