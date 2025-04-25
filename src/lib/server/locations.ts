export interface Location {
  id: string;
  name: string;
  description: string;
  image: string;
  map_marker_image: string;
  regnant: string;
  destroyed: boolean;
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
    image: 'garage.png',
    map_marker_image: 'garage.svg',
    destroyed: true,
    coordinates: { lat: 56.955049, lng: 24.071659 }
  },
  {
    id: '2',
    name: 'RTU Campus',
    description:
      'Riga Technical University campus holding IT, Physics, Chemistry, Construction and some other faculties.',
    regnant: 'Rihards',
    image: 'university.png',
    map_marker_image: 'university.svg',
    destroyed: false,
    coordinates: { lat: 56.95193, lng: 24.081364 }
  },
  {
    id: '3',
    name: 'Passenger Port',
    description: 'Riga passenger port accepting cruise ships and other passenger vessels.',
    regnant: 'Anastasija',
    image: 'passenger_port.png',
    map_marker_image: 'passenger_port.svg',
    destroyed: false,
    coordinates: { lat: 56.956597, lng: 24.096075 }
  },
  {
    id: '4',
    name: 'Cargo Port',
    description:
      'Riga cargo port loading and offloading container ships. The port continues down the river for many kilometers. This is the HQ location.',
    regnant: 'Anastasija',
    image: 'cargo_port.png',
    map_marker_image: 'cargo_port.svg',
    destroyed: false,
    coordinates: { lat: 56.977276, lng: 24.09445 }
  },
  {
    id: '5',
    name: 'Audreys Crypt',
    description: "Audrey's haven, a gift from her sire Andris.",
    regnant: 'Andris',
    image: 'crypt.png',
    map_marker_image: 'crypt.svg',
    destroyed: true,
    coordinates: { lat: 56.971887, lng: 24.143514 }
  },
  {
    id: '6',
    name: 'Edgars Church',
    description:
      "Edgar's haven. Has a secret bunker entrance underneath. The bunker is haunted by the ghost of a communist doomsday prepper.",
    regnant: 'Rihards',
    image: 'church.png',
    map_marker_image: 'church.svg',
    destroyed: false,
    coordinates: { lat: 56.950251, lng: 24.071943 }
  },
  {
    id: '7',
    name: 'James apartment building',
    description:
      "James's haven. Apartment in a soviet apartment building. Windows covered with cardboard.",
    regnant: '???',
    image: 'apartment.png',
    map_marker_image: 'apartment.svg',
    destroyed: false,
    coordinates: { lat: 56.959889, lng: 24.028703 }
  },
  {
    id: '8',
    name: 'Felixs hospital',
    description: "Felix's haven and workplace. Top hospital in Riga.",
    regnant: '???',
    image: 'hospital.png',
    map_marker_image: 'hospital.svg',
    destroyed: false,
    coordinates: { lat: 56.931609, lng: 24.065486 }
  },
  {
    id: '9',
    name: 'Mishas gym',
    description: 'The centre of operations for Mihails, the sheriff of Riga.',
    regnant: 'Mihails',
    image: 'boxing.png',
    map_marker_image: 'boxing.svg',
    destroyed: false,
    coordinates: { lat: 56.941924, lng: 24.115902 }
  },
  {
    id: '10',
    name: 'Church of the Resurrection (Morgue)',
    description: "Morgue, storing bodies before burial. Audrey's feeding ground.",
    regnant: 'Andris',
    image: 'morgue.png',
    map_marker_image: 'morgue.svg',
    destroyed: true,
    coordinates: { lat: 56.971816, lng: 24.145988 }
  },
  {
    id: '11',
    name: 'Boat Restaurant',
    description: 'Restaurant on a boat. Neutral territory. Serve fried fish and chips mostly.',
    regnant: '???',
    image: 'restaurant.png',
    map_marker_image: 'restaurant.svg',
    destroyed: false,
    coordinates: { lat: 56.952101, lng: 24.097885 }
  },
  {
    id: '12',
    name: 'Liela Gilde',
    description: 'The Grand Guild. Historical merchant guild headquarters. Princes haven.',
    regnant: 'Sergejs',
    image: 'gilde.png',
    map_marker_image: 'gilde.svg',
    destroyed: true,
    coordinates: { lat: 56.949814, lng: 24.108094 }
  },
  {
    id: '13',
    name: 'Brasa prison',
    description: 'An old prison and occasionally vampire hostel. Andris haven and art studio.',
    regnant: 'Andris',
    image: 'prison.png',
    map_marker_image: 'prison.svg',
    destroyed: false,
    coordinates: { lat: 56.979319, lng: 24.143493 }
  },
  {
    id: '14',
    name: 'Audreys apartment',
    description: 'An apartment given to Audrey as a haven. Old, dilapidated, but safe. For now.',
    regnant: 'Andris',
    image: 'audreys_apartment.png',
    map_marker_image: 'apartment.svg',
    destroyed: false,
    coordinates: { lat: 56.975975, lng: 24.139179 }
  }
];

export function getAllLocations(): Location[] {
  return locations;
}

export function getLocationById(id: string): Location | undefined {
  return locations.find((location) => location.id === id);
}
