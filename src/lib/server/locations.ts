export interface Location {
	id: string;
	name: string;
	description: string;
	image: string;
	map_marker_image: string;
	regnant: string;
	coordinates: {
		lat: number;
		lng: number;
	};
}

const locations: Location[] = [
	{
		id: '1',
		name: 'Rihards car service',
		description: 'The office and centre of operations for Rihards the data broker Nosferatu.',
		regnant: 'Rihards',
		image: 'https://placehold.co/600x400?text=Central+Park',
		map_marker_image: 'car.png',
		coordinates: { lat: 56.955049, lng: 24.071659 }
	},
	{
		id: '2',
		name: 'RTU Campus',
		description:
			'Riga Technical University campus holding IT, Physics, Chemistry, Construction and some other faculties.',
		regnant: 'Rihards',
		image: 'https://placehold.co/600x400?text=Eiffel+Tower',
		map_marker_image: 'car.png',
		coordinates: { lat: 56.95193, lng: 24.081364 }
	},
	{
		id: '3',
		name: 'Passenger Port',
		description: 'Riga passenger port accepting cruise ships and other passenger vessels.',
		regnant: 'Anastasija',
		image: 'https://placehold.co/600x400?text=Sydney+Opera+House',
		map_marker_image: 'port.png',
		coordinates: { lat: 56.956597, lng: 24.096075 }
	},
	{
		id: '4',
		name: 'Cargo Port',
		description: 'Riga cargo port loading and offloading container ships. The port continues down the river for many kilometers. This is the HQ location.',
		regnant: 'Anastasija',
		image: 'TODO',
		map_marker_image: 'cargo_port.png',
		coordinates: { lat: 56.977276, lng: 24.09445 }
	},
	{
		id: '5',
		name: 'Audreys Crypt',
		description: 'Audrey\'s haven, a gift from her sire Andris.',
		regnant: 'Andris',
		image: 'TODO',
		map_marker_image: 'crypt.png',
		coordinates: { lat: 56.971887, lng: 24.143514 }
	},
	{
		id: '6',
		name: 'Edgars Church',
		description: 'Edgar\'s haven. Has a secret bunker entrance underneath. The bunker is haunted by the ghost of a communist doomsday prepper.',
		regnant: 'Rihards',
		image: 'TODO',
		map_marker_image: 'church.png',
		coordinates: { lat: 56.950251, lng: 24.071943 }
	},
	{
		id: '7',
		name: 'James appartment building',
		description: 'James\'s haven. Apartment in a soviet apartment building. Windows covered with cardboard.',
		regnant: '???',
		image: 'TODO',
		map_marker_image: 'appartment.png',
		coordinates: { lat: 56.959889, lng: 24.028703 }
	},
	{
		id: '8',
		name: 'Felixs hospital',
		description: 'Filix\'s haven and workplace. Top hospital in Riga.',
		regnant: '???',
		image: 'TODO',
		map_marker_image: 'hospital.png',
		coordinates: { lat: 56.931609, lng: 24.065486 }
	},
	{
		id: '9',
		name: 'Mishas gym',
		description: 'The centre of operations for Mihails, the sheriff of Riga.',
		regnant: 'Mihails',
		image: 'TODO',
		map_marker_image: 'boxing-gloves.png',
		coordinates: { lat: 56.941924, lng: 24.115902 }
	},
	{
		id: '10',
		name: 'Church of the Resurrection (Morgue)',
		description: 'Morgue, storing bodies before burial. Audrey\'s feeding ground.',
		regnant: 'Andris',
		image: 'TODO',
		map_marker_image: 'morgue.png',
		coordinates: { lat: 56.971816, lng: 24.145988 }
	}
];

export function getAllLocations(): Location[] {
	return locations;
}

export function getLocationById(id: string): Location | undefined {
	return locations.find((location) => location.id === id);
}
