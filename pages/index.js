import Head from "next/head";

import { NavBar } from "../components/NavBar";
import { GithubIcon } from "../components/icons/SocialMediaIcons";

export default function Home() {
  return (
    <>
      <Head>
        <title>francoiscote.net</title>
      </Head>

      <NavBar />

      <div className="text-center mt-20">
        <h1>Bonjour,</h1>
        <div className="mb-12">
          <p className="lead">
            My name is <strong>François Côté</strong>,
            <br />
            and I am a <strong>Web Developer</strong> based in{" "}
            <strong>Montréal (QC), Canada</strong>.
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.github.com/francoiscote"
            className="text-gray-300 hover:text-gray-400"
          >
            <GithubIcon className="h-7 w-7 transition-colors" />
          </a>
        </div>
      </div>
    </>
  );
}
