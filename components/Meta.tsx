import Head from "next/head";

export const Manifest = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/meta/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/meta/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/meta/favicon-16x16.png"
      />
      <link rel="manifest" href="/meta/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/meta/safari-pinned-tab.svg"
        color="#7aa332"
      />
      <meta name="apple-mobile-web-app-title" content="dAppling" />
      <meta name="application-name" content="dAppling" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#232323" />
    </Head>
  );
};

export const Description = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <title itemProp="name">
        Rooted in Nature, Growing with You | dAppling Tools
      </title>
      <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
      <meta
        name="description"
        content="dAppling Tools - Deploy apps seamlessly to decentralized infrastructure. Experience the power of decentralized technology with ease."
      />
      <meta
        name="keywords"
        content="dAppling Tools, Decentralized, Web3, Deployment, Infrastructure, Technology"
      />

      <meta name="subject" content="Decentralized App Deployment" />
      <meta name="pagename" content="dAppling Tools - Decentralized App Deployment" />
      <meta name="copyright" content="dAppling Tools" />
      <meta
        name="abstract"
        content="dAppling Tools offers an easy way to deploy apps to decentralized infrastructure, empowering users to leverage the benefits of decentralized technology."
      />
      <meta name="topic" content="Decentralized Technology" />
      <meta
        name="summary"
        content="dAppling Tools enables seamless deployment of apps to decentralized infrastructure, revolutionizing the way you experience decentralized technology."
      />

      <meta name="renderer" content="webkit" />

      <meta content="origin" id="mref" name="referrer" />

      <meta name="Classification" content="Technology" />
      <meta name="designer" content="dAppling Tools Design Team" />
      <meta name="reply-to" content="support@dappling.com" />
      <meta name="owner" content="dAppling Tools" />

      <meta name="url" content="https://dappling.network" />
      <meta name="identifier-URL" content="https://dappling.network" />

      <meta name="directory" content="submission" />
      <meta name="category" content="Technology" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />

      <meta name="rating" content="General" />

      <meta name="revised" content={Date.now().toLocaleString()} />
      <meta name="revisit-after" content="7 days" />

      <meta name="author" content="dAppling Tools Team" />
      <meta name="generator" content="dAppling Tools" />

      <meta name="target" content="all" />

      <meta
        name="og:title"
        content="dAppling Tools - Rooted in Nature, Growing with You"
      />
      <meta name="og:type" content="website" />
      <meta name="og:url" content="https://dappling.network" />
      <meta name="og:image" content="/images/tree-with-text.jpg" />
      <meta name="og:site_name" content="dAppling Tools" />
      <meta
        name="og:description"
        content="dAppling Tools - Deploy apps seamlessly to decentralized infrastructure. Experience the power of decentralized technology with ease."
      />

      <meta property="profile:first_name" content="dAppling Tools" />
      <meta property="profile:last_name" content="Team" />
      <meta property="profile:username" content="dAppling Tools" />

      <meta name="og:email" content="support@dappling.com" />

      <meta name="og:latitude" content="27.985667108983073" />
      <meta name="og:longitude" content="-15.522672900302613" />
      <meta name="og:street-address" content="C. Maestro Fermín Peñate, 2" />
      <meta name="og:locality" content="Tenteniguada" />
      <meta name="og:region" content="Las Palmas" />
      <meta name="og:postal-code" content="35216" />
      <meta name="og:country-name " content="Spain" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@dAppling" />
      <meta name="twitter:creator" content="@dAppling" />
      <meta name="twitter:url" content="https://dappling.network" />
      <meta
        name="twitter:title"
        content="Rooted in Nature, Growing with You | dAppling Tools"
      />
      <meta
        name="twitter:description"
        content="dAppling Tools - Deploy apps seamlessly to decentralized infrastructure. Experience the power of decentralized technology with ease."
      />
      <meta name="twitter:image" content="/images/tree-with-text.jpg" />
    </Head>
  );
};

const addJsonLd = () => {
  return {
    __html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "dAppling Tools",
      "image": [
        "="/images/tree-with-text.jpg",
        "/images/wordmark.svg",
        "/images/logo.svg"
       ],
      "description": "dAppling Tools - Deploy apps seamlessly to decentralized infrastructure. Experience the power of decentralized technology with ease.",
      "sku": "DPL001",
      "mpn": "DPL2029",
      "brand": {
        "@type": "Brand",
        "name": "dAppling Tools"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "dAppling Team"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "150"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://dappling.network",
        "priceCurrency": "USD",
        "price": "49.99",
        "priceValidUntil": "2023-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock"
      }
    }
  `,
  };
};

export default function Meta() {
  return (
    <>
      <Manifest />
      <Description />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addJsonLd()}
        key="product-jsonld"
      />
    </>
  );
}
