import {Component, useState} from "react";
import {atom, RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil";

const nameState = atom({
  key: 'guyName',
  default: 'World',
});

class Main extends Component {
  render() {
    return (
      <div>
        <RecoilRoot>
          <Component1/>
          <Component2/>
        </RecoilRoot>
      </div>
    );
  }
}


export const Component1 = () => {
  const name = useRecoilValue(nameState);

  return (
    <div style={{border: "1px solid black", width: "300px", height: "100px"}}>
      Component 1 <br/>
      Hello : {name} !
    </div>
  )
}

export const Component2 = () => {

  const [name, setName] = useState('');
  const changeNameState = useSetRecoilState(nameState)

  const onChange = ({target: {value}}) => {
    setName(value);
  };

  const validate = () => {
    changeNameState(() => name)
  }

  return (
    <div style={{border: "1px solid black", width: "300px", height: "100px"}}>
      Component 2 <br/>
      <input type="text" value={name} onChange={onChange}/>
      <button onClick={() => validate()}>
        Change Name
      </button>
    </div>
  )
}

export default Main;
