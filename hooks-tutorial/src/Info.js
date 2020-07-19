import React, { useState } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChanngeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChanngeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <p>
                    <strong>이름 : </strong> {name}
                </p>
                <p>
                    <strong>닉네임 : </strong> {nickname}
                </p>
            </div>
        </div>
    )
}

export default Info;