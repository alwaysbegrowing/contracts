import Script from "next/script";

export default function ErinTweet() {
  return (
    <>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Yep thinking was that if someone wanted to make a gov proposal e.g. to
          turn on a fee tier they&apos;d need to know the bridge sender contract
          address on mainnet and the factory address on the destination
        </p>
        &mdash; Erin Koen (@eek637){" "}
        <a href="https://twitter.com/eek637/status/1657400835532365825?ref_src=twsrc%5Etfw">
          May 13, 2023
        </a>
      </blockquote>{" "}
      <Script async src="https://platform.twitter.com/widgets.js?a=b"></Script>
    </>
  );
}
