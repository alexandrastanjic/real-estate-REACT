import Card from '../ui/Card';

import classes from './PropertyItem.module.css';

function ProperyItem(props) {
  // return <li>
  //   <Card>
  //     <div className={classes.single_property_wrapper}>
  //       <div className={classes.title_and_favorite_wrapper}>
  //         <div className={classes.title_wrapper}>
  //           {props.description}
  //         </div>
  //         <div className={classes.favorites_call_to_action}>
  //           <button>To Favorites</button>
  //         </div>
  //       </div>
  //       <div className={classes.property_image_wrapper}>
  //         <img src={props.imgUrl} alt="property-img" />
  //       </div>
  //       <div className={classes.location_wrapper}>
  //         <address>{props.location}</address>
  //       </div>
  //       <div className={classes.property_info_wrapper}>
  //         <div className={classes.beds_bath}>

  //           <div className={classes.beds_wrapper}>{props.bedrooms}</div>
  //           <div className={classes.baths_wrapper}>{props.bathrooms}</div>
  //         </div>
  //         <div className={classes.price}>{props.price}</div>
  //       </div>

  //     </div>
  //   </Card>
  // </li>;
  // }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.title}>
          <h3>{props.description}</h3>
        </div>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <address>{props.location}</address>
          <div className={classes.price}>{props.currency}{props.price}</div>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}


export default ProperyItem;