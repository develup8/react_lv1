import React from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
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
