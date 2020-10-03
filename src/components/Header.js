import React from 'react'
import Typed from "react-typed"
import {makeStyles} from "@material-ui/core/styles"
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core"
import avatar from "../images/avatar.png"

//CSS STYLES

const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color:"tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))
const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Sarthak Thakur"/>
            </Grid>
            <Typography 
            className={classes.title}
            variant="h4"
            >
                <Typed strings={["Sarthak Thakur"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle}
            variant="h5">
                <Typed 
                strings={["Full-Stack Web Development", "Mobile Development", "Machine Learning"]} 
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </Typography>
            <br/>
            <Typography
             className={classes.title}
             variant="h4">
                Skills
            </Typography>
            <br/>
            <Typography 
            className={classes.subtitle}
            variant="h5"
            >
                <Typed strings={[".NET/C#"]} typeSpeed={105}/>
                <br/>
                <Typed strings={["Java"]} typeSpeed={105}/>
                <br/>
                <Typed strings={["JavaScript"]} typeSpeed={105}/>
                <br/>
                <Typed strings={["HTML/CSS"]} typeSpeed={105}/>
                <br/>
                <Typed strings={["SQL"]} typeSpeed={105}/>
                <br/>
                <Typed strings={["Swift"]} typeSpeed={105}/>
                <br/>
                <Typed strings={["Kotlin"]} typeSpeed={105}/>

            </Typography>
        </Box>
    );
};

export default Header
