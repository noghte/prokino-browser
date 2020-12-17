import {splitString} from '../StringHelper';
import React from 'react';

export default function SequenceViewer({sequence}){
    // const [showMe, setShowMe] = useState(false);
    
    // function breakSequence(size){
    //     const chunks = new Array(size)
    //     const length = sequence.toString().length / size;
    //     for (let i=0, o=0; i < length; ++i, o += size)
    //         chunks[i] = sequence.toString().substr(o, size);
    //     return chunks.join("<br />");
    // }
    const size = 60;
    // const handleChange = (event,value) => {
    //     setSize(value);
    //   };
    function showLineNumbers()
    {
        if (!sequence)
            return [];

        let length = sequence.toString().length;
        let numbers = []
        for (let i=1; i<length;i+=size)
            numbers.push(i);
        
        return numbers.map((item,i) => <>{item}{<br />}</>);
    }

    function breakSequence(str=sequence?sequence.toString():"") {
        const chunks = [].concat.apply([],
            str.split('').map(function(x,i){ return i%size ? [] : str.slice(i,i+size) }, str));
        return chunks.map((item,i) => <>{splitString(item)}{<br />}</>);
    }



    //   const Highlighted = ({text = '', highlight = ''}) => {
    //     if (!highlight.trim()) {
    //       return <span>{text}</span>
    //     }
    //     const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, 'gi')
    //     const parts = text.split(regex)
    //     return (
    //       <span>
    //          {parts.filter(part => part).map((part, i) => (
    //              regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
    //          ))}
    //      </span>
    //     )
    //  }
      
    return (
        // let header = sequenceOptions.header.display ? <div className="sequenceHeader row" style="border-bottom: 1px solid #E7EAEC;padding-bottom:5px;margin:0px 0px 10px"> +
        // displayBadge + <h4 style="display:inline-block;vertical-align:middle;"> + sequenceOptions.title + </h4> +
        // </div> : ;
            // <div className="scroller">
            //     <div className="charNumbers"></div>
            //     <div className="fastaSeq" >
            //         {sequence} 
            //     </div>
            // </div>
            <>
            <div className="sequenceHeader row" style={{borderBottom:'1px solid #E7EAEC',paddingBottom:'-5px',margin:'0px 0px 10px'}}>
                <div style={{display:'inline-block'}}>
                    <span className="badge" style={{borderRadius:"70%",border:"2px solid black",color:"#C50063",padding:"8px 5px",backgroundColor:"white",marginRight:"10px",verticalAlign:"middle",minWidth:"32px"}}>
                        {sequence ? sequence.toString().length:0}
                    </span>
                    </div>
                    <input className="inputSearchSeq form-control pull-right" type="text" style={{width:'30%', marginLeft:'2rem'}} placeholder="Search in sequence.." />
            </div>
            
            <div className="scroller" style={{overflow:'auto',whiteSpace: 'nowrap',paddingRight:'20px',marginRight:'10px'}}>
                <div className="charNumbers" style={{fontFamily: 'monospace',fontSize: '13px',display:'inline-block', textAlign:'right', paddingRight:'5px', borderRight:'1px solid LightGray'}}>
                    {showLineNumbers()}
                </div>
                <div className="fastaSeq" style={{fontFamily: 'monospace',fontSize: '13px',display:'inline-block',padding:'5px'}}>
                    {breakSequence()}
                </div>
            </div>
            

        </>
    
    );
  }
  