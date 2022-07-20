import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserError, getUserLoading, getUserSuccess } from '../Redux/actions';

export const Github = () => {
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector(state => state.users);
    const [text, setText] = useState("");

    const handleSearch = () => {
        dispatch(getUserLoading());
        axios.get(`https://api.github.com/search/users?q=${text}`).then((res) => {
            if (res.data.total_count === 0) {
                alert("User Not Found")
            }
            setText("");
            dispatch(getUserSuccess(res.data.items));
        }).catch((err) => {
            dispatch(getUserError());
        })
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Github User Search</h1>
            <div style={{ marginBottom: "30px", marginTop: "30px", textAlign: "center" }}>
                <input style={{padding:"5px", fontSize: "17px" , borderRadius: "10px",WebkitBorderTopRightRadius: "0px",WebkitBorderBottomRightRadius: "0px"}} type="text" placeholder='Username' value={text} onChange={(e) => setText(e.target.value)} />
                <button  style={{ padding: "7px", backgroundColor: "green", color: "white", borderRadius: "7px", WebkitBorderTopLeftRadius: "0px",WebkitBorderBottomLeftRadius: "0px"  ,cursor: "pointer", fontSize: "15px" }} onClick={handleSearch}>Search</button>
            </div>
            <hr />
            {loading ? <h1 style={{textAlign: "center"}}>...Loading</h1> : error ? <h1 style={{textAlign: "center"}}>...Something Went Wrong</h1> :
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "20px", marginTop: "30px", padding: "30px" }}>
                    {data.map((el) => (
                        <div key={el.id}>
                            <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", textAlign: 'center', padding: "20px", borderRadius: "10px" }}>
                                <img style={{ width: "200px", borderRadius: "50%" }} src={el.avatar_url} alt="" />
                                <h3 style={{ textAlign: "center" }}>{el.login}</h3><br />
                                <button style={{ padding: "7px", backgroundColor: "green", color: "white", borderRadius: "7px", cursor: "pointer", fontSize: "15px" }} onClick={() => window.open(el.html_url)}>Go To Profile</button>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}
