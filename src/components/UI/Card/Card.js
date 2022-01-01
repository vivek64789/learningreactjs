import './Card.css';

const Card = (props) =>{
    let classes = 'customCard '+ props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;