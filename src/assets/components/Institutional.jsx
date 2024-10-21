import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import CoffeeIcon from '../icons/CoffeeIcon';
import institutionalStyles from './institutional.module.css';
export const Institutional = () => {
  return (
    <section>
      <Container fluid className='mt6 '>
        <Grid>
          <GridRow className='justify-center flex '>
            <GridColumn
              mobile={16}
              tablet={8}
              computer={8}
              className={`pa6 flex  tc pv6  flex-column justify-around `}
            >
              <h5 className='f4'>Welcome to Coffee Shop</h5>
              <CoffeeIcon
                className={`${institutionalStyles.svgContainer}`}
              ></CoffeeIcon>
            </GridColumn>
            <GridColumn
              mobile={16}
              tablet={8}
              computer={8}
              className={`pa6 tc flex flex-column bg-black-90  justify-around `}
            >
              <h5 className='gold tc f4'>Only the best coffee.</h5>
              <p className='white tj f4 '>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Dolor at
                class phasellus a amet vitae. Nostra amet amet netus, ultrices
                lectus sollicitudin himenaeos. Imperdiet tristique tortor
                consectetur integer hac porta pretium phasellus nascetur. Amet
                habitant cursus; integer justo aptent nascetur etiam. Mus congue
                laoreet nunc faucibus nunc lorem, maximus mattis mauris. Potenti
                ridiculus posuere arcu lectus; adipiscing vitae{' '}
              </p>
            </GridColumn>

            <GridColumn
              mobile={16}
              tablet={8}
              computer={8}
              className={`pa5 tc flex flex-column  bg-gold   justify-center `}
            >
              <div>
                <h5 className='pv6 tc black-90 f1'>Pure Grain Coffee</h5>
              </div>
            </GridColumn>
            <GridColumn
              mobile={16}
              tablet={8}
              computer={8}
              style={{
                padding: '0',
                maxHeight: '70vh',
                height: '100%',
                overflow: 'hidden',
              }}
              className={`pa5 flex  ${institutionalStyles.imageStylesContainer}   tc  flex-column justify-around `}
            ></GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </section>
  );
};
