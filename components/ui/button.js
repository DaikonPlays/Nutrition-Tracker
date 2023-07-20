import Link from "next/link";

import classes from './button.module.css'
function Button(props) {
    return (
    // <Link href={props.link} className={classes.btn}>
    //     {props.children}
    // </Link>
    <label className={classes.btn}>{props.children}</label>
    )
}

export default Button;