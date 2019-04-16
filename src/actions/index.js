export const fetchUserCredentials = data => dispatch => {
    console.log("fetchAPi");
    fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        body: JSON.stringify({
            email: "rajatjainwal5@gmail.com",
            password: "123456"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: "LOGIN",
                payload: data
            })
        );
};
