import ProperyItem from './PropertyItem';
import classes from './PropertyList.module.css';

function PropertyList(props) {
  return <ul className={classes.list}>
    {props.properties.map(property => <ProperyItem key={property.id}
      id={property.id}
      image={property.image}
      description={property.description}
      location={property.location}
      price={property.price}
      currency={property.currency}
    />)}
  </ul>;

}

export default PropertyList;