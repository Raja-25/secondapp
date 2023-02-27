import React,{useState} from 'react'

export default function Textbox(props) {
const [text, setText] = useState("");
const handleupclick=()=>{
let newtext=text.toUpperCase();
setText(newtext)


}

const handleupclick1=()=>{
	let newText2=text.toLowerCase();
	setText(newText2);
	
}
const handleupclick2=()=>{
  setText("");
  
  
  }
const handleonchange=(event)=>{
console.log("onchange called")
setText(event.target.value);
}
  return (
    <div>
        <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div className="form-floating my-4" >
	  <h1>{props.heading}</h1>
  <textarea className="form-control" placeholder="Type Here" id="floatingTextarea2" rows="15" align="center" value={text} onChange={handleonchange}> </textarea>
</div>
<button className='b1' id='demo'onClick={handleupclick}> Convert to uppercase</button>
<button className='b1' id='demo'onClick={handleupclick1}> Convert to Lppercase</button>
<button className='b1' id='demo'onClick={handleupclick2}> Clear</button>
</div>
<h1>Text Summary</h1>
	<p>{text.split(" ").length} Words  and {text.length} characters</p>
	 <p> Read time for all words is{0.08*text.split(" ").length} minutes</p>
    </div>
  )
  }
