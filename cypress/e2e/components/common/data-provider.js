import { faker } from "@faker-js/faker/locale/en";

export const productDataDesk = {
  DESK_AT_300_PARK_AVENUE: '300-park',
  DESK_AT_1230_SIXTH_AVENUE: '1230-aoa',
  DESK_AT_CITYSPIRE: 'cityspire',
  DESK_AT_THE_JACX: 'the-jacx',
  DESK_AT_600_FIFTH_AVENUE: '600-fifth' ,
  DESK_AT_THE_SPIRAL: 'the-spiral',
  DESK_AT_175_VARICK_STREET: '175-varick',
  DESK_AT_STUDIO_GRAND_CENTRAL: 'grand-central',
  DESK_AT_11_WEST_42ND_STREET: '11-west',
  gerRandomProduct: () => {
    return faker.helpers.arrayElement([
      productDataDesk.DESK_AT_300_PARK_AVENUE,
      productDataDesk.DESK_AT_1230_SIXTH_AVENUE,
      productDataDesk.DESK_AT_CITYSPIRE,
      productDataDesk.DESK_AT_THE_JACX,
      productDataDesk.DESK_AT_600_FIFTH_AVENUE,
      productDataDesk.DESK_AT_THE_SPIRAL,
      productDataDesk.DESK_AT_175_VARICK_STREET,
      productDataDesk.DESK_AT_STUDIO_GRAND_CENTRAL,
      productDataDesk.DESK_AT_11_WEST_42ND_STREET
    ]);
  },
};
