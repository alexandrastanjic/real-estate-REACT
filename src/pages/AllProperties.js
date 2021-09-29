import MeetupList from '../components/properties/PropertyList';
import PropertyList from '../components/properties/PropertyList';

const DUMMY_DATA = [
  {
    id: 1,
    price: 12300,
    currency: '$',
    description: 'Luxury Villa, 228 Park Ave, NY',
    location: 'Park Avenue, NY, 10003-1502, US',
    bedrooms: 3,
    bathrooms: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/INDIGO_Interior_Design.jpg'
  },
  {
    id: 2,
    price: 9300,
    currency: '$',
    description: 'The Crystal Hyatt Place',
    location: 'NY, Midtown South, NY',
    bedrooms: 3,
    bathrooms: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/INDIGO_Interior_Design.jpg'
  },
  {
    id: 3,
    price: 12600,
    currency: '$',
    description: 'Exceptional Contemporary House',
    location: 'Park Avenue, NY, 10003-1502, US',
    bedrooms: 3,
    bathrooms: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/INDIGO_Interior_Design.jpg'
  },
  {
    id: 4,
    price: 7300,
    currency: '$',
    description: 'Milestone apartment and teracce',
    location: 'Park Avenue, NY, 10003-1502, US',
    bedrooms: 2,
    bathrooms: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/INDIGO_Interior_Design.jpg'
  },
  {
    id: 5,
    price: 10300,
    currency: '$',
    description: 'Bridge Promenade Villa',
    location: 'Park Avenue, NY, 10003-1502, US',
    bedrooms: 2,
    bathrooms: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/INDIGO_Interior_Design.jpg'
  },
  {
    id: 6,
    price: 6500,
    currency: '$',
    description: 'Downtown Suite',
    location: 'Park Avenue, NY, 10003-1502, US',
    bedrooms: 2,
    bathrooms: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/INDIGO_Interior_Design.jpg'
  }
];

function AllPropertiesPage() {
  return <section>
    <MeetupList properties={DUMMY_DATA} />

  </section>;
}

export default AllPropertiesPage;