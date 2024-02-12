import { faker } from "@faker-js/faker/locale/en";

export const routeProductDesk = {
  DESK_AT_300_PARK_AVENUE: '300-park',
  DESK_AT_1230_SIXTH_AVENUE: '1230-aoa',
  DESK_AT_CITYSPIRE: 'cityspire',
  DESK_AT_THE_JACX: 'the-jacx',
  DESK_AT_600_FIFTH_AVENUE: '600-fifth' ,
  DESK_AT_THE_SPIRAL: 'the-spiral',
  DESK_AT_175_VARICK_STREET: '175-varick',
  DESK_AT_STUDIO_GRAND_CENTRAL: 'grand-central',
  DESK_AT_11_WEST_42ND_STREET: '11-west',
  gerRandomRouteProduct: () => {
    return faker.helpers.arrayElement([
      routeProductDesk.DESK_AT_300_PARK_AVENUE,
      routeProductDesk.DESK_AT_1230_SIXTH_AVENUE,
      routeProductDesk.DESK_AT_CITYSPIRE,
      routeProductDesk.DESK_AT_THE_JACX,
      routeProductDesk.DESK_AT_600_FIFTH_AVENUE,
      routeProductDesk.DESK_AT_THE_SPIRAL,
      routeProductDesk.DESK_AT_175_VARICK_STREET,
      routeProductDesk.DESK_AT_STUDIO_GRAND_CENTRAL,
      routeProductDesk.DESK_AT_11_WEST_42ND_STREET
    ]);
  },
};
export const routeProductMeeting = {
    KOREAN_TOWN: "11-west/korea-town",
    ROOM_4C: "175-varick/room-4c",
    BREAKOUT: "45-rock/breakout",
    HUDDLE: "45-rock/huddle",
    TIMES_SQUARE: "600-fifth/times-square",
    WEST_VILLAGE: "1230-aoa/west-village",
    ASTORIA: "11-west/astoria",
    SOHO: "600-fifth/soho",
    ALPHABET_CITY: "1230-aoa/alfhabet-city",
    HELLS_KITCHEN: "300-park/hells-kitchen",
    MORGAN_LIBRARY: "11-west/morgan-library",
    ROOM_4B: "175-varick/room-4b",
    c5B: "the-jacx/5B",
    c5C: "the-jacx/5C",
    NOLITA: "1230-aoa/nolita",
    ROOM_2A: "175-varick/room_2a",
    getRandomRouteProductsMeetings: () => {
        return faker.helpers.arrayElement([
            routeProductMeeting.KOREAN_TOWN,
            routeProductMeeting.ROOM_4C,
            routeProductMeeting.BREAKOUT,
            routeProductMeeting.HUDDLE,
            routeProductMeeting.TIMES_SQUARE,
            routeProductMeeting.WEST_VILLAGE,
            routeProductMeeting.ASTORIA,
            routeProductMeeting.SOHO,
            routeProductMeeting.ALPHABET_CITY,
            routeProductMeeting.HELLS_KITCHEN,
            routeProductMeeting.MORGAN_LIBRARY,
            routeProductMeeting.ROOM_4B,
            routeProductMeeting.c5B,
            routeProductMeeting.c5C,
            routeProductMeeting.NOLITA,
            routeProductMeeting.ROOM_2A
        ])
    }
}
