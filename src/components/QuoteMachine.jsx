import { FaTwitter, FaTumblr } from "react-icons/fa";
import styled from "styled-components";

function QuoteMachine({ info, clickHandler, color }) {
  const url = {
    twitter: `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${info.quote}"  -${info.author}`,
    tumblr: `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${info.author}&content=${info.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`,
  };

  return (
    <QuoteBox>
      <Text color={color}>" {info.quote}</Text>
      <Author color={color}>-{info.author}</Author>
      <Buttons>
        <Social>
          <Twitter target={"_blank"} href={url.twitter} color={color}>
            <FaTwitter />
          </Twitter>

          <TumblrLink target={"_blank"} href={url.tumblr} color={color}>
            <FaTumblr />
          </TumblrLink>
        </Social>

        <QuoteBtn onClick={clickHandler} color={color}>
          New Quote
        </QuoteBtn>
      </Buttons>
    </QuoteBox>
  );
}

const QuoteBox = styled.div`
  width: min(600px, 90vw);
  // min-height: 300px;
  background-color: #f1eaea;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-content: space-between;
  padding: 3rem;
  padding-top: 2.5rem;
  // color: inherit;
  gap: 1.5rem;
  border-radius: 0.3rem;
`;

const Text = styled.span`
  width: 100%;
  // min-height: 50%;
  font-size: clamp(16px, 10vw, 28px);
  font-weight: 800;
  // font-style: italic;
  text-align: center;
  // background-color:red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  transition: color 0.5s ease;
`;

const Author = styled.span`
  font-size: clamp(12px, 10vw, 18px);
  font-weight: 500;
  width: 100%;
  text-align: end;
  color: ${({ color }) => color};
  transition: color 0.5s ease;
`;

const Buttons = styled.div`
  height: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  //    background-color: red;
  //    padding: 1rem;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Twitter = styled.a`
  height: 100%;
  padding: 0.6rem;
  border-radius: 0.2rem;

  background-color: ${({ color }) => color};
  transition: background-color 0.5s ease;
  color: #fafafa;
`;

const TumblrLink = styled.a`
  height: 100%;
  padding: 0.6rem;
  border-radius: 0.2rem;
  background-color: ${({ color }) => color};
  transition: background-color 0.5s ease;
  color: #fafafa;
`;

const QuoteBtn = styled.button`
  height: 100%;
  font-size: clamp(12px, 10vw, 18px);
  padding: 0.6rem;
  border-radius: 0.2rem;
  background-color: ${({ color }) => color};
  transition: background-color 0.5s ease;
  color: #fafafa;
  border: none;
  cursor: pointer;
`;

export default QuoteMachine;
