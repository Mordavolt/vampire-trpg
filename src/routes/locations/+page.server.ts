import type { PageServerLoad } from './$types';
import * as locations from '$lib/server/locations';

export const load: PageServerLoad = async ({}) => {
	return { locations: locations.getAllLocations() };
};
