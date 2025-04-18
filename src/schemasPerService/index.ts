import * as dolomiteSchemas from '@datr.tech/cargo-router-validation-schemas-dolomite';
import * as entitySchemas from '@datr.tech/cargo-router-validation-schemas-entity';
import * as freightSchemas from '@datr.tech/cargo-router-validation-schemas-freight';
import * as granul8Schemas from '@datr.tech/cargo-router-validation-schemas-granul8';
import * as personaSchemas from '@datr.tech/cargo-router-validation-schemas-persona';
import * as procSchemas from '@datr.tech/cargo-router-validation-schemas-proc';

export const schemasPerService = [
  {
    schemas: dolomiteSchemas,
  },
  {
    schemas: entitySchemas,
  },
  {
    schemas: freightSchemas,
  },
  {
    schemas: granul8Schemas,
  },
  {
    schemas: personaSchemas,
  },
  {
    schemas: procSchemas,
  },
];
