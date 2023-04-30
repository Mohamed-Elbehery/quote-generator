import "./App.css";
import { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <FacebookShareButton
          url={"https://github.com/intern2grow/quote-generator"}
          hashtag={"#Moaaz JR"}
          quote={quote?.content}
          title={"Quote Generator Task"}
        >
          <FacebookIcon className="icon" size={50} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton
          title={quote?.content}
          url={"https://github.com/intern2grow/quote-generator"}
        >
          <WhatsappIcon className="icon" size={50} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton
          url={"https://github.com/intern2grow/quote-generator"}
          title={"Quote Generator Task"}
          hashtags={["#React"]}
        >
          <TwitterIcon className="icon" size={50} round={true} />
        </TwitterShareButton>
        <TelegramShareButton
          url={"https://github.com/intern2grow/quote-generator"}
          title={"Quote Generator Task"}
        >
          <TelegramIcon className="icon telegram" size={50} round={true} />
        </TelegramShareButton>
      </div>
    </>
  );
};

export default App;
