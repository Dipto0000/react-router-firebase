import { useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState([])

    const signInWithUseGoogle = (user) => {
        console.log("Signing in soon");
    }

    return {user, signInWithUseGoogle};
};