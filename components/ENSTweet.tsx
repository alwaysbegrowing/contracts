import Script from "next/script";

export default function ENSTweet() {
  return (
    <>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          👀{" "}
          <a href="https://twitter.com/Uniswap?ref_src=twsrc%5Etfw">@Uniswap</a>{" "}
          is using immutable on-chain records of their{" "}
          <a href="https://twitter.com/hashtag/ENS?src=hash&amp;ref_src=twsrc%5Etfw">
            #ENS
          </a>{" "}
          name/subname to point to their official deployment contracts. 💪{" "}
          <a href="https://t.co/yaDpHCukLK">pic.twitter.com/yaDpHCukLK</a>
        </p>
        &mdash; ens.eth (@ensdomains){" "}
        <a href="https://twitter.com/ensdomains/status/1657095674587131904?ref_src=twsrc%5Etfw">
          May 12, 2023
        </a>
      </blockquote>
      <Script async src="https://platform.twitter.com/widgets.js"></Script>
    </>
  );
}
