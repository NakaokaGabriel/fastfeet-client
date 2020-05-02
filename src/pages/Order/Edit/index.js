import React from 'react';

// import { Container } from './styles';
import { Container } from '~/components/Container/styles';
import Header from '~/components/Header/Default';
import { Background } from '~/components/Background/styles';
import { FormGroup, InputGroup } from '~/components/Form/styles';

export default function Edit() {
  return (
    <Container>
      <Header title="Edição de encomendas" />
      <Background background>
        <FormGroup>
          <InputGroup>
            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="destinatario">Destinatário</label>
              <input type="text" placeholder="Ludwig van Beethoven" />
            </div>

            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="entregador">Entregador</label>
              <input type="text" placeholder="Ludwig van Beethoven" />
            </div>
          </InputGroup>

          <InputGroup>
            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="produto">Nome do produto</label>
              <input type="text" placeholder="Ludwig van Beethoven" />
            </div>
          </InputGroup>
        </FormGroup>
      </Background>
    </Container>
  );
}
