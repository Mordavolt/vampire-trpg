import type { PageServerLoad } from './$types';
import * as locations from '$lib/server/locations';
import * as domains from '$lib/server/domains';

export const load: PageServerLoad = async ({}) => {
  return { locations: locations.getAllLocations(), domains: domains.getAllDomains() };
};
