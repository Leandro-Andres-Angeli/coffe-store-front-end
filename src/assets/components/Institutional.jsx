import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
export const Institutional = () => {
  return (
    <section>
      <Container fluid className='mt5 '>
        <Grid className='justify-center w-90'>
          <GridRow>
            <GridColumn width={6} className='pa3'>
              <h5>Welcome to Coffee Shop</h5>
              <img
                width='30'
                height='30'
                src='https://img.icons8.com/offices/30/espresso-cup.png'
                alt='espresso-cup'
              />
            </GridColumn>
            <GridColumn width={6} className='pa3  bg-black-90 '>
              <h5 className='gold'>Only the best coffee.</h5>
              <p className='white'>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Dolor at
                class phasellus a amet vitae. Nostra amet amet netus, ultrices
                lectus sollicitudin himenaeos. Imperdiet tristique tortor
                consectetur integer hac porta pretium phasellus nascetur. Amet
                habitant cursus; integer justo aptent nascetur etiam. Mus congue
                laoreet nunc faucibus nunc lorem, maximus mattis mauris. Potenti
                ridiculus posuere arcu lectus; adipiscing vitae{' '}
              </p>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </section>
  );
};
