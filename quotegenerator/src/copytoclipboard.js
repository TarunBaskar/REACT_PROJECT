import { CopyToClipboard } from "react-copy-to-clipboard";

const [copied, setCopied] = useState(false);
const [text, setText] = useState("Hello, world!");

function resetCopied() {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  

return(
<CopyToClipboard text={text} onCopy={() => {setCopied(true); resetCopied();}}>
  <button onClick={() => {}}>
    Copy to clipboard
  </button>
</CopyToClipboard>


)
