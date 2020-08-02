import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChannge = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChannge} />
        <input name="nickname" value={nickname} onChange={onChannge} />
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
  );
};

export default Info;
