import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [usr, setUsr] = useState("");
    const [age, setAge] = useState("");
    const [err, setErr] = useState();

    const usrChangeHandler = (e) => {
        setUsr(e.target.value);
    };
    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (usr.trim().length === 0 || age.trim().length === 0) {
            setErr({
                title: "Invalid input",
                msg: "Please enter a valid name and age",
            });
            return;
        }

        if (+age < 1) {
            setErr({
                title: "Invalid age",
                msg: "Please enter a valid age",
            });
            return;
        }

        const data = {
            key: Math.random(),
            username: usr,
            age: age,
        };

        props.onAddUser(data);
        setUsr('');
        setAge('');
    };

    const clickHandler = () => {
        setErr(null);
    };

    return (
        <div>
            {err && <ErrorModal onClick={clickHandler} title={err.title} msg={err.msg} />}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        value={usr}
                        id="username"
                        type="text"
                        onChange={usrChangeHandler}
                    />
                    <label htmlFor="number">Age</label>
                    <input
                        value={age}
                        id="number"
                        type="number"
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">
                        Add User
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
