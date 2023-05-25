import {
  Container,
  Header,
  HeaderText,
  Form,
  InputContainer,
  InputTextError
} from './styles';
import { Input, Button } from '../../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createRestaurantSchemema } from '../../utils/schemas';
import { useParams } from 'react-router-dom';

export const Restaurant = () => {
  const { restaurantId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(createRestaurantSchemema)
  });

  console.log('RESTAURANT ID:', restaurantId);

  return (
    <Container>
      <Header>
        <HeaderText>Add a restaurant</HeaderText>
      </Header>
      <Form onSubmit={handleSubmit(data => console.log(data))}>
        <InputContainer>
          <Input
            register={register}
            inputName="name"
            inputLabel="Name"
            width="100%"
          />
          {errors.name && (
            <InputTextError>{errors.name.message?.toString()}</InputTextError>
          )}
        </InputContainer>
        <InputContainer>
          <Input
            register={register}
            inputName="cnpj"
            inputLabel="CNPJ"
            width="100%"
          />
          {errors.cnpj && (
            <InputTextError>{errors.cnpj.message?.toString()}</InputTextError>
          )}
        </InputContainer>
        <InputContainer>
          <Input
            register={register}
            inputName="segment"
            inputLabel="Segment"
            width="100%"
          />
          {errors.segment && (
            <InputTextError>
              {errors.segment.message?.toString()}
            </InputTextError>
          )}
        </InputContainer>

        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};
